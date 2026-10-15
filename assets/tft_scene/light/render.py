# Rebuild clean SVG prototypes while preserving exact source glyphs and icons.
from pathlib import Path
import base64,json,html,struct
root=Path(__file__).resolve().parents[3];folder=root/'assets/tft_scene/light';m=json.loads((folder/'manifest.json').read_text())
INK='#344054';LINE='#E5E7EB';BLUE='#2283E2';LIGHT='#E5F0FF';GRAY='#F8FAFC'
class Flat:
 def __init__(self,item):
  self.item=item;self.raw=(root/item['original']).read_bytes();self.w,self.h=struct.unpack('>II',self.raw[16:24]);self.shapes=[];self.holes=[];self.restore=[];self.white=[];self.icons=[];self.solid=[]
 def rect(self,x,y,w,h,fill='white',rx=12,stroke='none',sw=1):self.shapes.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')
 def circle(self,x,y,r,fill=LIGHT,stroke='none',sw=1):self.shapes.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')
 def motif(self,x,y,r):self.circle(x-r*.27,y+r*.08,r,LIGHT);self.circle(x+r*.42,y-r*.35,r*.77,'#DBEAFE');self.circle(x+r*.42,y+r*.40,r*.66,'#C9DFF7')
 def line(self,x,y,x2,y2):self.shapes.append(f'<path d="M{x} {y}L{x2} {y2}" stroke="{LINE}" stroke-width="2" fill="none"/>')
 def poly(self,points,fill):self.shapes.append(f'<polygon points="{points}" fill="{fill}"/>')
 def hole(self,x,y,w,h):self.holes.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="black"/>')
 def keep(self,x,y,w,h):self.restore.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="white"/>')
 def white_keep(self,x,y,w,h):self.white.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}"/>')
 def solid_keep(self,x,y,w,h):self.solid.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}"/>')
 def icon(self,x,y,w,h):self.icons.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}"/>')
 def switch(self,x,y,w,h,on=True):
  self.rect(x,y,w,h,BLUE if on else '#DDE3EA',h/2);self.circle(x+w-h/2 if on else x+h/2,y+h/2,h/2-5,'white')
 def finish(self):
  from PIL import Image
  import math
  w,h=self.w,self.h;n=Path(self.item['original']).stem;portrait=self.item['portrait'];washer='wm_' in n;ai='_ai_' in n;adjust='adjust' in n;running='in progress' in n;done='done' in n;settings='settings' in n;consum='consumables' in n;energy='energy consumption' in n;scanning=any(t in n for t in ['weighing','material','color','identif'])
  source=Image.open(root/self.item['original']).convert('RGBA');ocr=json.loads((folder/'source-text-regions.json').read_text())[self.item['asset']]
  def lum(x,y):
   r,g,b,a=source.getpixel((min(w-1,max(0,x)),min(h-1,max(0,y))));return (r*.2126+g*.7152+b*.0722)/255*(a/255)+(1-a/255)
  def pct(xs,q):return sorted(xs)[min(len(xs)-1,int((len(xs)-1)*q))]
  defs=[f'<image id="original" width="{w}" height="{h}" href="data:image/png;base64,{base64.b64encode(self.raw).decode()}"/>'];layers=[];count=0
  def source_region(x,y,cw,ch,color=INK,threshold=.72,dark=0,light=False,adaptive=False):
   nonlocal count
   x=max(0,x);y=max(0,y);cw=min(w-x,cw);ch=min(h-y,ch)
   if cw<=0 or ch<=0:return
   if adaptive:
    x1,y1,x2,y2=int(x),int(y),min(w-1,int(x+cw)),min(h-1,int(y+ch));step=max(1,int(math.sqrt(cw*ch/4000)))
    values=[lum(px,py) for py in range(y1,y2+1,step) for px in range(x1,x2+1,step)];border=[lum(px,yy) for px in range(x1,x2+1,step) for yy in [y1,y2]]+[lum(xx,py) for py in range(y1,y2+1,step) for xx in [x1,x2]]
    if not values:return
    bg=pct(border,.5);low=min(values);high=max(values);light=(high-bg)>(bg-low)
    if max(bg-low,high-bg)<.12:return
    if light:
     threshold=bg+(high-bg)*.55;dark=high;color='white'
    else:
     threshold=low+(bg-low)*.62;dark=low;color=INK if low<.25 else '#667085' if low<.62 else '#98A2B3'
    if abs(threshold-dark)<.035:
     threshold=.94;dark=.2;color=INK;light=False
   count+=1;fid=f'g{count}';cid=f'c{count}'
   # Preserve the source glyphs directly. The mask is local to a text/icon box;
   # no full-image edge detection or blur is applied.
   if light:slope=1/max(.03,dark-threshold);intercept=-threshold*slope;alpha_row='0.2126 0.7152 0.0722 0 0'
   else:slope=1/max(.03,threshold-dark);intercept=-(1-threshold)*slope;alpha_row='-0.2126 -0.7152 -0.0722 0 1'
   defs.append(f'<clipPath id="{cid}"><rect x="{x:.2f}" y="{y:.2f}" width="{cw:.2f}" height="{ch:.2f}"/></clipPath><filter id="{fid}" filterUnits="userSpaceOnUse" x="{x:.2f}" y="{y:.2f}" width="{cw:.2f}" height="{ch:.2f}" color-interpolation-filters="sRGB"><feFlood flood-color="white" result="paper"/><feMerge><feMergeNode in="paper"/><feMergeNode in="SourceGraphic"/></feMerge><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  {alpha_row}"/><feComponentTransfer result="mask"><feFuncA type="linear" slope="{slope:.5f}" intercept="{intercept:.5f}"/></feComponentTransfer><feMorphology in="mask" operator="dilate" radius="0.65" result="glyph"/><feFlood flood-color="{color}"/><feComposite operator="in" in2="glyph"/></filter>')
   layers.append(f'<use href="#original" filter="url(#{fid})" clip-path="url(#{cid})"/>')
  # OCR supplies bounding boxes only; its recognized strings are never used to
  # rewrite the image, so the original text cannot be silently changed.
  for box in ocr:
   if not portrait and 700<box['x']<840 and 298<box['y']<340:continue
   source_region(box['x']-2,box['y']-2,box['width']+4,box['height']+4,adaptive=True)
  # Exact source icons in small, intentional regions; never entire screens.
  if not portrait:
   if not settings:
    source_region(w-220,10,130,38,threshold=.78)
    if consum or energy:
     source_region(w-74,95,70,208,threshold=.72);source_region(1332,145,69,121,threshold=.72);source_region(1399,182,33,74,threshold=.72)
    elif not adjust:
     if not running and not done:source_region(14,10,48,315,threshold=.72)
     elif washer:source_region(23,14,36,38,threshold=.72)
     source_region(1401,169,58,53,threshold=.65)
     if done:source_region(1030,353,w-1045,46,threshold=.72)
     if not running and not done and not ai and ('home' in n or 'choose' in n):
      for j in range(7):self.circle(723+j*13,312 if '/simple/' in self.item['original'] and 'home' in n else 325,4,BLUE if j==3 else '#CBD5E1')
     if not washer and 'home' in n and not ai:source_region(1307,68,182,62,threshold=.79)
    if ai and (scanning or 'home' in n):source_region(713,131,96,94,threshold=.6)
    if adjust:
     source_region(737,60,38,30,threshold=.72);source_region(1400,174,59,48,threshold=.65)
   else:
    source_region(931,102,147,33,adaptive=True)
    for x,y in [(1087,105),(1411,104),(1087,264),(1411,269)]:source_region(x,y,31,32,threshold=.7)
    for y in [171,263]:source_region(77,y+5,38,46,color='white',threshold=.73,dark=1,light=True)
  else:
   wide=w>600;ox=36 if wide else 0;pw=418 if wide else w
   if not adjust:
    source_region(ox+26,77,44,67,threshold=.78);source_region(ox+244,87,54,49,threshold=.78);source_region(ox+360,84,49,52,threshold=.78)
   source_region(ox+263,8,pw-ox-267,37,threshold=.78)
   if adjust:
    source_region(192,122,42,30,threshold=.72);source_region(179,1273 if washer else 1282,59,67,threshold=.72)
   elif not (ai and ('home' in n or scanning)):
    source_region(181,910,61,62,threshold=.7)
    if not washer:source_region(118,h-89,180,64,threshold=.8)
    if done:source_region(155,1317,55,87,color='white',threshold=.73,dark=1,light=True)
   if scanning:source_region(ox+184,701,89,99,threshold=.6)
  # Keep the user's voice assistant artwork, clipped tightly to its icon.
  for i,clip in enumerate(self.icons):
   cid=f'voice{i}';defs.append(f'<clipPath id="{cid}">{clip}</clipPath>');layers.append(f'<use href="#original" clip-path="url(#{cid})"/>')
  art_left=154 if 'menu' in n and 'choose' in n else 65
  defs.append(f'<clipPath id="art-scroll"><rect x="{art_left}" y="60" width="{max(1,w-art_left-142)}" height="277"/></clipPath>')
  defs.append(f'<clipPath id="frame"><rect x="1" y="1" width="{w-2}" height="{h-2}" rx="16"/></clipPath>')
  return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img"><title>{html.escape(self.item["title"]+" · "+self.item["state"])}</title><desc>保留原图文字和图标；背景、控件与线条使用无阴影的扁平图形。</desc><defs>'+''.join(defs)+'</defs><g clip-path="url(#frame)">'+''.join(self.shapes)+''.join(layers)+f'</g><rect x="1" y="1" width="{w-2}" height="{h-2}" rx="16" fill="none" stroke="{LINE}" stroke-width="2"/></svg>'
for item in m:
 n=Path(item['original']).stem;portrait=item['portrait'];washer='wm_' in n;ai='_ai_' in n;adjust='adjust' in n;running='in progress' in n;done='done' in n;home='home' in n;menu='menu' in n;choose='choose' in n;scanning=any(x in n for x in ['weighing','material','color','identif']);program='program' in n;energy='energy consumption' in n;consum='consumables' in n;settings='settings' in n;simple='/simple/' in item['original']
 d=Flat(item);w,h=d.w,d.h;d.rect(1,1,w-2,h-2,'white',16)
 if not portrait:
  if settings:
   d.hole(0,0,w,h)
   for region in [(70,80,200,47),(537,96,155,42),(858,92,250,51),(1181,92,251,51),(537,250,143,45),(858,248,250,51),(1181,248,251,51)]:d.keep(*region)
   d.rect(16,16,w-32,h-32,GRAY,12)
   for x,y,cw,ch in [(32,46,432,302),(510,46,300,142),(510,206,300,142),(831,46,301,142),(831,206,301,142),(1158,46,300,142),(1158,206,300,142)]:d.rect(x,y,cw,ch,'white',24,LINE)
   for x,y,ww,hh,on in [(357,83,83,52,False),(711,91,83,52,True),(712,251,83,52,False)]:d.switch(x,y,ww,hh,on);d.hole(x-10,y-10,ww+20,hh+20)
   for y,filled in [(171,170),(263,265)]:
    d.rect(62,y,379,57,'white',28,LINE,2);d.rect(63,y+1,filled,55,BLUE,27);d.white_keep(77,y+5,38,46);d.hole(60,y-2,383,61)
   d.line(68,140,436,140);d.hole(66,138,372,5);d.hole((w-105)/2,h-40,105,28);d.rect((w-85)/2,h-26,85,5,'#CBD5E1',3)
  elif consum or energy:
   d.rect(16,16,w-32,h-32,GRAY,12);d.rect(w-68,16,52,h-32,'white',8);d.line(w-70,16,w-70,h-16);d.solid_keep(w-74,0,74,h)
   for j,y in enumerate([142,222]):d.rect(49,y,97,49,BLUE if (consum and j==0) or (energy and j==1) else 'white',24,LINE,2)
   d.white_keep(65,145 if consum else 224,63,43)
   if consum:
    if washer:
     d.poly('377,40 489,44 540,32 432,26','#EDF2F7');d.poly('489,44 540,32 540,347 489,379','#DDE7F2');d.rect(377,40,112,162,'white',0,LINE);d.rect(377,209,112,163,'#EDF2F7',0,LINE);d.circle(436,123,53,LIGHT);d.circle(438,295,58,LIGHT);d.circle(348,124,41,'#DBEAFE',LINE,2)
    else:
     d.poly('340,115 538,123 602,107 404,104','#EDF2F7');d.poly('538,123 602,107 602,290 538,322','#DDE7F2');d.poly('340,115 538,123 538,322 340,313','white');d.rect(392,127,94,25,GRAY,3,LINE);d.poly('353,157 524,165 524,290 353,282',LIGHT)
    for x,fraction in [(704,.3),(925,.6)]:
     d.poly(f'{x},154 {x+46},166 {x+46},291 {x},274','white');d.poly(f'{x+46},166 {x+93},152 {x+93},272 {x+46},291',GRAY)
     level=276-130*fraction
     d.poly(f'{x},{level} {x+46},{level+15} {x+93},{level} {x+46},{level-12}', '#DBEAFE')
     d.poly(f'{x},{level} {x+46},{level+15} {x+46},291 {x},274', LIGHT);d.poly(f'{x+46},{level+15} {x+93},{level} {x+93},272 {x+46},291', '#C9DFF7')
     d.poly(f'{x},154 {x+45},140 {x+93},152 {x+46},166',GRAY)
     for edge in [(x,154,x+46,166),(x+46,166,x+93,152),(x,154,x,274),(x+46,166,x+46,291),(x+93,152,x+93,272),(x,274,x+46,291),(x+46,291,x+93,272)]:d.line(*edge)
   else:
    # The original seven measurements and their chart positions are preserved.
    for x in [307,820]:
     d.rect(x,140,391,232,'white',4,LINE);d.rect(x,70,395,21,'white',10,LINE);d.rect(x+172,70,64,21,LIGHT,10)
     for yy in [181,220,259,298,337]:d.line(x,yy,x+391,yy)
    for xx,yy in [(320,199),(373,247),(426,231),(482,210),(535,277),(588,246),(641,269)]:d.rect(xx,yy,15,372-yy,LIGHT,7)
    d.line(381,227,381,372);d.rect(359,168,50,29,LIGHT,15)
    pts=[(817,214),(884,234),(950,244),(1012,236),(1075,242),(1144,234),(1210,239)]
    d.shapes.append('<path d="'+' '.join(('M' if j==0 else 'L')+str(xx)+' '+str(yy) for j,(xx,yy) in enumerate(pts))+f'" fill="none" stroke="{BLUE}" stroke-width="2"/>')
    for xx,yy in pts:d.circle(xx,yy,4,BLUE)
    d.line(884,234,884,372);d.rect(861,189,50,29,LIGHT,15)
  else:
   # Original left rail retains special selection above AI / regular icons.
   if not choose and not adjust and not running and not done:d.rect(4,4,69,h-8,GRAY,10);d.line(75,18,75,h-18);d.solid_keep(4,5,69,h-10)
   if washer and (running or done):d.rect(28,18,23,29,GRAY,3);d.solid_keep(25,14,30,34)
   if choose and menu:
    d.rect(4,68,148,h-74,GRAY,10);d.line(153,82,153,h-30)
   if ai and (home or scanning):
    d.circle(756,206,146,LIGHT)
    if home:d.rect(498,48,517,55,'white',27,LINE,2);d.icon(520,45,73,54)
    if scanning:
     d.circle(756,206,128,'none','#B9D5F2',3)
     if 'weighing' in n or 'identif' in n:d.shapes[-1]=d.shapes[-1].replace('stroke-width="3"','stroke-width="3" stroke-dasharray="25 18"')
   elif adjust:
    d.rect(98,86,w-231,267,GRAY,18,LINE)
    # Parameter wheel locations and values stay in their source positions.
    for x in ([443,624] if washer else [535,914,1201]):d.line(x,96,x,318)
    d.switch(1151,169,83,49,True) if washer else None
    d.rect(1379,149,90,90,LIGHT,22,LINE,2);d.rect(1379,285,90,50,'white',25,LINE,2)
   else:
    if choose:
     d.shapes.append('<g clip-path="url(#art-scroll)">');d.motif(160,185,78);d.motif(748,185,104);d.motif(445,195,76);d.motif(1130,195,76);d.motif(1440,185,70);d.shapes.append('</g>')
     d.hole(154 if menu else 70,63,1181 if menu else 1303,274);d.keep(625,258,273,55);d.keep(705,311,144,22);d.rect(628 if menu else 664,258,257 if menu else 185,52,LIGHT,26,LINE)
     d.keep(1397,77,86,43)
    else:
     d.motif(724,182,142)
     if running or done:d.hole(530,10,460,312)
     else:d.hole(535,4,465,335);d.keep(555 if not washer and not ai and not simple else 622,14,405 if not washer and not ai and not simple else 269,64);d.keep(663,252,193,67);d.keep(705,302,140,33)
     if not simple and not running and not done and not (menu and home):d.rect(681 if washer or ai else 669,255,154 if washer or ai else 175,53,LIGHT,27)
    if not simple and not running and not done and not choose:d.rect(625 if washer or ai else 562,17,263 if washer or ai else 388,59,GRAY,16,LINE)
    if not washer and home and not ai:
     for ax in ([1327,1389,1449] if not menu and not simple else [1341,1405,1461]):d.circle(ax,102 if not menu and not simple else 92,24,'white',LINE,2)
    d.rect(1387,153,91,92,LIGHT,23,LINE,2) if not choose else d.rect(1396,142,89,88,LIGHT,23,LINE,2)
    
    if not running and not done:
     d.rect(1387,261,91,50,'white',25,LINE,2) if not choose else d.rect(1396,257,89,51,'white',25,LINE,2)
    if not choose:
     d.hole(1386,152,94,94);d.keep(1403,174,56,46)
     if not running and not done:d.hole(1385,259,97,54);d.keep(1402,271,60,30)
   if not ai or program or (ai and done):
    if not adjust:d.rect(75,324 if running or done else 340,w-152,88 if running or done else 74,GRAY,0);d.line(75,324 if running or done else 340,w-75,324 if running or done else 340)
   if not adjust:
    d.rect((w-70)/2,18,70,4,'#CBD5E1',2)
    if not (ai and home):d.icon(83,2,90,72)
   # Native flat backs for the original pause/start/check and appointment widgets.
   if not adjust and (not ai or program):
    divider=324 if running or done else 340;d.hole(75,divider-2,w-150,5)
   if running:
    d.rect(1221,345,140,50,'white',25,LINE,2);d.hole(1220,343,144,54);d.keep(1245,353,95,30)
    d.rect(1385,345,90,50,'white',25,LINE,2);d.hole(1384,343,94,54);d.keep(1402,353,57,30)
  if 'operating status' in n:d.rect(86,77,153,38,LIGHT,19)
 else:
  wide=w>600;offset=36 if wide else 0;pw=418 if wide else w
  if adjust:
   d.rect(offset+2,65,pw-4,h-67,GRAY,10)
   blocks=[(175,210),(431,193),(658,196),(890,195)] if washer else [(293,198),(506,203),(755,200),(969,203)]
   for y,ch in blocks:d.rect(offset+25,y,pw-50,ch,'white',16,LINE)
   if washer:d.switch(166,1094,83,49,True);d.rect(163,1261,89,89,LIGHT,23,LINE,2);d.rect(163,1393,89,50,'white',25,LINE,2)
   else:d.rect(164,1270,89,89,LIGHT,23,LINE,2);d.rect(164,1401,89,50,'white',25,LINE,2)
  else:
   d.rect(offset+2,65,pw-4,86,GRAY,10);d.line(offset+16,152,offset+pw-16,152);d.solid_keep(offset+2,65,pw-4,86)
   if ai and home:
    if washer:d.rect(30,410,355,104,'white',28,LINE,2)
    else:d.rect(28,256,356,148,'white',28,LINE,2)
    d.icon(47,425 if washer else 267,65,43)
   elif scanning:
    d.circle(offset+200,765,144,LIGHT);d.circle(offset+200,765,132,'none','#B9D5F2',3)
    if wide:
     for y in [370,758,1144]:d.circle(632,y,128,GRAY,LINE,2)
   else:
    if running or (done and not (ai and washer)):
     d.motif(210,650,143);d.hole(18,504,pw-36,253);d.rect(166,895,90,89,LIGHT,23,LINE,2)
     if running:
      d.rect(140,1230,140,50,'white',25,LINE,2);d.rect(140,1319,140,50,'white',25,LINE,2)
    else:
     for cx,cy,r in [(209,350,110),(210,650,144),(209,1142,110)]:d.motif(cx,cy,r)
     for x,y,ww,hh in [(0,235,pw,197),(0,512,pw,234),(0,1026,pw,197),(0,1320,pw,180)]:d.hole(x,y,ww,hh)
     d.keep(0,1410,pw,100)
     if not washer:d.rect(15,156,pw-30,56,GRAY,16,LINE)
     elif not ai:d.rect(79,161,262,59,GRAY,16,LINE)
     d.rect(80 if 'menu1' in n else 131 if 'menu2' in n else 124,831 if 'menu1' in n else 832 if not washer else 828,287 if 'menu1' in n else 195,50,LIGHT,25,LINE,2);d.rect(172,895,89,89,LIGHT,23,LINE,2)
    if not washer:
     d.rect(14,h-136,pw-28,122,GRAY,10);d.line(14,h-137,pw-14,h-137)
  d.rect(offset+(pw-70)/2,17,70,4,'#CBD5E1',2);d.icon(8,1,70,59)
 d.hole(0,0,w,3);d.hole(0,h-3,w,3);d.hole(0,0,3,h);d.hole(w-3,0,3,h)
 item['rendering']='clean-flat-original-glyph-regions-no-shadow';(folder/item['asset']).write_text(d.finish())
(folder/'manifest.json').write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
print('53 flat SVG illustrations rebuilt with original glyphs and icon geometry; no replacement text labels.')
