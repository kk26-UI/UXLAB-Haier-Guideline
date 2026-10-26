function renderImageGuideline(language) {
  const zh=language==='zh';
  const t=(cn,en)=>zh?cn:en;
  const scenes=[
    ['fabric-care-user.png',t('温柔陪伴','Soft companionship'),t('白色毛绒兔靠在绿色与灰色毛巾旁，背景为绿植与浅色家居','A white plush rabbit beside green and gray towels, with greenery and a light home background')],
    ['fabric-care-towels.png',t('柔软毛巾','Soft towels'),t('鼠尾草绿与奶油白毛巾的柔光家居场景，AI 生成','AI-generated softly lit home scene with sage-green and ivory towels')],
    ['fabric-care-basket.png',t('洁净衣物','Fresh linens'),t('浅色衣篮与奶油白、鼠尾草绿棉织物的柔光场景，AI 生成','AI-generated softly lit scene of a woven basket with ivory and sage-green cotton fabrics')]
  ];
  const products=[
    ['washer-user-front.png',t('正面外观','Front view'),t('海尔纤美洗衣机正面产品图','Haier Xianmei washing machine, front view')],
    ['washer-user-left.png',t('左侧视角','Left perspective'),t('海尔纤美洗衣机左侧产品图','Haier Xianmei washing machine, left perspective')],
    ['washer-user-right.png',t('右侧视角','Right perspective'),t('海尔纤美洗衣机右侧产品图','Haier Xianmei washing machine, right perspective')]
  ];
  const heading=(title,en,copy='',encopy='')=>`<div class="im-heading"><h2>${t(title,en)}</h2>${copy?`<p>${t(copy,encopy)}</p>`:''}</div>`;
  const rule=(title,en,copy,encopy)=>`<div><h3>${t(title,en)}</h3><p>${t(copy,encopy)}</p></div>`;
  const chevron='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';
  const gallery=(id,{mode='slide',type='dot',position='bottom',product=false,autoplay=false,items=null}={})=>{
    const pictures=items||(product?products:scenes);
    const showPagination=pictures.length>5;
    return `<div class="ic-demo-board"><div class="ic-example"><div class="ic-carousel ic-${mode==='slide'?'horizontal':mode}${product?' ic-product':''}" data-carousel="${id}"${autoplay?' data-autoplay="true"':''} data-mode="${mode}" data-indicator="${type}" data-position="${position}" role="region" aria-roledescription="${t('轮播','carousel')}" aria-label="${t('图片浏览：','Image gallery: ')}${t(product?'产品外观':'洗护空间',product?'Product views':'Laundry spaces')}"><div class="ic-window"><div class="ic-track">${pictures.map(([src,name,alt],i)=>`<div class="ic-slide${i===0?' is-current':''}" role="group" aria-roledescription="${t('幻灯片','slide')}" aria-label="${i+1} / ${pictures.length} · ${name}" aria-hidden="${i!==0}" data-title="${name}"${src.startsWith('washer-user-')?' data-fit="contain"':''}><img src="assets/images/${src}" alt="${alt}" width="1200" height="800" decoding="async" draggable="false"></div>`).join('')}</div><div class="ic-error" hidden><p>${t('图片暂不可用','Image unavailable')}</p><button type="button" data-retry>${t('重试','Retry')}</button></div></div><button type="button" class="ic-arrow ic-prev" data-prev aria-label="${t('上一张图片','Previous image')}" disabled>${chevron}</button><button type="button" class="ic-arrow ic-next" data-next aria-label="${t('下一张图片','Next image')}">${chevron}</button>${!showPagination?`<div class="ic-indicator-wrap"><div class="ic-indicators" role="group" aria-label="${t('选择图片','Choose an image')}">${pictures.map(([,name],i)=>`<button type="button" data-index="${i}" aria-label="${t('查看','View ')}${name}" aria-pressed="${i===0}"><i></i></button>`).join('')}<span class="ic-slider-thumb" aria-hidden="true"></span></div></div>`:''}</div>${showPagination?`<div class="ic-pagination" data-count aria-hidden="true">1 / ${pictures.length}</div>`:''}<span class="ic-position-status" data-position-status aria-live="polite" aria-atomic="true">${t(`第 1 张，共 ${pictures.length} 张`,`Image 1 of ${pictures.length}`)}</span></div></div>`;
  };
  const options=(name,items)=>`<div class="ic-option-row"><span>${t(name[0],name[1])}</span><div class="ic-options" role="group" aria-label="${t(name[0],name[1])}">${items.map(([attr,value,cn,en],i)=>`<button type="button" ${attr}="${value}" aria-pressed="${i===0}">${t(cn,en)}</button>`).join('')}</div></div>`;
  return `<article class="image-doc" lang="${zh?'zh-CN':'en'}"><header class="im-page-heading"><h1>${t('图片轮播','Image Carousel')}</h1><p>${t('图片轮播在有限空间内有序展示一组相关图片，支持手动浏览与自动播放，适用于产品外观、细节和生活场景展示。','A carousel presents related images in a compact space with manual navigation or automatic playback. Use it for product views, details, and lifestyle imagery.')}</p></header>
  <section class="im-section glass-panel">${heading('基础用法','Basic usage','一组图片围绕同一主题展开，保持统一的比例与色调。默认横向手动切换，箭头与指示器共同提供浏览入口。','Build each image set around one theme with consistent proportions and color. Default to horizontal, manual navigation with arrows and indicators.')}${gallery('basic')}</section>
  <section class="im-section glass-panel">${heading('指示器','Indicators')}<div class="ic-config">${options(['样式','Style'],[['data-indicator-choice','dot','圆点','Dot'],['data-indicator-choice','line','短线','Line'],['data-indicator-choice','slider','滑块','Slider']])}${options(['位置','Position'],[['data-position-choice','bottom','底部','Bottom'],['data-position-choice','top','顶部','Top'],['data-position-choice','left','左侧','Left'],['data-position-choice','right','右侧','Right'],['data-position-choice','outer','外置','Outer']])}</div>${gallery('indicators')}<div class="im-indicator-specs">${[
  ['dot','圆点','Dot','6 × 6 px · 间距 8 px','6 × 6px · 8px gaps','等大圆点，以明暗区分当前位置。','Equal-size dots use contrast to show the current image.'],
  ['line','短线','Line','12 × 4 px · 间距 8 px','12 × 4px · 8px gaps','等宽短线，突出当前项。','Equal-width lines emphasize the current image.'],
  ['slider','滑块','Slider','48 × 4 px · 连续轨道','48 × 4px · Continuous track','滑块沿连续轨道移动，标记当前图序。','A sliding segment marks the current position along a continuous track.']
  ].map(([type,title,en,size,enSize,desc,enDesc])=>`<div><div class="ic-spec-visual" data-indicator="${type}"><div class="ic-indicators ic-static"><i class="is-current"></i><i></i><i></i><span class="ic-slider-thumb"></span></div></div><h3>${t(title,en)}</h3><small>${t(size,enSize)}</small><p>${t(desc,enDesc)}</p></div>`).join('')}</div></section>
  <section class="im-section glass-panel">${heading('轮播分页','Pagination','图片多于 5 张时显示分页，以“当前张数 / 图片总数”标记浏览位置；5 张及以下不显示分页。','Show pagination for more than 5 images, using current / total to indicate position. Hide pagination for 5 or fewer images.')}${gallery('pagination',{items:[...scenes,...scenes]})}<p class="im-note">${t('分页位于图片外右下方，切换时同步更新。使用方正兰亭字体，保持数字清晰；分页只展示位置，浏览通过箭头或滑动完成。','Place pagination below the image, aligned right, and update it on navigation. Use FZLanTingHei for clear numerals. Pagination shows position; use arrows or swipes to browse.')}</p></section>
  <section class="im-section glass-panel">${heading('自动切换','Automatic playback','适用于品牌与生活场景展示。设备控制、告警和操作步骤保持手动浏览。','Autoplay suits brand and lifestyle presentations. Keep device controls, alerts, and task instructions manual.')}${gallery('autoplay',{type:'dot',autoplay:true})}<p class="im-note">${t('切到后台、轮播离开视口或开启减少动态效果时停止自动播放。展示型轮播可循环，设备图片默认首尾停止。','Stop autoplay when the page is hidden, the carousel leaves the viewport, or reduced motion is enabled. Presentations may loop; device browsing stops at the ends by default.')}</p></section>
  <section class="im-section glass-panel">${heading('卡片化','Card presentation','通过露出相邻画面提示还有内容，适合宽屏的场景浏览。当前图片保持完整与清晰，不叠加强透视或重阴影。','Reveal neighboring images to suggest more content on wide layouts. Keep the current image complete and clear without strong perspective or heavy shadows.')}${gallery('cards',{mode:'card',type:'line',position:'outer'})}<p class="im-note">${t('相邻卡片间距 16 px，当前项居中；候选图从靠近主图的一侧向外渐隐。窄屏退回单图横向轮播。','Keep 16px between cards and center the current image. Fade neighboring previews outward, away from the main image. On narrow screens, use a single-image horizontal carousel.')}</p></section>
  <section class="im-section glass-panel">${heading('渐隐切换','Fade transition','构图变化较大时，使用轻量渐隐衔接画面。同组只采用一种动效，减少视觉干扰。','Use a restrained fade for images with different compositions. Choose one transition style per set to limit visual distraction.')}${gallery('fade',{mode:'fade',type:'line'})}<p class="im-note">${t('切换时长建议 200–300 ms，画面不缩放、不弹跳。减少动态效果开启时直接替换图片，保留当前位置反馈。','Use a 200–300ms transition without zoom or bounce. Replace images immediately under reduced motion while preserving position feedback.')}</p></section>
  <section class="im-section glass-panel">${heading('产品图片','Product images','完整呈现产品外观与细节，保持比例、颜色与型号一致。','Show the product and its details clearly, preserving its proportions, color, and model identity.')}<div class="im-product-layout"><div class="ic-product-example">${gallery('product',{product:true,type:'dot',position:'outer'})}</div><div class="im-product-notes">${rule('比例与裁切','Ratio and cropping','使用 1:1 容器等比展示，完整保留机身与控制面板。同组图片统一视角与留白，避免拉伸或裁切产品。','Fit the complete product within a 1:1 frame, keeping its body and control panel visible. Use consistent perspectives and spacing without stretching or cropping the product.')}${rule('加载与反馈','Loading and feedback','优先加载当前图，按需预载相邻图。加载时保持容器尺寸，失败时提供重试；单图或无图时隐藏轮播控件。','Load the current image first and preload adjacent images as needed. Keep the frame size stable while loading and offer an inline retry on failure. Hide carousel controls for one or no images.')}</div></div></section>
  <section class="im-advice"><div class="im-do"><h2>${t('推荐','Do')}</h2><ul><li>✓ ${t('真实品牌影像，色调自然，主体清晰','Authentic brand imagery, natural color, clear subjects')}</li><li>✓ ${t('小尺寸指示器紧凑成组，选中态稳定','Compact indicators with stable selected shapes')}</li><li>✓ ${t('图片切换与设备状态、操作相互独立','Keep image navigation separate from device state and controls')}</li></ul></div><div class="im-dont"><h2>${t('避免','Avoid')}</h2><ul><li>× ${t('使用虚拟插画或错误型号代替产品实图','Use fictional illustrations or the wrong product model')}</li><li>× ${t('拉长圆点、放大间距或将滑块做成数字按钮','Stretch dots, spread indicators apart, or use numbers as sliders')}</li><li>× ${t('用快速轮播承载告警或必须阅读的步骤','Use rapid carousels for alerts or required instructions')}</li></ul></div></section>
</article>`;
}
function initImageExamples(root, language) {
  const t=(cn,en)=>language==='zh'?cn:en;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  root.querySelectorAll('[data-carousel]').forEach(gallery=>{
    const example=gallery.closest('.ic-example'), slides=[...gallery.querySelectorAll('.ic-slide')];
    const prev=gallery.querySelector('[data-prev]'), next=gallery.querySelector('[data-next]');
    const autoplay=gallery.dataset.autoplay==='true',count=example.querySelector('[data-count]'),positionStatus=example.querySelector('[data-position-status]');
    let index=0,timer=null,revision=0,failedIndex=0,visible=false,manualPaused=false;
    const render=()=>{
      gallery.style.setProperty('--index',index);gallery.style.setProperty('--total',slides.length);
      slides.forEach((slide,i)=>{slide.classList.toggle('is-current',i===index);slide.classList.toggle('is-before',i<index);slide.classList.toggle('is-after',i>index);slide.setAttribute('aria-hidden',String(i!==index));});
      gallery.querySelectorAll('[data-index]').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
      prev.disabled=!timer&&index===0;next.disabled=!timer&&index===slides.length-1;
      if(count)count.textContent=`${index+1} / ${slides.length}`;
      positionStatus.textContent=t(`第 ${index+1} 张，共 ${slides.length} 张`,`Image ${index+1} of ${slides.length}`);
    };
    const stop=()=>{clearInterval(timer);timer=null;positionStatus.setAttribute('aria-live','polite');render();};
    const go=async(value,manual=true)=>{
      if(manual){manualPaused=true;stop();}
      const target=Math.max(0,Math.min(slides.length-1,value)),token=++revision;
      gallery.setAttribute('aria-busy','true');
      try { await slides[target].querySelector('img').decode(); }
      catch {if(token===revision){failedIndex=target;gallery.querySelector('.ic-error').hidden=false;gallery.setAttribute('aria-busy','false');}return;}
      if(token!==revision)return;
      gallery.querySelector('.ic-error').hidden=true;gallery.setAttribute('aria-busy','false');index=target;render();
    };
    prev.addEventListener('click',()=>go(index-1));next.addEventListener('click',()=>go(index+1));
    gallery.querySelectorAll('[data-index]').forEach(button=>button.addEventListener('click',()=>go(Number(button.dataset.index))));
    gallery.querySelector('[data-retry]').addEventListener('click',()=>{
      const image=slides[failedIndex].querySelector('img');const url=new URL(image.src);url.searchParams.set('retry',Date.now());image.src=url.href;go(failedIndex);
    });
    gallery.addEventListener('keydown',event=>{
      const vertical=gallery.dataset.mode==='vertical';
      if(event.key===(vertical?'ArrowDown':'ArrowRight')){event.preventDefault();go(index+1);}
      if(event.key===(vertical?'ArrowUp':'ArrowLeft')){event.preventDefault();go(index-1);}
    });
    let touchStart=null;
    gallery.querySelector('.ic-window').addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse')touchStart={x:event.clientX,y:event.clientY};});
    gallery.querySelector('.ic-window').addEventListener('pointerup',event=>{
      if(!touchStart)return;const x=event.clientX-touchStart.x,y=event.clientY-touchStart.y;touchStart=null;
      const vertical=gallery.dataset.mode==='vertical',distance=vertical?y:x,cross=vertical?x:y;
      if(Math.abs(distance)>40&&Math.abs(distance)>Math.abs(cross)*1.5)go(index+(distance<0?1:-1));
    });
    gallery.querySelector('.ic-window').addEventListener('pointercancel',()=>touchStart=null);
    if(autoplay){
      const start=()=>{
        if(timer||manualPaused||!visible||document.hidden||reduced.matches||gallery.matches(':hover')||gallery.contains(document.activeElement))return;
        timer=setInterval(()=>go((index+1)%slides.length,false),5000);
        positionStatus.setAttribute('aria-live','off');render();
      };
      gallery.addEventListener('pointerenter',stop);
      gallery.addEventListener('pointerleave',start);
      gallery.addEventListener('focusin',stop);
      gallery.addEventListener('focusout',()=>queueMicrotask(start));
      document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
      new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;visible?start():stop();}).observe(gallery);
      reduced.addEventListener('change',()=>reduced.matches?stop():start());
    }
    gallery.updateCarousel=render;
    slides[0].querySelector('img').addEventListener('error',()=>{failedIndex=0;gallery.querySelector('.ic-error').hidden=false;});
    render();
  });
  const choose=(selector,attribute,callback)=>root.querySelectorAll(selector).forEach(button=>button.addEventListener('click',()=>{
    root.querySelectorAll(selector).forEach(item=>item.setAttribute('aria-pressed',String(item===button)));callback(button.dataset[attribute]);
  }));
  choose('[data-indicator-choice]','indicatorChoice',value=>root.querySelector('[data-carousel="indicators"]').dataset.indicator=value);
  choose('[data-position-choice]','positionChoice',value=>root.querySelector('[data-carousel="indicators"]').dataset.position=value);
}
