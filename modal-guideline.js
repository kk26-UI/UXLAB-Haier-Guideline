function renderModalGuideline(language) {
  const t = (zh, en) => language === 'zh' ? zh : en;
  const section = (id, title, intro, body) => `<section id="${id}" class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2">${title}</h2>${intro ? `<p class="text-sm text-gray-600 leading-7${body ? ' mb-7' : ''}">${intro}</p>` : '<div class="mb-7"></div>'}${body}</section>`;
  const rows = items => `<div class="mo-rules">${items.map(([a,b]) => `<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div>`;
  const table = (heads, data) => `<div class="mo-table-wrap"><table class="mo-table"><thead><tr>${heads.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${data.map(row => `<tr>${row.map((c,i) => i ? `<td>${c}</td>` : `<th scope="row">${c}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const titles = [t('重命名设备','Rename device'),t('删除预约','Delete schedule'),t('设备连接已中断','Device disconnected'),t('设备设置','Device settings')];
  const bodies = [t('为设备设置一个容易识别的名称。','Give your device a recognizable name.'),t('将删除明天 07:30 的洗涤预约，删除后无法恢复。','This removes tomorrow’s 07:30 wash schedule. This cannot be undone.'),t('设置未同步，请检查网络后重试。','Settings not synced. Check your network and try again.'),t('保存后，新的设置将在设备上生效。','Your new settings will take effect on the device once saved.')];
  const sample = (index, style = 'button') => `<div class="mo-scene" role="img" aria-label="${t('弹窗示意：','Popup illustration: ')}${titles[index]}"><div class="mo-window"><strong>${titles[index]}</strong><span class="mo-static-close" aria-hidden="true"><img src="assets/icons/general/Cancel.svg" alt=""></span><p>${bodies[index]}</p>${index === 0 ? `<div class="mo-field-preview">${t('客厅空调','Living room AC')}</div>` : ''}<div class="mo-static-actions${style === 'text' ? ' mo-text-actions' : ''}">${index !== 2 ? `<span>${t('取消','Cancel')}</span>${style === 'text' ? '<i class="mo-action-divider" aria-hidden="true"></i>' : ''}` : ''}<span class="${index === 1 ? 'mo-danger' : 'mo-primary'}">${index === 0 || index === 3 ? t('保存','Save') : index === 1 ? t('删除预约','Delete schedule') : t('知道了','Got it')}</span></div></div></div>`;
  return `<div class="modal-doc" lang="${language === 'zh' ? 'zh-CN' : 'en'}">
  <section class="mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-5">${t('弹窗','Popup')}</h1><p class="text-lg text-gray-600 leading-8 max-w-3xl">${t('在当前页面打开浮层，承载相关信息与操作。','Open an overlay on the current page to present related information and actions.')}</p></section>
  ${section('modal-usage',t('何时使用','When to use'),t('对话框用于关键信息录入或信息确认，唤出弹窗时会中断用户当前的任务流程，所以请谨慎使用弹窗以避免对用户过度干扰。','Use popups for essential information entry or confirmation. Opening a popup interrupts the current workflow, so use them sparingly to avoid unnecessary disruption.'),'')}
  ${section('modal-anatomy',t('组件构成','Anatomy'),t('以留白划分标题、正文与操作区，保持信息层级清晰。','Separate the title, body, and actions with whitespace to keep the hierarchy clear.'),`<div class="mo-anatomy">${sample(3)}<div class="mo-parts">${[
    [t('标题','Title'),t('必备。居中对齐，直接说明任务或决定。','Required. Centered and specific about the task or decision.')],
    [t('正文','Body'),t('按需提供说明或表单，说明文字居中，只保留完成任务必要的信息。','Optional explanation or form containing only what the task needs. Center explanatory text.')],
    [t('操作区','Actions'),t('按钮组相对容器居中，取消在左、主操作在右；只突出一个动作。','Center the action group within the container, with Cancel before the single primary action.')],
    [t('关闭入口','Dismissal'),t('右上角关闭与取消含义一致，不执行或保存操作。','The top-right close control has the same meaning as Cancel and never saves or executes.')],
    [t('遮罩','Mask'),t('覆盖当前应用区域，背景不响应点击、滚动或焦点。','Covers the active application; background content cannot receive clicks, scrolling, or focus.')]
  ].map(([a,b],i)=>`<div><span class="mo-number" aria-hidden="true">${i+1}</span><div><h3>${a}</h3><p>${b}</p></div></div>`).join('')}</div></div>`)}
  ${section('modal-styles',t('弹窗样式','Popup styles'),t('按操作的视觉层级选择按钮或文字按钮，按钮组均相对弹窗容器居中。','Choose filled buttons or text buttons for the required emphasis. Center both action groups within the popup.'),`<div class="mo-styles">${[
    ['button',t('按钮弹窗','Button popup'),t('沿用按钮组件的大号规格，使用主次按钮区分操作层级。','Use the large Button specification and distinguish primary and secondary actions.')],
    ['text',t('文字按钮弹窗','Text-button popup'),t('两项文字按钮等宽排列，中间使用竖向分割线；分割线与文字按钮等高。','Arrange two equal-width text buttons with a vertical divider between them. Match the divider height to the full button height.')]
  ].map(([style,title,description])=>`<article class="mo-style">${sample(3,style)}<h3>${title}</h3><p>${description}</p></article>`).join('')}</div>`)}
  ${section('modal-types',t('组件类型','Types'),t('功能、确认、消息共用一套容器与操作顺序。状态色只用于表达语义，不铺满弹窗。','Functional, confirmation, and message popups share the same container and action order. Apply status colors sparingly.'),`<div class="mo-types">${[
    [t('功能弹窗','Functional'),t('承载轻量编辑，保存前校验，失败时保留输入。','For lightweight editing. Validate before saving and preserve input after failure.')],
    [t('确认弹窗','Confirmation'),t('用于有损决策。危险操作使用红色按钮，默认聚焦取消。','For destructive decisions. Use a red action button and focus Cancel initially.')],
    [t('消息弹窗','Message'),t('表达一般信息、成功、警告或错误。仅在需要确认知晓时使用。','Supports information, success, warning, or error. Use only when acknowledgement is needed.')]
  ].map(([a,b],i)=>`<article class="mo-type">${sample(i)}<div class="mo-type-content"><h3>${a}</h3><p>${b}</p><button type="button" class="mo-btn" data-modal-example="${i}">${t('体验示例','Try example')}</button></div></article>`).join('')}</div>`)}
  ${section('modal-specs',t('组件规格','Component specifications'),t('以下为本规范建议规格，硬件需按实际观看距离校准。','The following specifications are recommended by this guideline. Calibrate hardware for the actual viewing distance.'),table([t('要素','Element'),t('规格','Specification'),t('应用规则','Rule')],[
    [t('宽度','Width'),'420 / 520 / 720',t('小号用于确认和消息；常规用于短表单；大号用于必要的表格或选择。','Small for decisions and messages, regular for short forms, large for necessary tables or selection.')],
    [t('高度与位置','Height and placement'),t('随内容','Content height'),t('默认居中，超高时仅正文纵向滚动，标题和操作保持可见；不出现横向滚动。','Center by default. Scroll only the body when needed, preserving title and actions. Avoid horizontal scrolling.')],
    [t('容器','Container'),t('白色 Solid · 圆角 24','White Solid · 24 radius'),t('正文使用不透明底色，避免背景透出干扰阅读。','Use an opaque surface for readability.')],
    [t('留白','Spacing'),t('至少 32','At least 32'),t('标题至正文 20，正文至按钮 32，按钮间距 24；文字按钮的分割线居中置于间隙内。','Title-to-body gap 20, body-to-button gap 32, button gap 24. Center the text-button divider within the gap.')],
    [t('文字','Typography'),t('标题 24/32 · 正文 16/24','Title 24/32 · body 16/24'),t('标题中等字重，正文常规字重；辅助信息 14/24。长标题可换行，不能截断关键信息。','Use medium-weight titles and regular body text; supporting text 14/24. Wrap long titles without truncating essential information.')],
    [t('遮罩','Mask'),t('黑色 Solid','Black Solid'),t('与抽屉保持一致；减少透明效果时关闭模糊并适度加深遮罩，弹窗正文始终清晰。','Match the drawer treatment. For reduced transparency, remove blur and increase mask opacity; keep the dialog body clear.')]
  ]))}
  ${section('modal-dismissal',t('组件状态','Component states'),t('所有关闭入口使用同一规则，弹窗不自动消失。不可将关闭等同于确认。','Apply one policy to every exit. Popups never dismiss automatically, and dismissal never confirms an action.'),table([t('场景','Scenario'),t('点击遮罩','Mask click'),t('关闭 / 取消 / Esc / 返回','Close / Cancel / Esc / Back')],[
    [t('只读信息','Read-only information'),t('允许关闭','Dismiss'),t('关闭并将焦点返回触发入口。','Dismiss and restore focus to the trigger.')],
    [t('编辑表单','Editing a form'),t('默认不关闭','No dismissal by default'),t('无修改可直接退出；有修改则在当前弹窗内询问是否放弃，默认继续编辑。','Dismiss unchanged forms. For unsaved changes, ask within the same modal whether to discard; default to keeping the edits.')],
    [t('关键确认','Important confirmation'),t('不关闭','Do not dismiss'),t('按取消处理，保留原数据；危险操作不能由 Enter 意外触发。','Treat as Cancel and preserve data. Enter must not accidentally execute a destructive action.')],
    [t('提交中','Submitting'),t('不关闭','Do not dismiss'),t('避免重复提交。不可取消的请求暂时阻止退出并说明原因；必须有超时与失败恢复。','Prevent repeated submission. Temporarily block dismissal of non-cancellable requests and explain why, with timeout and failure recovery.')],
    [t('校验或提交失败','Validation or submission failure'),t('不关闭','Do not dismiss'),t('保留内容，在字段旁或正文说明原因与恢复方式，允许修正、重试或安全退出。','Preserve content, explain the error by the field or in the body, and allow correction, retry, or safe exit.')]
  ]))}
  ${section('modal-interaction',t('组件交互','Component interaction'),'',rows([
    [t('动效','Motion'),t('进入建议 200 ms，退出 160 ms，遮罩同步淡入淡出；避免弹跳和大幅缩放，尊重减少动态效果设置。','Use a 200 ms entrance and 160 ms exit with matching mask fades. Avoid bounce or large scaling and respect reduced-motion preferences.')],
    [t('异步提交','Async submission'),t('先校验，再显示“正在保存…”并阻止重复触发。仅在设备确认后关闭并反馈成功；失败或超时留在原处，保留输入并提供重试。','Validate first, show Saving, and block repeat activation. Close and report success only after device confirmation. On failure or timeout, preserve input and offer retry in place.')],
    [t('加载与布局','Loading and layout'),t('加载前后保持容器宽度、位置与主要高度稳定。内容区预留骨架空间，不让按钮随加载跳动。','Keep width, placement, and overall height stable during loading. Reserve body space for skeletons so actions do not shift.')],
    [t('层级与返回','Hierarchy and return'),t('避免多层弹窗叠加。补充信息在当前弹窗内展开，复杂任务使用独立页面。关闭后恢复原页面的浏览位置，并将焦点返回触发入口，便于继续当前任务。','Avoid stacking popups. Expand supporting information within the current popup and use a dedicated page for complex tasks. On closing, restore the original page’s scroll position and return focus to the trigger so users can continue their task.')]
  ]))}
  ${section('modal-writing',t('文案规范','Writing guidelines'),'',rows([
    [t('标题说明目的','Name the purpose'),t('使用“重命名设备”“删除预约”等具体任务，避免“温馨提示”“系统消息”等泛化标题。','Use a specific task such as Rename device or Delete schedule. Avoid generic titles such as Notice or System message.')],
    [t('正文说明后果','Explain consequences'),t('先说影响，再说明必要条件与下一步。例如“将删除明天 07:30 的洗涤预约，删除后无法恢复。”不堆叠技术错误码。','Lead with the impact, then necessary conditions and next steps. For example: This removes tomorrow’s 07:30 wash schedule. This cannot be undone. Avoid technical error codes.')],
    [t('按钮描述结果','Label the outcome'),t('使用“保存”“删除预约”“继续编辑”等明确动作。消息确认可用“知道了”；不使用两个含义接近的选项。','Use explicit actions such as Save, Delete schedule, or Keep editing. Got it is suitable for acknowledgement. Keep choices distinct.')]
  ]))}
  <div class="mo-pair mb-8"><article><h2 class="text-xl font-bold">${t('推荐','Do')}</h2><ul>${[t('只为必要决定打断任务','Interrupt only for necessary decisions'),t('用留白、清晰标题与单一主操作建立层级','Build hierarchy with whitespace, clear titles, and one primary action'),t('保护编辑内容，让退出与重试可预期','Protect edits and provide predictable dismissal and retry')].map(x=>`<li>${x}</li>`).join('')}</ul></article><article><h2 class="text-xl font-bold">${t('避免',"Don't")}</h2><ul>${[t('每次保存都再弹出成功确认','Show an acknowledgement popup after every save'),t('堆叠多层弹窗或加入复杂流程','Stack popups or place complex workflows inside them'),t('误触即丢失输入，或指令发出就提示成功','Discard input accidentally or report success before execution')].map(x=>`<li>${x}</li>`).join('')}</ul></article></div>

  </div>`;
}

function initModalExamples(root, language) {
  const t = (zh,en) => language === 'zh' ? zh : en;
  root.querySelectorAll('[data-modal-example]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const kind = Number(trigger.dataset.modalExample);
      const editing = kind === 0;
      const textActions = trigger.dataset.modalStyle === 'text';
      let busy = false;
      let timeout;
      let response;
      const dialog = document.createElement('dialog');
      dialog.className = 'mo-dialog';
      dialog.dataset.kind = ['form','confirm','notice','settings'][kind];
      dialog.dataset.actionStyle = textActions ? 'text' : 'button';
      dialog.dataset.buttonSize = 'large';
      dialog.setAttribute('aria-labelledby','mo-live-title');
      dialog.setAttribute('aria-describedby','mo-live-description');
      const title = [t('重命名设备','Rename device'),t('删除预约','Delete schedule'),t('设备连接已中断','Device disconnected'),t('设备设置','Device settings')][kind];
      const description = [t('为设备设置一个容易识别的名称。','Give your device a recognizable name.'),t('将删除明天 07:30 的洗涤预约，删除后无法恢复。','This removes tomorrow’s 07:30 wash schedule. This cannot be undone.'),t('设置未同步，请检查网络后重试。','Settings not synced. Check your network and try again.'),t('保存后，新的设置将在设备上生效。','Your new settings will take effect on the device once saved.')][kind];
      const initialName = t('客厅空调','Living room AC');
      dialog.innerHTML = `<div class="mo-dialog-layout"><header class="mo-dialog-head"><h2 id="mo-live-title">${title}</h2><button type="button" class="mo-close" aria-label="${t('关闭','Close')}" data-dismiss><img src="assets/icons/general/Cancel.svg" alt=""></button></header><div class="mo-dialog-body"><p id="mo-live-description">${description}</p>${editing ? `<label for="mo-device-name">${t('设备名称','Device name')}</label><div class="mo-input-wrap"><input class="mo-input" id="mo-device-name" value="${initialName}" maxlength="30" aria-describedby="mo-field-error"><button type="button" class="mo-input-clear" data-clear-name aria-label="${t('清除输入','Clear input')}">×</button></div><p class="mo-error" id="mo-field-error" role="alert"></p>` : ''}${editing ? '<p class="mo-progress" role="status" aria-live="polite"></p>' : ''}<div class="mo-discard" hidden><p>${t('名称尚未保存，要放弃修改吗？','Your name has not been saved. Discard changes?')}</p><div class="mo-discard-actions"><button type="button" class="mo-btn" data-keep>${t('继续编辑','Keep editing')}</button><button type="button" class="mo-btn" data-discard>${t('放弃修改','Discard changes')}</button></div></div></div><footer class="mo-dialog-foot${textActions ? ' mo-text-actions' : ''}">${kind !== 2 ? `<button type="button" class="mo-btn" data-dismiss data-cancel>${t('取消','Cancel')}</button>${textActions ? '<i class="mo-action-divider" aria-hidden="true"></i>' : ''}` : ''}<button type="button" class="mo-btn ${kind === 1 ? 'mo-btn-danger' : 'mo-btn-primary'}" data-confirm>${[t('保存','Save'),t('删除预约','Delete schedule'),t('知道了','Got it'),t('保存','Save')][kind]}</button></footer></div>`;
      root.append(dialog);
      const input = dialog.querySelector('input');
      const progress = dialog.querySelector('.mo-progress');
      const discard = dialog.querySelector('.mo-discard');
      const confirm = dialog.querySelector('[data-confirm]');
      const close = () => dialog.close();
      const requestClose = () => {
        if (busy) return;
        if (editing && input.value !== initialName) {
          discard.hidden = false;
          dialog.querySelector('[data-keep]').focus();
        } else close();
      };
      dialog.querySelectorAll('[data-dismiss]').forEach(button => button.addEventListener('click',requestClose));
      dialog.addEventListener('cancel',event => { event.preventDefault(); requestClose(); });
      dialog.addEventListener('click',event => {
        if (kind !== 2 || event.target !== dialog) return;
        const bounds = dialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) requestClose();
      });
      dialog.querySelector('[data-keep]').addEventListener('click',() => { discard.hidden = true; input.focus(); });
      dialog.querySelector('[data-discard]').addEventListener('click',close);
      if (input) {
        const clear = dialog.querySelector('[data-clear-name]');
        input.addEventListener('input',() => {
          input.removeAttribute('aria-invalid');
          dialog.querySelector('.mo-error').textContent = '';
          discard.hidden = true;
          clear.hidden = !input.value;
        });
        clear.addEventListener('click',() => {
          input.value = '';
          input.dispatchEvent(new Event('input'));
          input.focus();
        });
      }
      confirm.addEventListener('click',() => {
        if (busy) return;
        if (!editing) {
          close();
          return;
        }
        if (!input.value.trim()) {
          input.setAttribute('aria-invalid','true');
          dialog.querySelector('.mo-error').textContent = t('请输入设备名称。','Enter a device name.');
          input.focus();
          return;
        }
        busy = true;
        confirm.style.width = `${confirm.getBoundingClientRect().width}px`;
        confirm.setAttribute('aria-busy','true');
        discard.hidden = true;
        input.disabled = true;
        dialog.querySelectorAll('button').forEach(button => { button.disabled = true; });
        confirm.textContent = t('保存中','Saving');
        progress.textContent = t('正在保存，请稍候。','Saving. Please wait.');
        const restore = () => {
          busy = false;
          input.disabled = false;
          dialog.querySelectorAll('button').forEach(button => { button.disabled = false; });
          confirm.removeAttribute('aria-busy');
          confirm.style.width = '';
          confirm.textContent = t('重试保存','Retry save');
        };
        timeout = setTimeout(() => {
          clearTimeout(response);
          restore();
          progress.textContent = t('保存超时，内容已保留，请重试。','Save timed out. Your input is preserved; please retry.');
        },8000);
        response = setTimeout(() => {
          clearTimeout(timeout);
          close();
        },1000);
      });
      dialog.addEventListener('close',() => {
        clearTimeout(timeout);
        clearTimeout(response);
        dialog.remove();
        trigger.focus();
      },{once:true});
      dialog.showModal();
      (input || dialog.querySelector('[data-cancel]') || confirm).focus();
    });
  });
}
