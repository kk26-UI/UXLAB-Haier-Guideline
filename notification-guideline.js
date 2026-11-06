function renderNotificationGuideline(language) {
  const t = (zh,en) => language === 'zh' ? zh : en;
  const section = (id,title,intro,body) => `<section id="${id}" class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2">${title}</h2>${intro?`<p class="nt-intro">${intro}</p>`:''}${body}</section>`;
  const rows = data => `<div class="nt-rules">${data.map(([a,b])=>`<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div>`;
  const table = (heads,data) => `<div class="nt-table"><table><thead><tr>${heads.map(x=>`<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${data.map(row=>`<tr>${row.map((x,i)=>`<${i?'td':'th scope="row"'}>${x}</${i?'td':'th'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const symbols = {info:'i',success:'✓',warning:'!',error:'×'};
  const card = (type,title,body,action='') => `<div class="nt-card${action?' nt-card-action':''}">${type==='normal'?'':`<span class="nt-icon nt-${type}" aria-hidden="true">${symbols[type]}</span>`}<div class="nt-content"><h4>${title}</h4>${body?`<p title="${body}">${body}</p>`:''}${action?`<span class="nt-action">${action}</span>`:''}</div><span class="nt-close" aria-hidden="true">×</span></div>`;
  const types = [
    ['info',t('信息','Information'),t('发现新版本','Update available'),t('新版本已就绪，请查看更新。','View the latest update.'),t('查看更新','View update')],
    ['success',t('成功','Success'),t('设备已连接','Device connected'),t('客厅空调已联网，可以使用。','Living room AC is online.'),''],
    ['warning',t('告警','Warning'),t('滤芯即将到期','Filter replacement due'),t('滤芯寿命不足 10%，请更换。','Filter life below 10%. Replace soon.'),t('查看滤芯','View filter')],
    ['error',t('错误','Error'),t('设备连接中断','Device disconnected'),t('卧室空调已离线，请检查网络。','Bedroom AC offline. Check Wi-Fi.'),t('查看设备','View device')],
    ['normal',t('普通','General'),t('服务预约已更新','Service booking updated'),t('上门时间已调整，请查看详情。','Visit time changed. View details.'),t('查看详情','View details')]
  ];
  return `<style>
  .notification-doc{--nt-blue:#2283E2}.notification-doc p{overflow-wrap:anywhere}.nt-intro{font-size:14px;color:#667085;line-height:1.9;margin:0 0 28px}.nt-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}.nt-example>h3{font-size:14px;font-weight:500;margin:0 0 12px;color:#667085}.nt-card{display:flex;align-items:flex-start;gap:12px;position:relative;width:100%;max-width:360px;box-sizing:border-box;padding:20px;background:#fff;border:1px solid #e8edf3;border-radius:16px;box-shadow:0 6px 24px #182b4510;color:#1d1d1f;text-align:left}.nt-icon{flex:0 0 24px;height:24px;border-radius:50%;display:grid;place-items:center;font-size:16px;font-weight:600;line-height:1;color:white}.nt-info{background:#2283E2}.nt-success{background:#00B42A}.nt-warning{background:#FF7D00}.nt-error{background:#f23d3d}.nt-content{flex:1;min-width:0}.nt-content h4{font-size:16px;font-weight:400;line-height:24px;margin:0;padding-right:24px}.nt-content p{font-size:14px;line-height:22px;color:#667085;margin:8px 0 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nt-card-action{min-height:160px}.nt-card-action .nt-content{display:flex;flex-direction:column;align-self:stretch}.nt-card-action .nt-content h4{padding-right:0}.nt-action{display:inline-flex;align-items:center;justify-content:center;position:absolute;left:50%;bottom:20px;transform:translateX(-50%);min-height:32px;padding:0 20px;border-radius:9999px;background:#2283E2;color:#fff;font-size:14px;font-weight:600}.nt-card-action .nt-content p{margin-bottom:24px}.nt-close{position:absolute;right:12px;top:12px;width:32px;height:32px;display:grid;place-items:center;font-size:22px;color:#7b8593}.nt-rules>div{display:grid;grid-template-columns:150px 1fr;gap:24px;padding:20px 0;border-bottom:1px solid #e4e9f0}.nt-rules>div:last-child{border:0;padding-bottom:0}.nt-rules h3{font-size:14px;font-weight:500;margin:0}.nt-rules p{font-size:14px;color:#667085;line-height:1.9;margin:0}.nt-table{overflow-x:auto;border:1px solid #e4e9f0;border-radius:16px;background:#ffffff80}.nt-table table{border-collapse:collapse;width:100%;min-width:620px;font-size:14px;line-height:1.8;text-align:left}.nt-table th,.nt-table td{padding:16px 20px;border-bottom:1px solid #e4e9f0;vertical-align:top}.nt-table th{font-weight:500}.nt-table thead{background:#f5f8fc;color:#667085}.nt-table tr:last-child>*{border-bottom:0}.nt-demo-button{border:1px solid #dbe5f0;background:white;border-radius:10px;padding:10px 16px;font-size:14px;color:#1769b6;margin-top:20px;cursor:pointer}.nt-demo-button:hover{background:#edf5ff}.nt-demo-button:focus-visible,.nt-live button:focus-visible{outline:2px solid #2283e2;outline-offset:3px}.nt-live{position:fixed;top:24px;right:24px;z-index:100;width:min(360px,calc(100vw - 32px))}.nt-live button.nt-close{border:0;background:transparent;cursor:pointer}.nt-live a{color:#1769b6}.nt-live:empty{display:none}@media(pointer:coarse){.nt-card{padding-right:28px}.nt-close{width:44px;height:44px;top:6px;right:6px}}@media(max-width:700px){.nt-grid{grid-template-columns:1fr}.nt-rules>div{grid-template-columns:1fr;gap:8px}.nt-live{top:80px;right:16px}.nt-card{max-width:100%}}
.nt-anatomy{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:32px;align-items:start}.nt-anatomy-parts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 20px;min-width:0}.nt-anatomy-part{display:flex;align-items:flex-start;gap:12px}.nt-part-number{display:flex;align-items:center;justify-content:center;flex:0 0 24px;height:24px;border-radius:50%;background:#eff6ff;color:#2283e2;font-size:12px;font-weight:600}.nt-anatomy-part h3{font-size:14px;font-weight:600;color:#111827}.nt-anatomy-part p{margin-top:4px;font-size:12px;line-height:20px;color:#6b7280}.nt-variants{display:grid;gap:28px}.nt-variant+.nt-variant{padding-top:28px}.nt-variant>h3 strong{font-weight:600}.nt-variant>h3{font-size:14px;font-weight:400;line-height:1.9;color:#667085;margin:0 0 20px}.nt-variant>p{font-size:14px;line-height:1.85;color:#667085;margin:0 0 20px}.nt-demo-buttons{display:flex;gap:12px;flex-wrap:wrap}.nt-demo-buttons .nt-demo-button{margin-top:0}@media(max-width:1023px){.nt-anatomy{grid-template-columns:1fr}}@media(max-width:400px){.nt-anatomy-parts{grid-template-columns:1fr}}
  </style><div class="notification-doc" lang="${language==='zh'?'zh-CN':'en'}"><header class="mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-5">${t('通知提醒','Notification')}</h1><p class="text-lg text-gray-600 leading-8 max-w-3xl">${t('用于向用户反馈重要的警告提示和通知消息。','Provide users with important warnings and notifications.')}</p></header>
  ${section('notification-usage',t('何时使用','When to use'),t('适合异步任务结果、设备状态变化和服务更新。消息需要关注，但用户可以自行决定何时处理。','Use for background task results, device status changes, and service updates that can be handled at the user’s convenience.'),table([t('信息场景','Scenario'),t('组件选择','Component'),t('使用边界','Boundary')],[
    [t('系统消息 / 异步结果','System update / background result'),t('通知提醒','Notification'),t('包含标题，可补充详情与后续操作。','A title with optional details and a next action.')],
    [t('当前操作的简短结果','Brief result of the current action'),t('全局提示','Message'),t('如“设置已保存”，无需独立标题和操作。','For results such as Settings saved, without a heading or action.')],
    [t('页面内持续状态','Persistent contextual status'),t('页内提示','Inline alert'),t('与特定区域相关，跟随内容持续展示。','Keep relevant status alongside the affected content.')],
    [t('安全风险','Safety risk'),t('弹窗','Dialog'),t('不能仅依赖可忽略的通知，必须保证用户注意并处理。','Use a flow that ensures the issue is noticed and handled.')]
  ]))}
  ${section('notification-anatomy',t('组件构成','Anatomy'),t('由容器、标题、正文、图标、按钮和关闭组成。标题传达核心信息，其余元素按通知内容与处理需求配置。','A notification contains a container, title, body, icon, action, and dismissal control. Lead with the core message and include other elements as needed.'),`<div class="nt-anatomy">${card('info',types[0][2],types[0][3],types[0][4])}<div class="nt-anatomy-parts">${[
    [t('容器','Container'),t('承载信息，区分层级。','Contains information and establishes hierarchy.')],
    [t('标题','Title'),t('必备，简明概括核心信息。','Required. Summarize the key message.')],
    [t('正文','Body'),t('补充原因或下一步，不重复标题。','Add a reason or next step without repeating the title.')],
    [t('图标','Icon'),t('配合状态色，辅助辨识通知类型。','Use semantic colors to identify the notification type.')],
    [t('按钮','Button'),t('居中呈现，引导处理或查看详情。','Centered action for follow-up or details.')],
    [t('关闭','Close'),t('默认提供，用于收起通知。','Provided by default to dismiss the notice.')]
  ].map(([title,description],index)=>`<div class="nt-anatomy-part"><span class="nt-part-number" aria-hidden="true">${index+1}</span><div><h3>${title}</h3><p>${description}</p></div></div>`).join('')}</div></div>`)}
  ${section('notification-types',t('组件类型','Component types'),t('根据内容与处理需求选择普通信息、带图标或带按钮的形式，保持标题、正文与操作的层级清晰。','Choose a plain, icon, or action variant according to the message and task, with a clear hierarchy.'),`<div class="nt-variants">${[
    [t('<strong>普通信息</strong>','<strong>Plain information</strong>'),t('以标题和正文传达一般通知，无需强调状态。','Use a title and body for general notices without a status emphasis.'),card('normal',types[4][2],types[4][3])],
    [t('<strong>带图标：</strong>用来显示「成功、错误、消息、警告」类的系统消息','<strong>With icon:</strong> displays system messages for success, error, information, and warning.'),t('通过图标与状态色区分信息、成功、告警和错误，配合文案说明具体情况。','Pair semantic icons and colors with clear wording for information, success, warning, and error.'),`<div class="nt-grid">${types.filter(x=>x[0]!=='normal').map(([type,label,title,body])=>`<article class="nt-example">${card(type,title,body)}</article>`).join('')}</div>`],
    [t('<strong>带按钮：</strong>按钮允许用户处理通知，或将他们导航到包含更多详细信息的页面。','<strong>With button:</strong> lets users act on the notification or navigate to a page with more details.'),t('提供明确的后续行动，允许用户处理通知或前往详情页面。','Provide a clear next action to address the notice or open its details.'),card('info',types[0][2],types[0][3],types[0][4])]
  ].map(([title,description,example])=>`<article class="nt-variant"><h3>${title}</h3>${example}</article>`).join('')}</div>`)}
  ${section('notification-demo',t('交互示例','Interactive examples'),t('点击按钮预览五种通知。示例仅用于展示状态，5 秒后自动关闭；悬停或键盘访问时暂停，也可手动关闭。','Preview five notification states. These examples dismiss after 5 seconds, pause on hover or focus, and can be dismissed manually.'),`<div class="nt-demo-buttons">${types.map(([type,label,title,body])=>`<button type="button" class="nt-demo-button" data-nt-type="${type}" data-nt-title="${title}" data-nt-body="${body}">${label}</button>`).join('')}</div><div class="nt-live" id="nt-live"></div>`)}
  ${section('notification-behavior',t('组件交互','Component interaction'),t('通知不阻断当前操作，关闭、处理和状态更新应清晰可预期。','Keep notifications non-blocking, with predictable dismissal, actions, and status updates.'),rows([
    [t('出现与关闭','Display and dismissal'),t('通知从页面边缘显示，用户可继续当前操作。简短通知自动关闭；重要或带按钮的通知持续保留，直到用户手动关闭或完成处理。','Show notifications at the page edge while users continue their current task. Dismiss brief notices automatically; retain important or actionable notices until users dismiss them or complete the action.')],
    [t('阅读与暂停','Reading and timing'),t('悬停或键盘焦点进入时暂停自动关闭，离开后重新计时。关闭仅收起通知，不代表问题已解决或任务已取消。','Pause automatic dismissal on hover or keyboard focus and restart when interaction ends. Dismissing a notice does not resolve an issue or cancel a task.')],
    [t('行动与反馈','Actions and feedback'),t('按钮使用“查看设备”等明确动词，引导至相关任务或详情。处理期间避免重复触发，失败时说明原因并保留重试入口。','Use clear action labels such as View device and lead to the relevant task or details. Prevent duplicate requests and retain a recovery path on failure.')],
    [t('状态更新','Status updates'),t('同一任务的进展在原通知中更新，避免重复弹出。收到设备确认后再显示成功，不能将“指令已发送”作为完成结果。','Update a task in the same notice instead of opening duplicates. Show success after device confirmation; sending a command does not confirm completion.')],
    [t('可访问性','Accessibility'),t('图标与文字共同表达状态。普通通知温和播报，紧急错误即时播报；关闭支持键盘操作并提供可读名称，动效遵循减少动态效果偏好。','Pair icons with wording. Announce ordinary notices politely and urgent errors assertively. Label dismissal controls, support keyboards, and respect reduced-motion preferences.')]
  ]))}
  <section class="grid md:grid-cols-2 gap-8 mb-10" aria-label="${t('推荐与避免','Recommended and avoided practices')}">
  ${[
    [true,t('推荐','Recommended'),[
      t('用简短标题说明核心信息，正文补充原因与下一步。','Use a short title for the key message and add a reason or next step in the body.'),
      t('图标使用统一状态色，配合文字明确通知含义。','Use consistent semantic icon colors with clear wording.'),
      t('仅突出一个主要行动，重要信息保留至用户处理。','Emphasize one primary action and retain important notices until handled.'),
      t('在原通知中更新任务进展，确认执行完成后再反馈成功。','Update progress in place and confirm completion before showing success.')
    ]],
    [false,t('避免',"Don't"),[
      t('使用“温馨提示”“出错了”等模糊标题，或正文重复标题。','Use vague titles or repeat the title in the body.'),
      t('混用内容色与状态色，仅靠颜色区分通知类型。','Mix content and semantic colors or rely on color alone.'),
      t('堆砌错误码、长篇解释或多个竞争的主按钮。','Overload notices with error codes, long explanations, or competing actions.'),
      t('让重要通知自动消失，或将发送成功描述为设备执行完成。','Dismiss important notices automatically or describe a sent command as completed execution.')
    ]]
  ].map(([good,title,items])=>`<article class="${good?'bg-emerald-50/80 border-emerald-100':'bg-red-50/80 border-red-100'} border rounded-3xl p-6 md:p-8"><h2 class="text-xl font-bold ${good?'text-emerald-800':'text-red-800'} mb-5">${title}</h2><ul class="space-y-3">${items.map(item=>`<li class="flex gap-3 text-sm text-gray-600 leading-7"><span class="${good?'text-emerald-600':'text-red-500'} font-bold" aria-hidden="true">${good?'✓':'×'}</span><span>${item}</span></li>`).join('')}</ul></article>`).join('')}
  </section></div>`;
}
function initNotificationExamples(root,language) {
  const triggers = root.querySelectorAll('[data-nt-type]');
  const host = root.querySelector('#nt-live');
  let timer;
  let activeTrigger;
  const close = () => { clearTimeout(timer); if(host.contains(document.activeElement)) activeTrigger.focus(); host.replaceChildren(); };
  const schedule = () => { clearTimeout(timer); if(host.firstElementChild && !host.matches(':hover') && !host.contains(document.activeElement)) timer = setTimeout(close,5000); };
  triggers.forEach(trigger=>trigger.addEventListener('click',()=>{
    clearTimeout(timer);
    activeTrigger = trigger;
    const type = trigger.dataset.ntType;
    const symbols = {info:'i',success:'✓',warning:'!',error:'×'};
    host.innerHTML = `<div class="nt-card">${type==='normal'?'':`<span class="nt-icon nt-${type}" aria-hidden="true">${symbols[type]}</span>`}<div class="nt-content" role="${type==='error'?'alert':'status'}"><h4></h4><p></p></div><button type="button" class="nt-close" aria-label="${language==='zh'?'关闭通知':'Dismiss notification'}">×</button></div>`;
    host.querySelector('h4').textContent = trigger.dataset.ntTitle;
    host.querySelector('p').textContent = trigger.dataset.ntBody;
    host.querySelector('p').title = trigger.dataset.ntBody;
    host.querySelector('button').addEventListener('click',close);
    schedule();
  }));
  host.addEventListener('mouseenter',()=>clearTimeout(timer));
  host.addEventListener('mouseleave',schedule);
  host.addEventListener('focusin',()=>clearTimeout(timer));
  host.addEventListener('focusout',()=>queueMicrotask(schedule));
  host.addEventListener('keydown',event=>{if(event.key==='Escape') close();});
}
