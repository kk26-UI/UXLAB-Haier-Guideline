(() => {
  const root = document.getElementById('ai-page');
  if (!root) return;
  const file = window.location.pathname.split('/').pop();
  const bullets = items => items.map(item => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-[#2283E2]"></span><span>${item}</span></li>`).join('');
  const checks = (items, good) => items.map(item => `<li class="flex gap-3 text-sm text-gray-600 leading-6"><span class="${good ? 'text-emerald-500' : 'text-red-400'} font-bold">${good ? '✓' : '×'}</span><span>${item}</span></li>`).join('');

  function visualPage() {
    const placementRows = [
      ['独立显示', '核心状态栏、顶部 / 底部 Bar、主屏首页', '完整呈现 AI 专属标识及对应文字'],
      ['角标显示', '具体 AI 场景的功能入口', '置于功能图标右下角，保持标识结构完整'],
      ['结合图标显示', '未形成 AI 场景的智慧功能', '沿用原功能图标，以“AI + 功能名称”命名']
    ];
    return `<section class="mb-12"><h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">AI 视觉标准</h1><p class="text-lg text-gray-500 max-w-4xl leading-relaxed">依据产品是否形成完整 AI 场景，选择 AI 专属标识或智慧功能图标。视觉表达必须与真实能力等级一致，不将 AI 专属标识作为通用装饰。</p></section>
    <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2">何时使用</h2><p class="text-sm text-gray-600 leading-6 max-w-4xl">先按《AI 使用标准》完成产品能力与场景判定。具备主动视觉感知或完整 AI 场景的高阶 AI，可使用 AI 专属标识；仅具备智能辅助、自适应判断或固定程序调节能力时，使用智慧功能图标和“AI + 功能名称”。</p></section>
    <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-7">视觉类型与适用场景</h2><div class="grid md:grid-cols-2 gap-4">
      <article class="rounded-2xl border border-gray-200 bg-white/60 p-6"><span class="text-xs font-bold text-[#2283E2]">01</span><h3 class="text-xl font-bold mt-3 mb-2">AI 专属标识</h3><p class="text-sm text-gray-500 leading-6 mb-5">用于高阶 AI 与明确的 AI 场景。产品需具备主动感知、自主思考、自主决策及持续进化能力。</p><div class="border border-gray-200 bg-white min-h-40 flex items-center justify-center p-6"><div class="text-center"><img src="assets/ai/ai-exclusive-mark.png" alt="AI 专属标识" width="240" height="145" class="mx-auto mb-3 block w-full max-w-[180px] h-auto"><p class="text-xs text-gray-400">AI 专属标识示意</p></div></div></article>
      <article class="rounded-2xl border border-gray-200 bg-white/60 p-6"><span class="text-xs font-bold text-[#2283E2]">02</span><h3 class="text-xl font-bold mt-3 mb-2">智慧功能图标</h3><p class="text-sm text-gray-500 leading-6 mb-5">用于辅助 AI 或尚未形成 AI 场景的智慧功能。保留原功能图标，通过文字说明 AI 能力。</p><div class="border border-gray-200 bg-white min-h-40 flex items-center justify-center"><div class="text-center"><div class="mx-auto mb-3 w-20 h-20 rounded-2xl border border-gray-200 bg-gray-50 grid place-items-center text-gray-500 font-semibold">功能</div><p class="text-sm font-semibold">AI + 功能名称</p></div></div></article>
    </div></section>
    <section class="glass-panel p-6 md:p-10 mb-12"><h2 class="text-2xl font-bold mb-3">展示形式</h2><p class="text-sm text-gray-500 leading-7 mb-8 max-w-4xl">根据触点层级选择展示形式。核心 AI 状态优先独立展示，具体功能入口使用角标，一般智慧功能只在名称中说明 AI。</p><div class="overflow-x-auto"><table class="w-full min-w-[720px] text-sm"><thead><tr class="border-b text-left text-gray-500"><th class="py-3">形式</th><th>适用位置</th><th>规则</th></tr></thead><tbody>${placementRows.map((r,i)=>`<tr class="${i<2?'border-b':''}"><td class="py-4 font-semibold">${r[0]}</td><td>${r[1]}</td><td class="text-gray-500">${r[2]}</td></tr>`).join('')}</tbody></table></div></section>
    <section class="glass-panel p-6 md:p-10 mb-12"><h2 class="text-2xl font-bold mb-6">结构与使用规则</h2><ul class="space-y-4 max-w-4xl">${bullets(['任何场景下均不得改变 AI 专属标识的结构、轮廓、比例或组合关系。','AI 专属标识须保持足够留白，不与功能图标、文字、状态标记发生遮挡或拼接。','在 Casarte、Haier、Leader 不同品牌中使用对应的正式标识资产，不自行改色或重绘。','彩色智慧功能图标内禁止使用“AI”文字、字母变形或仿造的 AI 图形。','标识仅表达已审核通过的 AI 能力；功能下线或能力降级时同步移除标识。'])}</ul></section>
    <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2">审核节点</h2><p class="text-sm text-gray-500 mb-6">标识资产进入设计稿和开发实现前，按能力类型完成审核。</p><div class="overflow-x-auto"><table class="w-full min-w-[660px] text-sm"><thead><tr class="border-b text-left text-gray-500"><th class="py-3">视觉类型</th><th>审核方</th><th>提交内容</th></tr></thead><tbody><tr class="border-b"><td class="py-4 font-semibold">AI 专属标识</td><td>智慧场景负责人、UX Lab · YOON BYUNGUN</td><td class="text-gray-500">场景定义、能力证明、应用位置与效果稿</td></tr><tr><td class="py-4 font-semibold">智慧功能图标</td><td>UX Lab · YOON BYUNGUN</td><td class="text-gray-500">功能定义、命名与图标应用效果稿</td></tr></tbody></table></div></section>
    <section class="grid md:grid-cols-2 gap-8 mb-8"><article class="bg-emerald-50/80 border border-emerald-100 rounded-3xl p-6 md:p-8"><h2 class="text-xl font-bold text-emerald-800 mb-5">推荐</h2><ul class="space-y-3">${checks(['先判定能力等级，再选择标识类型','按信息层级选择独立、角标或文字形式','使用审核通过的正式品牌资产'],true)}</ul></article><article class="bg-red-50/80 border border-red-100 rounded-3xl p-6 md:p-8"><h2 class="text-xl font-bold text-red-800 mb-5">避免</h2><ul class="space-y-3">${checks(['把 AI 专属标识用于一般程序功能','变形、重组或仿造 AI 专属标识','在彩色功能图标内部加入 AI 字样'],false)}</ul></article></section>`;
  }

  function usagePage() {
    const scenes = [
      ['AI 之眼','看懂环境并主动执行','结合摄像头图像识别、感知技术与 AI 算法，实时理解场景与对象，自主决策并执行适配方案。','AI 食材管家、看着洗、懒人送风、AI 防溢锅'],
      ['AI 语音','理解上下文并连续对话','结合 NLP、语音识别与语义理解，实现连续对话、上下文理解、自然语言控制、查询与个性化服务。','语音食材管理、语音洗衣、语音智控'],
      ['AI 健康','分析多维数据并主动管理','采集环境、食材、人体、水质等数据，实现自主分析、智能调节、主动预警与个性化健康建议。','AI 净化、AI 健康家、AI 舒适家'],
      ['AI 节能','持续优化能效','结合 AI 算法、多传感器与边缘 / 云端计算，学习用户习惯并联动场景，实现自适应低能耗运行。','智慧节能、AI 零冷水、AI 节能管家'],
      ['AI 降噪','感知识别并主动降噪','实时感知并识别设备及环境噪声，动态调控运行状态，实现主动、智能、场景化降噪。','AI 直驱降噪'],
      ['AI 快净','学习负载并优化洗涤','感知衣物重量、面料、负载与运行状态，动态优化运动轨迹、转速与摔打力度。','AI 快净、自适应工况、程序持续优化']
    ];
    return `<section class="mb-12"><h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">AI 使用标准</h1><p class="text-lg text-gray-500 max-w-4xl leading-relaxed">用于产品立项、能力评估、场景命名与上线验收。AI 命名必须以可验证的感知、决策和体验提升为依据，不以单一算法或营销措辞替代能力证明。</p></section>
    <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-2">AI 产品定义</h2><p class="text-sm text-gray-600 leading-7 max-w-4xl mb-4">AI 产品是具备自主感知、自主思考、自主决策与持续进化能力的新一代智能家电，能够直接提升产品核心性能（效率、精度、稳定性等）或用户体验（交互便捷性、个性化、场景适配性等）。</p><p class="text-sm text-gray-500 leading-6 max-w-4xl">技术基础应调用大模型或垂域模型，实现多模态智能交互，或端云实时 AI 推理、数据反馈与模型迭代。</p></section>
    <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-7">能力门槛</h2><div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">${[
      ['数据感知','采集环境参数、设备状态、用户行为和对象信息等多维数据。'],['自然交互','支持多模态交互，能够识别模糊语义与场景化指令。'],['自主决策','基于模型学习用户习惯，自动适配更优运行模式。'],['智能运维','支持故障诊断、异常预警、自适应调节与持续迭代。']
    ].map((x,i)=>`<article class="rounded-2xl border border-gray-200 bg-white/60 p-5"><span class="text-xs font-bold text-[#2283E2]">0${i+1}</span><h3 class="font-bold mt-3 mb-2">${x[0]}</h3><p class="text-sm text-gray-500 leading-6">${x[1]}</p></article>`).join('')}</div></section>
    <section class="glass-panel p-6 md:p-10 mb-12"><h2 class="text-2xl font-bold mb-3">AI 场景分类</h2><p class="text-sm text-gray-500 leading-7 mb-8 max-w-4xl">具体功能应说明感知来源、模型或算法、决策动作及用户价值，并归入以下六类场景之一。</p><div>${scenes.map((s,i)=>`<article class="${i===0?'pb-6':'py-6'} ${i<5?'border-b border-gray-200':''}"><div class="grid grid-cols-[32px_minmax(0,1fr)] gap-4"><span class="text-sm font-semibold text-[#2283E2] leading-6">0${i+1}</span><div class="max-w-4xl"><h3 class="text-base font-semibold text-gray-900 leading-6 mb-4">${s[0]}<span class="text-gray-700"> · ${s[1]}</span></h3><p class="text-sm text-gray-600 leading-6">${s[2]}</p><p class="text-sm text-gray-500 leading-6 mt-2">典型场景：${s[3]}</p></div></div></article>`).join('')}</div></section>
    <section class="glass-panel p-6 md:p-10 mb-12"><h2 class="text-2xl font-bold mb-6">命名与标识决策</h2><ol class="space-y-5 max-w-4xl">${[
      ['是否产生可验证的体验提升？','验证核心性能或交互、个性化、场景适配是否真实提升。'],['是否满足 AI 能力门槛？','证明感知、交互、决策、进化或运维能力链路，而非只展示算法。'],['是否属于明确的 AI 场景？','归入六类场景，并说明数据、模型、决策与用户价值。'],['否则按智慧功能表达','使用原功能图标与“AI + 功能名称”，不得使用或仿造 AI 专属标识。']
    ].map((x,i)=>`<li class="flex gap-4"><span class="w-8 h-8 shrink-0 rounded-full bg-blue-50 text-[#2283E2] grid place-items-center text-xs font-bold">${i+1}</span><div><h3 class="text-sm font-normal leading-6 mb-1">${x[0]}</h3><p class="text-sm text-gray-500 leading-6">${x[1]}</p></div></li>`).join('')}</ol></section>
    <section class="glass-panel p-6 md:p-10 mb-8"><h2 class="text-2xl font-bold mb-6">上线验收</h2><ul class="space-y-4 max-w-4xl">${bullets(['场景名称与实际能力一致，不夸大自主性、智能程度或持续进化能力。','能够明确说明数据来源、模型或算法、决策动作和用户价值。','AI 状态可被用户理解，并提供必要的反馈、控制与退出路径。','视觉标识与产品能力等级、屏幕位置和功能层级相匹配。','已完成智慧场景负责人及 UX Lab 对应审核。'])}</ul></section>
    <section class="grid md:grid-cols-2 gap-8 mb-8"><article class="bg-emerald-50/80 border border-emerald-100 rounded-3xl p-6 md:p-8"><h2 class="text-xl font-bold text-emerald-800 mb-5">推荐</h2><ul class="space-y-3">${checks(['用可验证的体验提升定义 AI 价值','同时说明感知、模型、决策和结果','能力变化时同步更新命名与标识'],true)}</ul></article><article class="bg-red-50/80 border border-red-100 rounded-3xl p-6 md:p-8"><h2 class="text-xl font-bold text-red-800 mb-5">避免</h2><ul class="space-y-3">${checks(['仅因使用算法就命名为 AI 场景','用 AI 包装固定程序或普通自动化','省略用户控制、反馈与退出机制'],false)}</ul></article></section>`;
  }

  root.innerHTML = file === 'ai_usage.html' ? usagePage() : visualPage();
})();
