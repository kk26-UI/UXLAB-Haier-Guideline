function renderCheckboxGuideline(language) {
  const t = (cn, en) => language === 'zh' ? cn : en;
  const section = (id, title, intro, body) => `<section id="${id}" class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-3">${title}</h2>${intro ? `<p class="text-sm text-gray-600 leading-7${body ? ' mb-6' : ''}">${intro}</p>` : ''}${body}</section>`;
  const list = (items, good = true) => items.map(item => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${item}</span></li>`).join('');
  const rules = rows => `<ul class="mt-8 divide-y divide-gray-200/80">${rows.map(([title, body]) => `<li class="grid md:grid-cols-[140px_minmax(0,1fr)] gap-2 md:gap-6 py-5 first:pt-0 last:pb-0"><h3 class="text-sm font-semibold text-gray-900">${title}</h3><p class="text-[13px] text-gray-600 leading-6 xl:whitespace-nowrap">${body}</p></li>`).join('')}</ul>`;
  const table = (headers, rows) => `<div class="overflow-x-auto rounded-2xl border border-gray-200 bg-white/65"><table class="check-table"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const option = (name, value, label, desc = '', attrs = '') => `<label class="check-option"><input type="checkbox" name="${name}" value="${value}" ${attrs}><span><strong>${label}</strong>${desc ? `<small>${desc}</small>` : ''}</span></label>`;
  const group = (legend, body, cls = '') => `<fieldset class="check-group ${cls}"><legend>${legend}</legend><div class="check-options">${body}</div></fieldset>`;
  return `<style>
    .check-guideline{--check-blue:#2283E2;--check-edge:#CCCCCC;--check-focus:#155FA5}
    .check-guideline .check-group{margin:0;min-width:0;border:0;padding:0}.check-group legend{font-weight:600;font-size:14px;margin-bottom:12px}
    .check-options{display:flex;flex-wrap:wrap;gap:8px 24px}.check-option{display:flex;align-items:center;gap:8px;min-height:44px;min-width:44px;cursor:pointer;padding:4px 0;font-size:14px}.check-option strong{font-weight:500}.check-option small{display:block;font-size:12px;line-height:1.7;color:#596774;margin-top:3px}.check-option input{appearance:none;-webkit-appearance:none;width:20px;height:20px;flex:0 0 20px;border:1.5px solid var(--check-edge);border-radius:50%;background:white;margin:0;display:grid;place-content:center;cursor:inherit}.check-option input:checked{border-color:var(--check-blue)}.check-option input:checked:before{content:'';width:10px;height:10px;border-radius:50%;background:var(--check-blue)}.check-option:hover input:not(:disabled){border-color:var(--check-blue);box-shadow:0 0 0 4px #2283E212}.check-option:active input:not(:disabled){background:#E5F0FF}.check-option input:focus-visible{outline:2px solid var(--check-focus);outline-offset:3px}.check-option:has(input:disabled){cursor:not-allowed;color:#87919B}.check-option input:disabled{background:#EEF1F4;border-color:#B7C0C9}.check-option input:disabled:checked:before{background:#9BA8B4}.check-option:has(input:disabled) small{color:#687580}
    .check-vertical .check-options,.check-cards .check-options{flex-direction:column;gap:8px}.check-cards .check-option{padding:16px;border:1px solid #CBD3DC;border-radius:12px;align-items:flex-start;background:white;gap:12px}.check-cards input{margin-top:2px}.check-cards .check-option:has(input:checked){border-color:var(--check-blue);background:#EFF6FF}.check-segment .check-options{gap:8px}.check-segment .check-option{padding:8px 16px;border:1px solid #CBD3DC;border-radius:8px;background:white}.check-segment .check-option:has(input:checked){background:#E5F0FF;border-color:var(--check-blue);color:#155FA5}
    .check-table{border-collapse:collapse;width:100%;font-size:13px;line-height:1.7;min-width:570px}.check-table th,.check-table td{text-align:left;padding:14px 18px;border-bottom:1px solid #E1E7EE;vertical-align:top}.check-table th{font-weight:600;color:#596774;background:#F5F8FC}.check-table tr:last-child td{border-bottom:0}.check-example{padding:24px;border:1px solid #DFE6EF;border-radius:16px;background:rgba(255,255,255,.7)}.check-note{font-size:13px;line-height:1.8;color:#596774;margin-top:16px}.check-action{background:#2283E2;color:white;border:0;border-radius:999px;padding:12px 24px;min-height:44px;font-weight:600;cursor:pointer}.check-action:focus-visible{outline:2px solid #155FA5;outline-offset:3px}.check-action:disabled{background:#CBD3DC;color:#596774;cursor:not-allowed}.check-guideline section{scroll-margin-top:24px}.check-state-hover input{border-color:var(--check-blue);box-shadow:0 0 0 4px #2283E212}.check-error{color:#999999;font-size:13px;margin-top:12px}.check-invalid .check-option input{border-color:#F23D3D}
    @media(max-width:600px){.check-example{padding:16px}.check-segment .check-options{flex-direction:column}.check-segment .check-option{width:100%}.check-option{min-height:48px}.check-group legend{line-height:1.7}}
    @media(forced-colors:active){.check-option input{appearance:auto}.check-option input:checked:before{display:none}}

    .check-option input{border-radius:4px}.check-option input:checked{background:#2283E2}.check-option input:checked:before{width:10px;height:6px;border-radius:0;border-left:2px solid white;border-bottom:2px solid white;transform:translateY(-1px) rotate(-45deg);background:transparent}.check-option input:indeterminate{background:#2283E2;border-color:#2283E2}.check-option input:indeterminate:before{content:'';width:10px;height:2px;background:white;border:0;border-radius:0;transform:none}.check-option input:disabled:checked{background:#B7C0C9}.check-option input:disabled:checked:before{background:transparent}.check-option input:disabled:indeterminate{background:#B7C0C9;border-color:#B7C0C9}.check-option input:disabled:indeterminate:before{background:white}.check-summary{padding:12px 16px;border-radius:12px;background:#E5F0FF;color:#155FA5;font-size:13px;line-height:1.8;margin-top:16px}.check-parent{padding-bottom:12px;margin-bottom:12px}
    @media(forced-colors:active){.check-option input{appearance:auto}.check-option input:checked:before,.check-option input:indeterminate:before{display:none}}
    #layout h3,#layout .check-option strong{font-weight:400}#layout .check-group legend{font-weight:400;color:#999999}
    </style><div class="check-guideline">
<section class="mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-5">${t('复选框','Checkbox')}</h1><p class="text-lg text-gray-600 leading-8 max-w-3xl">${t('当列表中有多个选项可供选择，且选项之间不互斥，可使用复选框组件。','Use checkboxes when a list offers multiple options that are not mutually exclusive.')}</p></section>
${section('usage',t('何时使用','When to use'),t('用于一组相互独立的可选项。适合附加功能、批量对象和条款确认。选项互斥时使用单选框；状态立即生效时使用开关；触发动作时使用按钮。','Use for independent options such as optional features, bulk targets, or consent. Use radio buttons for mutually exclusive options, switches for immediate state changes, and buttons for actions.'),'')}
${section('states',t('状态与样式','States and styles'),t('复选框包含未选、选中和半选三种状态，均可禁用。半选用于父级选项，表示部分子项已选。','Checkboxes may be unchecked, checked, or partially checked, and each state can be disabled. Partial state belongs to a parent and indicates that some children are selected.'),`<div class="grid grid-cols-2 md:grid-cols-4 gap-4">${[
[t('默认','Default'),'',''],[t('选中','Selected'),'checked',''],[t('半选','Partial'),'data-static-mixed',''],[t('悬停示意','Hover illustration'),'','check-state-hover'],[t('禁用未选','Disabled, unselected'),'disabled',''],[t('禁用已选','Disabled, selected'),'checked disabled',''],[t('禁用半选','Disabled, partial'),'disabled data-static-mixed',''],[t('错误','Error'),'aria-invalid="true"','check-invalid']
].map(([label,attrs,cls],i)=>`<div class="check-example ${cls}">${group(label,option('check-state-'+i,'sample',t('示例选项','Example option'),'',attrs))}</div>`).join('')}</div><p class="check-note">${t('禁用时保留对勾或横线；必选组未选择任何项时，显示错误状态并提示“请至少选择一项”。','Keep the checkmark or dash when disabled. If a required group has no selection, show an error state and the message “Select at least one option”.')}</p>`)}
${section('anatomy',t('组成与尺寸','Anatomy and dimensions'),t('复选框由方形指示器、标签、可选说明与交互热区组成。组标题说明任务和数量限制；多行标签顶对齐，说明与文字左对齐。','A square indicator, label, optional description, and hit target form the checkbox. Group titles explain the task and selection limits. Top-align multiline content and align descriptions with labels.'),table([t('要素','Element'),t('本系统建议','Recommendation'),t('应用规则','Rule')],[
[t('指示器','Indicator'),'20 × 20 px · '+t('圆角 4 px','4 px radius'),t('选中用对勾，半选用横线；保持方形轮廓，避免与圆形单选框混淆。','Use a checkmark for selection and a dash for partial selection. Keep a square outline to distinguish it from radios.')],
[t('标签 / 说明','Label / description'),'14–16 px / 12–14 px',t('TFT 标签建议不小于 16 px；关键条件不能只放在难以辨认的小字中。','Prefer TFT labels at least 16 px; essential conditions must remain readable.')],
[t('触控热区','Touch target'),'≥ 44 × 44 dp',t('家电建议高度 48–56 dp。网页示例使用 CSS px；硬件按像素密度换算，热区之间不得重叠。','Prefer 48–56 dp height on appliances. Web examples use CSS px; convert for hardware density and avoid overlapping targets.')],
]))}
${section('layout',t('组件布局','Component layout'),'',`
<div class="space-y-8 mt-6"><div><h3 class="font-normal mb-3">${t('对齐方式','Alignment')}</h3><p class="text-sm text-gray-600 leading-7 mb-5">${t('同组复选框保持统一排列。短标签可横向排布；空间有限或标签较长时，优先纵向排布。','Use a consistent direction within each group. Arrange short labels horizontally; prefer vertical layout when space is limited or labels are longer.')}</p><div class="grid lg:grid-cols-2 gap-6"><div class="check-example">${group(t('水平排列','Horizontal'),[1,2,3].map(i=>option('layout-horizontal',String(i),t('选项'+i,'Option '+i))).join(''))}</div><div class="check-example">${group(t('垂直排列','Vertical'),[1,2,3].map(i=>option('layout-vertical',String(i),t('选项'+i,'Option '+i))).join(''),'check-vertical')}</div></div></div>
<div><h3 class="font-normal mb-3">${t('复选框组','Checkbox group')}</h3><p class="text-sm text-gray-600 leading-7 mb-5">${t('全选独占一行，子项在下一行横向排列。全选可选中或清空所有子项；仅部分子项选中时，全选显示半选状态。','Place Select all on its own row and arrange children horizontally below. Select all checks or clears every child; it shows partial state when only some children are checked.')}</p><div class="check-example"><fieldset class="check-group" aria-label="${t('复选框组','Checkbox group')}">${option('layout-parent','all',t('全选','Select all'),'','id="layout-parent"')}<div class="check-options mt-2">${[1,2,3,4].map(i=>option('layout-child',String(i),t('选项'+i,'Option '+i),'',i===1?'checked':'')).join('')}</div></fieldset></div></div></div>`)}
${section('selection',t('全选与数量规则','Select-all and count rules'),'',rules([
[t('计算半选','Compute partial selection'),t('可操作项中：0 项为未选、全部为选中、部分为半选；点击全选可选中或清空全部可操作项。','Among available items: none is unchecked, all is checked, and some is partial; Select all toggles every available item.')],
[t('禁用与范围','Disabled items and scope'),t('禁用项不参与全选；保留其已有状态并说明原因。没有可操作项时禁用全选。','Select all ignores disabled items; preserve their state and explain why. Disable Select all when no item is available.')],
[t('数量限制','Selection limits'),t('普通附加项可全部不选；有数量限制时预先说明，超限后保留选择并提示修正。','Optional extras may remain empty; state limits in advance, preserve invalid choices, and prompt users to correct them.')],
[t('动态内容','Dynamic content'),t('刷新或筛选后重新计算半选态；全选范围保持可见，新项目不自动选中，失效项目提示复核。','Recompute partial state after refresh or filtering; keep scope visible, leave new items unchecked, and flag unavailable items.')]
]))}
<section class="grid md:grid-cols-2 gap-8 mb-10"><article class="bg-emerald-50/80 border border-emerald-100 rounded-3xl p-6 md:p-8"><h2 class="text-xl font-bold text-emerald-800 mb-5">${t('推荐','Do')}</h2><ul class="space-y-3">${list([
  t('将可独立组合的功能作为选项','Use options for independently combinable features'),
  t('用半选状态表示组内部分选中','Use partial state when some group items are selected'),
  t('明确全选范围、数量限制与禁用原因','Explain select-all scope, selection limits, and disabled reasons')
])}</ul></article><article class="bg-red-50/80 border border-red-100 rounded-3xl p-6 md:p-8"><h2 class="text-xl font-bold text-red-800 mb-5">${t('避免','Avoid')}</h2><ul class="space-y-3">${list([
  t('用复选框选择互斥程序','Use checkboxes for mutually exclusive programs'),
  t('默认勾选高能耗附加功能','Preselect energy-intensive extras'),
  t('用半选表示待执行，或通过全选修改禁用项','Use partial state for pending actions or change disabled items via Select all')
], false)}</ul></article></section>
</div>`;
}

function initCheckboxExamples(root) {
  const parent = root.querySelector('#layout-parent');
  const children = [...root.querySelectorAll('input[name="layout-child"]')];
  const updateParent = () => {
    const selected = children.filter(input => input.checked).length;
    parent.checked = selected === children.length;
    parent.indeterminate = selected > 0 && selected < children.length;
  };
  parent.addEventListener('change', () => {
    children.forEach(input => { input.checked = parent.checked; });
    updateParent();
  });
  children.forEach(input => input.addEventListener('change', updateParent));
  updateParent();
  root.querySelectorAll('[data-static-mixed]').forEach(input => {
    input.indeterminate = true;
    input.addEventListener('change', () => {
      input.checked = false;
      input.indeterminate = true;
    });
  });
}
