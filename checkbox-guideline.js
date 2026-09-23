function renderCheckboxGuideline(language) {
  const t = (cn, en) => language === 'zh' ? cn : en;
  const section = (id, title, intro, body) => `<section id="${id}" class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-3">${title}</h2>${intro ? `<p class="text-sm text-gray-600 leading-7 mb-6">${intro}</p>` : ''}${body}</section>`;
  const cards = rows => `<div class="grid md:grid-cols-2 gap-5">${rows.map(([title, body]) => `<article class="bg-white/70 border border-gray-200 rounded-2xl p-5"><h3 class="font-semibold mb-2">${title}</h3><p class="text-sm text-gray-600 leading-7">${body}</p></article>`).join('')}</div>`;
  const rules = rows => `<ul class="mt-8 divide-y divide-gray-200/80">${rows.map(([title, body]) => `<li class="grid md:grid-cols-[140px_minmax(0,1fr)] gap-2 md:gap-6 py-5 first:pt-0 last:pb-0"><h3 class="text-sm font-semibold text-gray-900">${title}</h3><p class="text-[13px] text-gray-600 leading-6 xl:whitespace-nowrap">${body}</p></li>`).join('')}</ul>`;
  const table = (headers, rows) => `<div class="overflow-x-auto rounded-2xl border border-gray-200 bg-white/65"><table class="check-table"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const option = (name, value, label, desc = '', attrs = '') => `<label class="check-option"><input type="checkbox" name="${name}" value="${value}" ${attrs}><span><strong>${label}</strong>${desc ? `<small>${desc}</small>` : ''}</span></label>`;
  const group = (legend, body, cls = '') => `<fieldset class="check-group ${cls}"><legend>${legend}</legend><div class="check-options">${body}</div></fieldset>`;
  return `<style>
    .check-guideline{--check-blue:#2283E2;--check-edge:#687580;--check-focus:#155FA5}
    .check-guideline .check-group{margin:0;min-width:0;border:0;padding:0}.check-group legend{font-weight:600;font-size:14px;margin-bottom:12px}
    .check-options{display:flex;flex-wrap:wrap;gap:8px 24px}.check-option{display:flex;align-items:center;gap:8px;min-height:44px;min-width:44px;cursor:pointer;padding:4px 0;font-size:14px}.check-option strong{font-weight:500}.check-option small{display:block;font-size:12px;line-height:1.7;color:#596774;margin-top:3px}.check-option input{appearance:none;-webkit-appearance:none;width:20px;height:20px;flex:0 0 20px;border:1.5px solid var(--check-edge);border-radius:50%;background:white;margin:0;display:grid;place-content:center;cursor:inherit}.check-option input:checked{border-color:var(--check-blue)}.check-option input:checked:before{content:'';width:10px;height:10px;border-radius:50%;background:var(--check-blue)}.check-option:hover input:not(:disabled){border-color:var(--check-blue);box-shadow:0 0 0 4px #2283E212}.check-option:active input:not(:disabled){background:#E5F0FF}.check-option input:focus-visible{outline:2px solid var(--check-focus);outline-offset:3px}.check-option:has(input:disabled){cursor:not-allowed;color:#87919B}.check-option input:disabled{background:#EEF1F4;border-color:#B7C0C9}.check-option input:disabled:checked:before{background:#9BA8B4}.check-option:has(input:disabled) small{color:#687580}
    .check-vertical .check-options,.check-cards .check-options{flex-direction:column;gap:8px}.check-cards .check-option{padding:16px;border:1px solid #CBD3DC;border-radius:12px;align-items:flex-start;background:white;gap:12px}.check-cards input{margin-top:2px}.check-cards .check-option:has(input:checked){border-color:var(--check-blue);background:#EFF6FF}.check-segment .check-options{gap:8px}.check-segment .check-option{padding:8px 16px;border:1px solid #CBD3DC;border-radius:8px;background:white}.check-segment .check-option:has(input:checked){background:#E5F0FF;border-color:var(--check-blue);color:#155FA5}
    .check-table{border-collapse:collapse;width:100%;font-size:13px;line-height:1.7;min-width:570px}.check-table th,.check-table td{text-align:left;padding:14px 18px;border-bottom:1px solid #E1E7EE;vertical-align:top}.check-table th{font-weight:600;color:#596774;background:#F5F8FC}.check-table tr:last-child td{border-bottom:0}.check-example{padding:24px;border:1px solid #DFE6EF;border-radius:16px;background:rgba(255,255,255,.7)}.check-note{font-size:13px;line-height:1.8;color:#596774;margin-top:16px}.check-action{background:#2283E2;color:white;border:0;border-radius:999px;padding:12px 24px;min-height:44px;font-weight:600;cursor:pointer}.check-action:focus-visible{outline:2px solid #155FA5;outline-offset:3px}.check-action:disabled{background:#CBD3DC;color:#596774;cursor:not-allowed}.check-guideline section{scroll-margin-top:24px}.check-state-hover input{border-color:var(--check-blue);box-shadow:0 0 0 4px #2283E212}.check-state-pressed input{background:#E5F0FF}.check-error{color:#B42318;font-size:13px;margin-top:12px}.check-invalid .check-option input{border-color:#B42318}
    @media(max-width:600px){.check-example{padding:16px}.check-segment .check-options{flex-direction:column}.check-segment .check-option{width:100%}.check-option{min-height:48px}.check-group legend{line-height:1.7}}
    @media(forced-colors:active){.check-option input{appearance:auto}.check-option input:checked:before{display:none}}

    .check-option input{border-radius:4px}.check-option input:checked{background:#2283E2}.check-option input:checked:before{width:10px;height:6px;border-radius:0;border-left:2px solid white;border-bottom:2px solid white;transform:translateY(-1px) rotate(-45deg);background:transparent}.check-option input:indeterminate{background:#2283E2;border-color:#2283E2}.check-option input:indeterminate:before{content:'';width:10px;height:2px;background:white;border:0;border-radius:0;transform:none}.check-option input:disabled:checked{background:#B7C0C9}.check-option input:disabled:checked:before{background:transparent}.check-option input:disabled:indeterminate{background:#B7C0C9;border-color:#B7C0C9}.check-option input:disabled:indeterminate:before{background:white}.check-summary{padding:12px 16px;border-radius:12px;background:#E5F0FF;color:#155FA5;font-size:13px;line-height:1.8;margin-top:16px}.check-parent{padding-bottom:12px;margin-bottom:12px}
    @media(forced-colors:active){.check-option input{appearance:auto}.check-option input:checked:before,.check-option input:indeterminate:before{display:none}}
    </style><div class="check-guideline">
<section class="mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-5">${t('复选框','Checkbox')}</h1><p class="text-lg text-gray-600 leading-8 max-w-3xl">${t('从一组可独立组合的选项中选择零项、一项或多项。让附加设置易于比较，让批量选择的范围与结果清晰可见。','Select zero, one, or multiple independent options. Make optional settings easy to compare and the scope and result of bulk selection visible.')}</p></section>
${section('usage',t('何时使用','When to use'),t('选项彼此独立，可分别选中或取消。点击复选框只改变选择，不直接启动程序；生效时机应由所在任务明确说明。（以下参数均为假设示例）','Options can be selected and cleared independently. A checkbox changes selection without starting a program; the surrounding task must explain when changes apply. (All parameters below are illustrative.)'),cards([
[t('可组合的附加功能','Combinable extras'),t('日常洗支持“额外漂洗”和“防皱”，可同时选中，也可全部不选。组标题明确为“附加功能（可多选）”。','Daily wash supports Extra rinse and Anti-crease together or neither. Label the group “Optional extras (multiple choices)”.')],
[t('批量选择对象','Select multiple targets'),t('为客厅、主卧、次卧空调选择统一设置的应用范围。全选只作用于当前组内可操作设备，不能暗中跨页或包含离线设备。','Select living room and bedroom AC units as targets for shared settings. Select all affects only available devices in the current group, never hidden pages or offline devices.')],
[t('与其他组件区分','Choose the right component'),t('洗涤程序只能选一种，使用单选框；提示音等即时二元设置使用开关；启动、删除等动作使用按钮。','Use radios for one wash program, switches for immediate binary settings such as sounds, and buttons for start or delete actions.')],
[t('默认选择与标签','Defaults and labels'),t('优先展示已保存的真实值。新增可选功能默认不选；涉及额外能耗、费用或授权的项目须由用户主动选择。避免双重否定，标签描述选中后获得的功能。','Show saved values first. New optional features start unchecked; extra energy use, charges, or permissions require an active choice. Avoid double negatives and describe what selection enables.')]
]))}
${section('variants',t('类型与交互示例','Variants and interactive examples'),'',`<div class="grid lg:grid-cols-2 gap-6">
<article class="check-example"><h3 class="font-semibold mb-4">${t('基础复选','Basic checkboxes')}</h3>${group(t('附加功能（可多选）','Optional extras (multiple choices)'),option('extras','rinse',t('额外漂洗','Extra rinse'))+option('extras','crease',t('防皱','Anti-crease')))}<p class="check-note">${t('勾选只编辑本次洗涤设置，启动洗涤后生效；取消勾选不会改变其他项。','Selections edit this wash setup and apply when washing starts. Clearing one option does not change another.')}</p></article>
<article class="check-example"><h3 class="font-semibold mb-4">${t('全选与半选','Select all and partial selection')}</h3><fieldset class="check-group" id="device-checks"><legend>${t('应用设备','Target devices')}</legend><div class="check-parent">${option('device-all','all',t('全选','Select all'),'','id="device-all"')}</div><div class="check-options check-device-list">${option('devices','living',t('客厅空调','Living room AC'),'','checked')+option('devices','main',t('主卧空调','Main bedroom AC'))+option('devices','second',t('次卧空调','Second bedroom AC'))}</div></fieldset></article>
</div>`)}
${section('anatomy',t('组成与尺寸','Anatomy and dimensions'),t('复选框由方形指示器、标签、可选说明与交互热区组成。组标题说明任务和数量限制；多行标签顶对齐，说明与文字左对齐。','A square indicator, label, optional description, and hit target form the checkbox. Group titles explain the task and selection limits. Top-align multiline content and align descriptions with labels.'),table([t('要素','Element'),t('本系统建议','Recommendation'),t('应用规则','Rule')],[
[t('指示器','Indicator'),'20 × 20 px · '+t('圆角 4 px','4 px radius'),t('选中用对勾，半选用横线；保持方形轮廓，避免与圆形单选框混淆。','Use a checkmark for selection and a dash for partial selection. Keep a square outline to distinguish it from radios.')],
[t('标签 / 说明','Label / description'),'14–16 px / 12–14 px',t('TFT 标签建议不小于 16 px；关键条件不能只放在难以辨认的小字中。','Prefer TFT labels at least 16 px; essential conditions must remain readable.')],
[t('触控热区','Touch target'),'≥ 44 × 44 dp',t('家电建议高度 48–56 dp。网页示例使用 CSS px；硬件按像素密度换算，热区之间不得重叠。','Prefer 48–56 dp height on appliances. Web examples use CSS px; convert for hardware density and avoid overlapping targets.')],
[t('间距','Spacing'),'8 / 8–12 / 24 px',t('框与标签 8；纵向热区间隔 8–12；横向选项间隔 24。窄屏优先纵排。','Indicator to label: 8; vertical target gap: 8–12; horizontal gap: 24. Stack on narrow screens.')],
[t('色彩','Color'),'#2283E2 / #687580',t('选中和半选使用品牌蓝底与白色符号，未选使用中性边框；错误用文字与边框共同表达。','Use brand blue with a white symbol for selected and partial states, neutral borders for unselected. Pair error borders with explanatory text.')]
]))}
${section('states',t('状态规范','State specification'),t('选择状态与可用性独立表达。半选只表示组内部分子项已选，不是单个选项的第三个业务值。','Selection and availability are independent. Partial selection summarizes a group; it is not a third business value for an individual option.'),`<div class="grid md:grid-cols-3 gap-4">${[
[t('默认','Default'),'',''],[t('选中','Selected'),'checked',''],[t('半选','Partial'),'data-static-mixed',''],[t('悬停示意','Hover illustration'),'','check-state-hover'],[t('按下示意','Pressed illustration'),'checked','check-state-pressed'],[t('禁用未选','Disabled, unselected'),'disabled',''],[t('禁用已选','Disabled, selected'),'checked disabled',''],[t('禁用半选','Disabled, partial'),'disabled data-static-mixed',''],[t('错误','Error'),'aria-invalid="true" aria-describedby="check-state-error"','check-invalid']
].map(([label,attrs,cls],i)=>`<div class="check-example ${cls}">${group(label,option('check-state-'+i,'sample',t('示例选项','Example option'),'',attrs))}${i===8?`<p id="check-state-error" class="check-error">${t('示意：请至少选择一项。','Illustration: select at least one option.')}</p>`:''}</div>`).join('')}</div><p class="check-note">${t('悬停、按下与错误为视觉示意；半选示例展示组汇总状态。禁用时仍保留对勾或横线，不能只用变灰代替当前选择。','Hover, pressed, and error tiles illustrate appearance; partial tiles demonstrate group summaries. Preserve checkmarks and dashes while disabled, rather than conveying selection through gray color alone.')}</p>`)}
${section('selection',t('全选与数量规则','Select-all and count rules'),'',rules([
[t('计算半选','Compute partial selection'),t('可操作项中：0 项为未选、全部为选中、部分为半选；点击全选可选中或清空全部可操作项。','Among available items: none is unchecked, all is checked, and some is partial; Select all toggles every available item.')],
[t('禁用与范围','Disabled items and scope'),t('禁用项不参与全选；保留其已有状态并说明原因。没有可操作项时禁用全选。','Select all ignores disabled items; preserve their state and explain why. Disable Select all when no item is available.')],
[t('数量限制','Selection limits'),t('普通附加项可全部不选；有数量限制时预先说明，超限后保留选择并提示修正。','Optional extras may remain empty; state limits in advance, preserve invalid choices, and prompt users to correct them.')],
[t('动态内容','Dynamic content'),t('刷新或筛选后重新计算半选态；全选范围保持可见，新项目不自动选中，失效项目提示复核。','Recompute partial state after refresh or filtering; keep scope visible, leave new items unchecked, and flag unavailable items.')]
]))}
${section('behavior',t('交互与反馈规则','Interaction and feedback'),'',rules([
[t('选择与执行','Selection and execution'),t('勾选只修改草稿，由保存或启动提交；自动保存须明确标注并反馈结果。','Checking edits a draft; Save or Start submits it. Label auto-save clearly and report its result.')],
[t('兼容性与资源影响','Compatibility and resource impact'),t('就近说明附加耗时、资源消耗和适用条件；发生冲突时提示调整，不静默取消选择。','Explain added time, resource use, and compatibility nearby; show conflicts and request correction without silently clearing choices.')],
[t('等待、失败与取消','Waiting, failure, and cancellation'),t('100 ms 内反馈按下；超过 300 ms 显示正在应用。失败时保留草稿并提供重试。','Respond within 100 ms; show Applying after 300 ms. On failure, preserve the draft and offer retry.')],
[t('运行锁定','Runtime locking'),t('运行、离线或童锁时禁用受影响项并说明恢复条件；批量设置部分失败时逐项反馈。','When running, offline, or locked, disable affected items and explain recovery; report partial bulk failures per item.')]
]))}
<section class="grid md:grid-cols-2 gap-6 mb-10"><article class="bg-emerald-50 border border-emerald-100 rounded-3xl p-6"><h2 class="font-bold text-emerald-800 mb-3">${t('推荐做法','Do')}</h2><p class="text-sm leading-7">${t('将“额外漂洗 / 防皱”作为独立选项；用半选汇总已选设备；清晰标注全选范围、数量限制与不可用原因。','Offer Extra rinse and Anti-crease independently; summarize device selection with a partial state; state scope, count limits, and unavailability reasons clearly.')}</p></article><article class="bg-red-50 border border-red-100 rounded-3xl p-6"><h2 class="font-bold text-red-800 mb-3">${t('避免做法','Avoid')}</h2><p class="text-sm leading-7">${t('用复选框选择互斥程序；默认勾选高能耗附加功能；把半选当作待执行状态；全选时修改禁用项或隐藏范围内的设备。','Using checkboxes for mutually exclusive programs, preselecting energy-intensive extras, using partial state to mean pending execution, or changing disabled or hidden out-of-scope devices through select all.')}</p></article></section>
</div>`;
}

function initCheckboxExamples(root, language) {
  const t = (cn, en) => language === 'zh' ? cn : en;
  root.querySelectorAll('[data-static-mixed]').forEach(input => {
    input.indeterminate = true;
    input.addEventListener('change', () => { input.checked = false; input.indeterminate = true; });
  });
  const parent = root.querySelector('#device-all');
  const devices = [...root.querySelectorAll('input[name="devices"]:not(:disabled)')];
  const update = () => {
    const count = devices.filter(input => input.checked).length;
    parent.checked = count === devices.length && count > 0;
    parent.indeterminate = count > 0 && count < devices.length;
    parent.disabled = devices.length === 0;
  };
  devices.forEach(input => input.addEventListener('change', update));
  parent.addEventListener('change', () => {
    devices.forEach(input => { input.checked = parent.checked; });
    update();
  });
  update();

}
