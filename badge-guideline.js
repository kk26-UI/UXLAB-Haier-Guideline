function renderBadgeGuideline(language) {
  const t = (zh,en) => language === 'zh' ? zh : en;
  const anchor = (content) => `<span class="bd-anchor bd-avatar" aria-hidden="true">${content}</span>`;
  const count = n => `<span class="bd-count">${n}</span>`;
  const status = (kind,zh,en) => `<span class="bd-status ${kind}"><i class="bd-dot" aria-hidden="true"></i>${t(zh,en)}</span>`;
  const heading = (zh,en,desc,descEn) => `<div class="bd-heading"><h2>${t(zh,en)}</h2><p>${t(desc,descEn)}</p></div>`;
  const section = (zh,en,desc,descEn,body) => `<section class="bd-section glass-panel">${heading(zh,en,desc,descEn)}${body}</section>`;
  const table = (heads,rows) => `<div class="bd-table-wrap"><table><thead><tr>${heads.map(x=>`<th scope="col">${t(...x)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((x,i)=>`<${i?'td':'th scope="row"'}>${Array.isArray(x)?t(...x):x}</${i?'td':'th'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const rule = (zh,en,desc,descEn) => `<div><h3>${t(zh,en)}</h3><p>${t(desc,descEn)}</p></div>`;
  return `<article class="badge-doc" lang="${language==='zh'?'zh-CN':'en'}">
  <header class="bd-page-heading"><h1>${t('徽标','Badge')}</h1><p>${t('徽标用少量视觉信息提示未读、待办与设备状态。依附于明确的对象，让用户快速发现变化，同时保持家电界面的安静与清晰。','Badges highlight unread items, pending tasks, and device states with minimal visual weight. Attach each badge to a clear subject to keep appliance interfaces calm and readable.')}</p></header>
  ${section('何时使用','When to use','有新信息需要发现时使用徽标；需要理解原因或采取行动时，补充完整的状态说明。','Use a badge to draw attention to new information. Add a full explanation when people need to understand a cause or take action.','')}
  ${section('类型与结构','Types and structure','徽标分为数字、点状与状态三类。数字与点状依附于头像或入口，提示待查看的信息；状态由圆点与文字组成，说明设备当前情况。','Use count, dot, or status badges. Counts and dots attach to an avatar or entry to highlight information to review; status badges combine a dot with text to describe the device.', `<div class="bd-types">${[
  [anchor(count(3)),['数字徽标','Count badge'],['显示未读或待办数量，宽度随位数自适应。','Show unread or pending counts; width adapts to the number of digits.']],
  [anchor('<i class="bd-dot"></i>'),['点状徽标','Dot badge'],['提示有新内容，不显示具体数量。','Indicate new content without an exact count.']],
  [status('info','运行中','Running'),['状态徽标','Status badge'],['以圆点搭配文字，说明设备当前状态。','Pair a dot with text to describe the current device state.']]
  ].map(([visual,title,desc])=>`<div class="bd-type"><div class="bd-stage" role="img" aria-label="${t(...title)}">${visual}</div><h3>${t(...title)}</h3><p>${t(...desc)}</p></div>`).join('')}</div>`)}
  ${section('样式与尺寸','Appearance and dimensions','使用纯色、圆角与稳定留白，不加渐变、投影或持续动效。需要强化徽标轮廓时，可添加 2 dp 的底色描边。','Use solid fills, rounded shapes, and stable spacing without gradients, shadows, or continuous animation. To emphasize the badge outline, add a 2dp border matching the underlying surface.', `<div class="bd-strip"><div><i class="bd-dot" aria-hidden="true"></i><span>8 dp</span></div><div>${count(8)}<span>20 dp</span></div><div>${count('99+')}<span>${t('宽度自适应','Auto width')}</span></div></div>${table([['设计项','Property'],['标准尺寸','Standard'],['大屏尺寸','Large'],['使用规则','Rule']], [
  [['点状直径','Dot diameter'],'8 dp','12 dp',['保持正圆，不随内容拉伸','Keep circular; do not stretch']],
  [['数字高度','Count height'],'20 dp','24 dp',['单个数字为圆形，多位数字为胶囊形','Use a circle for one digit and a pill for multiple digits']],
  ])}`)}
  ${section('颜色与信息层级','Color and hierarchy','沿用色彩规范：品牌蓝用于未读、更新与常规过程；成功、警告、危险色分别用于对应设备状态，中性色用于离线。','Follow the color standard: brand blue for unread items, updates, and routine activity; success, warning, and danger colors for their respective device states; neutral gray for offline devices.',table([['语义','Meaning'],['示例','Example'],['使用规则','Rule']], [
  [['常规过程 · #2283E2','Routine · #2283E2'],status('info','运行中','Running'),['静态显示，剩余时间与进度单独呈现','Keep static; present remaining time and progress separately']],
  [['完成 · #00B42A','Complete · #00B42A'],status('success','已完成','Complete'),['不将“在线”一律高亮为绿色','Do not highlight every online device in green']],
  [['需关注 · #FF7D00','Attention · #FF7D00'],status('warning','滤芯待更换','Replace filter'),['说明维护事项，详情中提供处理步骤','Name the maintenance task and provide steps in details']],
  [['异常 · #F23D3D','Error · #F23D3D'],status('error','进水异常','Water inlet fault'),['与原因、恢复建议同时出现','Pair with cause and recovery guidance']],
  [['中性 · #999999','Neutral · #999999'],status('','设备离线','Device offline'),['离线不等于故障；保留上次更新时间','Offline does not imply a fault; show the last update time']]
  ]))}
  ${section('位置与布局','Position and layout','数字与点状徽标置于目标右上角，状态徽标紧邻设备名称；每个对象只展示一个主要徽标。','Place counts and dots at the host’s top-right corner and status badges near the device name. Show one primary badge per subject.',`<div class="bd-two"><div class="bd-stage">${anchor(count('99+'))}</div><div class="bd-rules">${rule('右上角叠放','Top-right placement','徽标中心从目标右上角向内偏移 2 dp；预留外侧空间，避免裁切。','Inset the badge center 2dp from the host’s top-right corner. Reserve outside space to prevent clipping.')}${rule('状态优先级','State priority','按故障、维护、运行、常规信息排序，仅显示最高优先级状态；位置保持固定。','Show the highest-priority state: fault, maintenance, running, then routine information. Keep its position fixed.')}</div></div>`)}
  ${section('计数与更新规则','Counts and updates','计数必须对应可查看、可处理的信息。让提醒的出现与消失可预测。','Each count must map to information people can view or act on. Make appearance and dismissal predictable.', `<div class="bd-two"><div class="bd-stage"><div class="bd-demo-controls"><button type="button" data-badge-change="-1" aria-label="${t('减少一条未读','Decrease unread count')}">−</button><span id="badge-demo-host" class="bd-anchor bd-avatar">${count(3)}</span><button type="button" data-badge-change="1" aria-label="${t('增加一条未读','Increase unread count')}">+</button></div><span class="bd-sr-only" id="badge-demo-live" role="status" aria-live="polite"></span></div><div class="bd-rules">${rule('计数显示范围','Count display range','0、负数或无有效计数时隐藏；1–99 显示实际值，100 及以上显示 99+，可访问名称保留实际数量。','Hide zero, negative, or invalid counts. Show exact values from 1–99 and 99+ for 100 or more; preserve the exact count in the accessible name.')}${rule('按语义消除提醒','Dismiss according to meaning','未读在阅读成功后清除，待办在处理完成后清除；仅进入页面不自动清除待办。聚合条目去重，数量不因后台重连重复累加。','Clear unread items after successful reading and tasks after completion. Merely opening a page does not finish a task. Deduplicate aggregated items across reconnects.')}</div></div>`)}
  <section class="grid md:grid-cols-2 gap-8 mb-10">${[
    [true,['推荐','Do'],[['让数量对应真实、可处理的信息','Map counts to real, actionable items'],['设备状态用圆点与文字共同表达','Pair device status dots with text'],['为关键故障提供持续说明与处理路径','Provide persistent fault explanations and actions']]],
    [false,['避免','Avoid'],[['用徽标显示温度、剩余时间或能耗数值','Use badges for temperature, time remaining, or energy data'],['将促销、卖点与“新品”标签混入设备状态','Mix marketing or “new” labels into device states'],['仅用红点提示漏水等关键异常','Use a lone red dot for a critical fault such as a leak']]]
  ].map(([good,title,items])=>`<article class="${good?'bg-emerald-50/80 border border-emerald-100':'bg-red-50/80 border border-red-100'} rounded-3xl p-6 md:p-8"><h2 class="text-xl font-bold ${good?'text-emerald-800':'text-red-800'} mb-5">${t(...title)}</h2><ul class="space-y-3">${items.map(x=>`<li class="flex gap-3 text-sm leading-7 text-gray-600"><span class="${good?'text-emerald-600':'text-red-500'} font-bold" aria-hidden="true">${good?'✓':'×'}</span><span>${t(...x)}</span></li>`).join('')}</ul></article>`).join('')}</section>
  </article>`;
}
function initBadgeExamples(root, language) {
  let value = 3;
  const host = root.querySelector('#badge-demo-host');
  const live = root.querySelector('#badge-demo-live');
  const update = () => {
    host.querySelector('.bd-count')?.remove();
    if (value > 0) {
      const badge = document.createElement('span');
      badge.className = 'bd-count';
      badge.textContent = value > 99 ? '99+' : String(value);
      badge.setAttribute('aria-hidden','true');
      host.append(badge);
    }
    const label = language === 'zh' ? `消息，${value} 条未读` : `Messages, ${value} unread`;
    host.setAttribute('role','img');
    host.setAttribute('aria-label',label);
    live.textContent = label;
  };
  root.querySelectorAll('[data-badge-change]').forEach(button => button.addEventListener('click', () => { value = Math.max(0,value + Number(button.dataset.badgeChange)); update(); }));
  update();
}
