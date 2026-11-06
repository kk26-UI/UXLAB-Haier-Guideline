function renderProgressGuideline(language) {
  const t = (zh, en) => language === 'zh' ? zh : en;
  const section = (id, title, intro, body) => `<section id="progress-${id}" class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2">${title}</h2>${intro ? `<p class="pg-intro">${intro}</p>` : ''}${body}</section>`;
  const table = (heads, rows) => `<div class="pg-table-wrap"><table class="pg-table"><thead><tr>${heads.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map((x, i) => i ? `<td>${x}</td>` : `<th scope="row">${x}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const rules = rows => `<div class="pg-rules">${rows.map(([title, text]) => `<div><h3>${title}</h3><p>${text}</p></div>`).join('')}</div>`;
  const line = (value, label, {state = '', text = `${value}%`, thickness = 6, mini = false, indeterminate = false} = {}) => `<div class="pg-line ${state ? `pg-${state}` : ''} ${mini ? 'pg-mini' : ''} ${indeterminate ? 'pg-indeterminate' : ''}" role="progressbar" aria-label="${label}" aria-valuemin="0" aria-valuemax="100" ${indeterminate ? `aria-valuetext="${t('正在处理中，进度未知', 'Processing; progress unknown')}"` : `aria-valuenow="${value}"`} style="--pg-value:${value}%;--pg-thickness:${thickness}px"><div class="pg-track"><span class="pg-fill"></span></div>${text ? `<span class="pg-value" aria-hidden="true">${text}</span>` : ''}</div>`;
  const ring = (value, label, {state = '', mini = false, text = `${value}%`} = {}) => `<div class="pg-ring ${state ? `pg-${state}` : ''} ${mini ? 'pg-mini-ring' : ''}" role="progressbar" aria-label="${label}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}" style="--pg-offset:${100 - value}"><svg viewBox="0 0 96 96" aria-hidden="true"><circle class="pg-ring-track" cx="48" cy="48" r="${mini ? 44 : 45}"/><circle class="pg-ring-fill" cx="48" cy="48" r="${mini ? 44 : 45}" pathLength="100"/></svg>${mini ? '' : `<span class="pg-ring-value" aria-hidden="true">${text}</span>`}</div>`;
  const states = [
    [t('进行中', 'In progress'), line(40, t('上传进度', 'Upload progress'))],
    [t('已完成', 'Complete'), line(100, t('上传已完成', 'Upload complete'), {state:'success'})],
    [t('加载中', 'Loading'), line(0, t('正在连接设备', 'Connecting to device'), {indeterminate:true, text:''})],
    [t('已暂停', 'Paused'), line(40, t('上传已暂停，40%', 'Upload paused at 40%'), {state:'paused'})],
    [t('异常提醒', 'Warning'), line(70, t('网络较慢，上传70%', 'Slow network, upload at 70%'), {state:'warning'})],
    [t('任务失败', 'Failed'), line(40, t('上传失败，停留在40%', 'Upload failed at 40%'), {state:'error'})]
  ];
  return `<div class="progress-doc" lang="${language === 'zh' ? 'zh-CN' : 'en'}">
    <header class="mb-8"><h1 class="text-4xl md:text-5xl font-bold mb-5">${t('进度条', 'Progress')}</h1><p class="text-lg text-gray-600 leading-8 max-w-3xl">${t('给予用户当前系统执行中任务运行状态的反馈，多用于运行一段时间的场景，有效减轻用户在等待中产生的焦虑感。', 'Provide feedback on the status of a task currently running in the system. Typically used for tasks that take some time, progress indicators help reduce anxiety while users wait.')}</p></header>
    ${section('usage', t('何时使用','When to use'), t('用于需要持续反馈的任务。先判断任务是否可量化，再选择反馈形式。','Use for tasks that need ongoing feedback. Choose a feedback pattern based on whether progress can be measured.'), '')}
    ${section('anatomy',t('组件构成','Anatomy'),t('以总进度轨道、当前进度与进度描述构成基本表达，任务名称和操作按需补充。','The track, fill, and description form the core. Add a task name and actions when needed.'),`<div class="pg-anatomy"><div class="pg-example">${line(40,t('固件下载进度','Firmware download progress'))}</div><div class="pg-parts">${[
      t('总进度轨道','Track'),
      t('当前进度','Fill'),
      t('进度描述','Description')
    ].map((title,i)=>`<div class="pg-part"><span class="pg-part-number" aria-hidden="true">${i+1}</span><h3>${title}</h3></div>`).join('')}</div></div>`)}
    ${section('types',t('组件类型','Types'),t('默认选择线形；单项任务需要集中展示时使用环形，紧凑列表中使用微型。相同页面保持类型一致。','Use a line by default, a circle for focused single-task feedback, and mini indicators in compact lists. Keep comparable tasks consistent.'),`<div class="pg-grid pg-grid-three"><article class="pg-type"><h3>${t('线形进度条','Line')}</h3><div class="pg-example">${line(40,t('资源包下载进度','Resource download progress'))}</div><p>${t('适合常规任务，便于比较多个进度。','For standard tasks and comparing progress.')}</p></article><article class="pg-type"><h3>${t('环形进度条','Circle')}</h3><div class="pg-example">${ring(65,t('安装进度','Installation progress'))}</div><p>${t('适合单个重点任务，读数居中。','For one prominent task, with a centered value.')}</p></article><article class="pg-type"><h3>${t('微型进度条','Mini')}</h3><div class="pg-example"><div class="pg-mini-row"><span class="pg-mini-group">${ring(40,t('微型环形进度','Mini circle progress'),{mini:true})}<span>40%</span></span></div><div class="pg-mini-row">${line(70,t('微型线形进度','Mini line progress'),{mini:true,thickness:2,text:''})}<span>70%</span></div></div><p>${t('适合紧凑列表，读数相邻展示。','For compact lists, with a nearby value.')}</p></article></div>`)}
    ${section('states',t('组件状态','States'),t('通过颜色与文案区分任务状态。','Distinguish task states with color and text.'),`<div class="pg-grid">${states.map(([title,example])=>`<article class="pg-example"><h3>${title}</h3>${example}</article>`).join('')}</div>`)}
    ${section('sizes',t('组件规格','Component specifications'),t('以下为本规范建议规格，硬件需按实际观看距离校准。','These are recommended specifications. Calibrate hardware for the actual viewing distance.'),table([t('规格','Size'),t('线形高度','Line height'),t('环形外径 / 线宽','Circle diameter / stroke'),t('读数字号','Value text'),t('适用场景','Use')],[
      [t('小号','Small'),'4 px','64 / 4 px','12 px',t('列表行、空间受限区域','List rows, limited space')],
      [t('常规','Regular'),'6 px','96 / 6 px',t('线形 14 px / 环形 20 px','Line 14 px / circle 20 px'),t('常规任务与内容区','Standard tasks and content areas')],
      [t('大号','Large'),'8 px','128 / 8 px',t('线形 16 px / 环形 24 px','Line 16 px / circle 24 px'),t('独立任务、重点反馈','Dedicated tasks, prominent feedback')]
    ]))}
    ${section('demo',t('交互示例','Interactive example'),t('可预览进行、暂停、失败、重试和完成状态。示例不执行真实上传。','Preview running, paused, failed, retry, and complete states. No real upload is performed.'),`<div class="pg-demo" data-progress-demo><div class="pg-demo-visual"><div><div class="pg-meta"><span>${t('上传文件','Upload file')}</span></div><div data-progress-line>${line(40,t('文件上传进度','File upload progress'))}</div><p class="pg-caption" role="status" aria-live="polite" data-progress-detail>${t('准备就绪，可以开始模拟上传。','Ready to simulate an upload.')}</p></div><div data-progress-ring>${ring(40,t('文件上传进度（环形）','File upload progress (circle)'))}</div></div><div class="pg-demo-controls"><button type="button" class="pg-btn pg-btn-primary" data-progress-action="start">${t('开始','Start')}</button><button type="button" class="pg-btn" data-progress-action="fail">${t('失败','Fail')}</button><button type="button" class="pg-btn" data-progress-action="reset">${t('重置','Reset')}</button></div></div>`)}
    ${section('behavior',t('交互与文案','Behavior & content'),t('让反馈随任务真实变化。进度提供信息，旁侧操作负责控制任务。','Keep feedback tied to the task. Progress communicates status; adjacent actions control the task.'),rules([
      [t('真实反馈','Measured feedback'),t('确定进度按实际完成量更新，不用定时器伪造百分比。任务重新开始或总量变化时，明确说明进度重置的原因。','Update determinate progress from measured work, never from a fabricated timer. Explain resets caused by a restarted task or changed total.')],
      [t('动效节奏','Motion'),t('进度平滑过渡，加载循环舒缓连贯；暂停、失败或完成时停止动效。','Keep progress smooth and loading loops calm and continuous. Stop motion when paused, failed, or complete.')],
      [t('等待与异常','Waiting & errors'),t('长时间未更新时补充当前阶段及原因；超时后说明处理方式，避免无限加载。不要把耗时较长直接当作失败。','Explain the current stage and reason when updates stall. Provide a recovery path after a timeout, avoiding indefinite loading. A long wait alone does not mean failure.')],
      [t('操作能力','Task actions'),t('仅当任务支持时提供暂停、继续、取消或重试；失败重试沿用业务实际支持的续传或重启方式。设备安装等不可中断阶段不提供取消入口，并明确提示。','Offer Pause, Resume, Cancel, or Retry only when supported. Retry must follow actual resume or restart behavior. Explain stages that cannot be interrupted, such as device installation.')],
      [t('扩展形式','Extended patterns'),t('等量子任务可按需使用分段进度；具有名称、顺序和操作的流程使用步骤条。缓冲区仅用于确有缓冲数据的场景，并与已完成量区分，不作为默认装饰。','Segmented progress may represent equal units. Use Steps for named stages with ordering and actions. Show a buffer only when actual buffered data exists, clearly distinct from completed work.')]
    ]))}
    <div class="pg-pair mb-8"><article><h2 class="text-xl font-bold">${t('推荐','Do')}</h2><ul>${[t('将进度放在对应任务附近，提供明确的任务名称。','Keep progress close to its named task.'),t('比较多个任务时统一总量口径、尺寸与对齐方式。','Use consistent totals, sizes, and alignment when comparing tasks.'),t('失败保留上下文，给出原因和可用的下一步。','Keep context after failure and provide a reason and next step.')].map(x=>`<li>${x}</li>`).join('')}</ul></article><article><h2 class="text-xl font-bold">${t('避免',"Don't")}</h2><ul>${[t('在无法量化时显示虚构百分比，或一直停留在 99%。','Fabricating percentages or remaining at 99% indefinitely.'),t('用闪烁、复杂渐变或多个循环动画争抢注意。','Competing for attention with flashing, complex gradients, or multiple loops.'),t('把进度条当作可拖动控件，或只靠颜色表示失败。','Making progress draggable or using color alone for failures.')].map(x=>`<li>${x}</li>`).join('')}</ul></article></div>

  </div>`;
}

