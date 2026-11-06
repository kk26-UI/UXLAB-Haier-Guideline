function renderDrawerGuideline(language) {
  const t = (zh,en) => language === 'zh' ? zh : en;
  const section = (title,desc,body) => `<section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold ${desc ? 'mb-2' : 'mb-7'}">${title}</h2>${desc ? `<p class="text-sm text-gray-600 leading-7 mb-7">${desc}</p>` : ''}${body}</section>`;
  const rows = items => `<div class="dw-rules">${items.map(([a,b])=>`<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div>`;
  const table = (heads,data) => `<div class="dw-table-wrap"><table><thead><tr>${heads.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${data.map(row=>`<tr>${row.map((c,i)=>i===0?`<th scope="row">${c}</th>`:`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const sketch = bottom => `<div class="dw-scene ${bottom?'dw-bottom':''}" role="img" aria-label="${bottom?t('底部抽屉：直角面板，底部保留操作区','Bottom drawer with square corners and a fixed action region'):t('右侧抽屉：固定标题与操作区，正文独立滚动','Right drawer with a fixed header and footer and scrolling body')}"><div class="dw-background"><span>${t('设备设置','Device settings')}</span><i></i><i></i><i></i></div><div class="dw-mask"></div><div class="dw-panel"><div class="dw-panel-head"><strong>${t('标题','Title')}</strong></div><div class="dw-panel-body"><p>${t('这里显示相关文案','Relevant text appears here')}</p><p>${t('这里显示相关文案','Relevant text appears here')}</p></div><div class="dw-panel-foot"><span>${t('取消','Cancel')}</span><b>${t('保存','Save')}</b></div></div></div>`;
  return `<div class="drawer-doc" lang="${language==='zh'?'zh-CN':'en'}"><header class="mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-5">${t('抽屉','Drawer')}</h1><p class="text-lg text-gray-600 leading-8 max-w-3xl">${t('从屏幕边缘滑入的任务面板。在保留当前页面上下文的同时，承载详情查看、参数设置与轻量编辑。','A task panel that slides in from a screen edge for details, settings, and lightweight editing while preserving page context.')}</p></header>
  ${section(t('何时使用','When to use'),'',rows([
    [t('辅助信息展示','Supporting information'),t('结合当前页面展示详情、说明等辅助信息，帮助用户在保留上下文的同时理解内容。','Show supporting details or explanations alongside the current page so users can understand the content while retaining context.')],
    [t('信息快捷输入','Quick input'),t('在不中断当前流程的情况下，快速完成信息录入或少量参数编辑。','Let users quickly enter information or edit a few settings without interrupting the current workflow.')],
    [t('优先使用弹窗','Prefer a dialog'),t('当内容较少、操作不频繁时，优先使用弹窗，保持交互简洁。','When content is brief and interaction is infrequent, prefer a dialog to keep the experience simple.')]
  ]))}
  ${section(t('组件构成','Anatomy'),t('标题与正文必备，操作区按任务提供。分区清晰，避免重复嵌套卡片。','Include a title and body; add actions when needed. Keep regions clear and avoid nested cards.'),`<div class="dw-anatomy">${sketch(false)}<div class="dw-anatomy-parts">${[
    [t('标题区','Header'),t('简要说明当前任务，标题左对齐。','Use a short, left-aligned task title.')],
    [t('内容区','Body'),t('承载信息或表单，内容超出时纵向滚动。','Contains information or a form; scrolls vertically when needed.')],
    [t('操作区','Footer'),t('主操作靠右，只读内容可省略。','Align the primary action right; omit for read-only content.')],
    [t('遮罩层','Mask'),t('弱化并阻断背景交互，非模态抽屉可省略。','Dims the background and blocks interaction; omit for non-modal drawers.')]
  ].map(([title,description],index)=>`<div class="dw-anatomy-part"><span class="dw-part-number" aria-hidden="true">${index+1}</span><div><h3>${title}</h3><p>${description}</p></div></div>`).join('')}</div></div>`)}
  ${section(t('方向与布局','Placement and layout'),t('同一业务保持方向一致。按屏幕比例与操作习惯选择，避免每次打开改变位置。','Keep placement consistent within a workflow; choose it by screen proportions and interaction patterns.'),`<div class="dw-two dw-placement"><article>${sketch(false)}<h3>${t('侧边抽屉','Side drawer')}</h3><p>${t('适合宽屏详情与表单，高度铺满视口，默认从右侧展开。','For wide-screen details and forms. Fill the viewport height and open from the right by default.')}</p></article><article>${sketch(true)}<h3>${t('底部抽屉','Bottom drawer')}</h3><p>${t('适合竖屏与触控操作，高度随内容调整，复杂任务使用独立页面。','For portrait displays and touch. Size height to content; use a dedicated page for complex tasks.')}</p></article></div>`)}
  ${section(t('组件状态','Component states'),t('所有退出入口使用同一套关闭规则，抽屉不自动消失。底部抽屉默认不启用下滑关闭。','Apply one dismissal policy to every exit route. Drawers never disappear automatically. Swipe-to-dismiss is off by default for bottom drawers.'),table([t('场景','Scenario'),t('遮罩点击','Mask click'),t('关闭 / 返回 / Esc','Close / Back / Esc')],[
    [t('只读详情','Read-only'),t('允许关闭','Dismiss'),t('关闭并返回触发入口','Dismiss and return focus to the trigger')],
    [t('编辑表单','Editing'),t('默认不关闭','No dismissal by default'),t('无修改直接关闭；有未保存修改时先询问“放弃修改”，默认保留编辑。','Dismiss if unchanged; otherwise ask whether to discard changes, defaulting to keep editing.')],
    [t('提交中','Submitting'),t('不关闭','No dismissal'),t('避免重复提交；不可取消时暂时阻止关闭并说明状态，必须提供超时与失败恢复。','Prevent duplicate submissions. If cancellation is unavailable, temporarily block dismissal and explain progress, with timeout and failure recovery.')],
  ]))}
  ${section(t('组件交互','Component interaction'),t('保持布局稳定，让用户清楚当前进度与下一步。','Keep the layout stable and make progress and next steps clear.'),rows([
    [t('打开与动效','Opening and motion'),t('从对应边缘平滑进入，建议 240 ms；退出 200 ms，遮罩同步变化。不使用弹跳；尊重减少动态效果设置。','Slide smoothly from the selected edge: 240 ms in and 200 ms out, with a synchronized mask transition. Avoid bounce and respect reduced-motion settings.')],
    [t('加载与空白','Loading and empty'),t('在正文保留骨架与容器尺寸；无结果说明原因及下一步，不让标题和操作区跳动。','Preserve body dimensions with a skeleton. Explain empty results and the next step without shifting the header or footer.')],
    [t('校验与提交','Validation and submission'),t('错误就近显示并定位首个错误；提交时主按钮显示“正在保存”，收到设备确认后再关闭。失败保留填写内容，提供重试。','Show errors beside fields and focus the first invalid field. Show Saving during submission and close after device confirmation. Keep input on failure and offer retry.')],
    [t('二级内容','Secondary content'),t('优先在当前抽屉内切换内容并提供返回，保留上级输入与滚动位置；必要叠加最多两层，仅最上层可交互。','Prefer navigation within the drawer with a Back control, preserving input and scroll position. If stacking is necessary, limit to two levels and allow interaction only with the top layer.')],
  ]))}
  <section class="grid md:grid-cols-2 gap-8 mb-10" aria-label="${t('推荐与避免','Recommended and avoided practices')}">
    ${[
      [true,t('推荐','Recommended'),[
        t('聚焦一个辅助任务，用简短标题说明目的。','Focus on one supporting task with a short, clear title.'),
        t('正文独立滚动，标题与操作区保持固定。','Scroll the body independently and keep the header and actions fixed.'),
        t('仅突出一个主操作，用“保存”等明确动词命名。','Emphasize one primary action and label it with a clear verb such as Save.'),
        t('关闭前保护未保存内容，提交失败时保留输入并支持重试。','Protect unsaved edits on dismissal; keep input and offer retry after submission fails.')
      ]],
      [false,t('避免',"Don't"),[
        t('堆入复杂流程或反复叠加抽屉，使任务层级不清。','Pack in complex workflows or repeatedly stack drawers, obscuring the task hierarchy.'),
        t('让标题与按钮滚出视野，或用横向滚动容纳内容。','Let titles and buttons scroll out of view or rely on horizontal scrolling.'),
        t('多个主按钮争夺注意力，或用模糊文案代替具体动作。','Use competing primary buttons or vague labels instead of specific actions.'),
        t('误触遮罩即丢失编辑内容，或提交失败后清空表单。','Lose edits on an accidental mask click or clear the form after a failed submission.')
      ]]
    ].map(([good,title,items])=>`<article class="${good?'bg-emerald-50/80 border-emerald-100':'bg-red-50/80 border-red-100'} border rounded-3xl p-6 md:p-8"><h2 class="text-xl font-bold ${good?'text-emerald-800':'text-red-800'} mb-5">${title}</h2><ul class="space-y-3">${items.map(item=>`<li class="flex gap-3 text-sm text-gray-600 leading-7"><span class="${good?'text-emerald-600':'text-red-500'} font-bold" aria-hidden="true">${good?'✓':'×'}</span><span>${item}</span></li>`).join('')}</ul></article>`).join('')}
  </section></div>`;
}