function initProgressExamples(root, language) {
  const demo = root.querySelector('[data-progress-demo]');
  if (!demo) return;
  const t = (zh, en) => language === 'zh' ? zh : en;
  const line = demo.querySelector('[data-progress-line] .pg-line');
  const ring = demo.querySelector('[data-progress-ring] .pg-ring');
  const detail = demo.querySelector('[data-progress-detail]');
  const start = demo.querySelector('[data-progress-action="start"]');
  const fail = demo.querySelector('[data-progress-action="fail"]');
  let value = 40;
  let state = 'ready';
  let timer = null;
  const stop = () => { window.cancelAnimationFrame(timer); timer = null; };
  const update = () => {
    const percentage = Math.floor(value);
    const visualState = {paused:'paused', error:'error', success:'success'}[state];
    [line, ring].forEach(el => {
      el.classList.remove('pg-paused', 'pg-error', 'pg-success');
      if (visualState) el.classList.add(`pg-${visualState}`);
      el.setAttribute('aria-valuenow', Number(value.toFixed(2)));
    });
    line.style.setProperty('--pg-value', `${value}%`);
    ring.style.setProperty('--pg-offset', 100 - value);
    line.querySelector('.pg-value').textContent = state === 'success' ? '✓' : `${state === 'error' ? '× ' : ''}${percentage}%`;
    ring.querySelector('.pg-ring-value').textContent = state === 'success' ? '✓' : state === 'error' ? '×' : `${percentage}%`;
    const label = {ready:t('准备就绪','Ready'), running:t('正在上传','Uploading'), paused:t('已暂停','Paused'), error:t('上传失败','Upload failed'), success:t('上传完成','Upload complete')}[state];
    [line, ring].forEach(el => el.setAttribute('aria-valuetext', `${label} · ${percentage}%`));
    const detailText = {ready:t('准备就绪，可以开始模拟上传。','Ready to simulate an upload.'), running:t('正在上传，请保持网络连接。','Uploading. Keep the network connected.'), paused:t('上传已暂停，可以从当前进度继续。','Upload paused. Resume from the current progress.'), error:t('网络连接中断，请检查网络后重试。','Connection interrupted. Check the network and retry.'), success:t('文件已上传完成。','File upload complete.')}[state];
    if (detail.textContent !== detailText) detail.textContent = detailText;
    start.textContent = state === 'running' ? t('暂停','Pause') : state === 'error' ? t('重试','Retry') : state === 'paused' ? t('继续','Resume') : t('开始','Start');
    start.disabled = state === 'success';
    fail.disabled = state === 'error' || state === 'success';
  };
  start.addEventListener('click', () => {
    stop();
    if (state === 'running') { state = 'paused'; update(); return; }
    state = 'running';
    update();
    let previousTime = null;
    const advance = timestamp => {
      const elapsed = previousTime === null ? 0 : Math.min(timestamp - previousTime, 64);
      previousTime = timestamp;
      value = Math.min(100, value + elapsed / 100);
      if (value === 100) { stop(); state = 'success'; }
      update();
      if (state === 'running') timer = window.requestAnimationFrame(advance);
    };
    timer = window.requestAnimationFrame(advance);
  });
  fail.addEventListener('click', () => { stop(); state = 'error'; update(); });
  demo.querySelector('[data-progress-action="reset"]').addEventListener('click', () => { stop(); value = 40; state = 'ready'; update(); });
  window.addEventListener('pagehide', stop, {once:true});
  update();
}
