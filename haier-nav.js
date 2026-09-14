const HAIER_NAV_GROUPS = [
  {
    id: 'principles',
    label: '1. 原则 Principles',
    items: [
      { label: '1.1 品牌', href: 'brand.html', page: 'brand.html', id: 'principles-brand' },
      { label: '1.2 设计体验原则', href: 'design_principles.html', page: 'design_principles.html', id: 'principles-ux' },
    ],
  },
  {
    id: 'foundations',
    label: '2. 基础 Foundations',
    items: [
      { label: '2.1 视觉基础', id: 'foundations-visual', page: 'foundations.html', disabled: true },
      { label: '2.1.1 色彩', href: 'color_details.html', page: 'color_details.html', child: true },
      { label: '2.1.2 字体', href: 'typography_details.html', page: 'typography_details.html', child: true },
      { label: '2.1.3 图标', href: 'iconography_details.html', page: 'iconography_details.html', child: true },
      { label: '2.1.4 材质', href: 'materials_lighting_details.html', page: 'materials_lighting_details.html', child: true },
      { label: '2.2 布局基础', id: 'foundations-layout', page: 'foundations.html', disabled: true },
      { label: '2.2.1 信息架构', href: 'spatial_depth_details.html', page: 'spatial_depth_details.html', child: true },
      { label: '2.2.2 核心要素', href: 'hero_element_details.html', page: 'hero_element_details.html', child: true },
      { label: '2.2.3 排版', href: 'spacing_layout_details.html', page: 'spacing_layout_details.html', child: true },
      { label: '2.2.4 栅格', href: 'grid_system_details.html', page: 'grid_system_details.html', child: true },
    ],
  },
  {
    id: 'components',
    label: '3. 组件 Components',
    items: [
      { label: '3.1 操作类', id: 'components-action', disabled: true },
      { label: '按钮', href: 'component_buttons.html', page: 'component_buttons.html', child: true },
      { label: '开关', href: 'component_switch.html', page: 'component_switch.html', child: true },
      { label: '3.2 选择类', id: 'components-selection', disabled: true },
      { label: '单选框', href: 'component_radio_button.html', page: 'component_radio_button.html', child: true },
      { label: '复选框', href: 'component_checkbox.html', page: 'component_checkbox.html', child: true },
      { label: '选择器', href: 'component_wheel_picker.html', page: 'component_wheel_picker.html', child: true },
      { label: '3.3 输入类', id: 'components-input', disabled: true },
      { label: '文本框', href: 'component_text_field.html', page: 'component_text_field.html', child: true },
      { label: '调控', href: 'component_slider.html', page: 'component_slider.html', child: true },
      { label: '键盘', href: 'component_keyboard.html', page: 'component_keyboard.html', child: true },
      { label: '3.4 导航类', id: 'components-nav', disabled: true },
      { label: '应用栏', href: 'component_app_bar.html', page: 'component_app_bar.html', child: true },
      { label: '导航', href: 'component_navigation.html', page: 'component_navigation.html', child: true },
      { label: '标签页', href: 'component_tabs.html', page: 'component_tabs.html', child: true },
      { label: '面包屑', href: 'component_breadcrumbs.html', page: 'component_breadcrumbs.html', child: true },
      { label: '分页', href: 'component_pagination.html', page: 'component_pagination.html', child: true },
      { label: '步骤条', href: 'component_stepper.html', page: 'component_stepper.html', child: true },
      { label: '3.5 数据展示', id: 'components-data', disabled: true },
      { label: '卡片', href: 'component_card.html', page: 'component_card.html', child: true },
      { label: '列表', href: 'component_list_tile.html', page: 'component_list_tile.html', child: true },
      { label: '头像', href: 'component_avatar.html', page: 'component_avatar.html', child: true },
      { label: '分割线', href: 'component_divider.html', page: 'component_divider.html', child: true },
      { label: '徽标', href: 'component_badge.html', page: 'component_badge.html', child: true },
      { label: '3.6 反馈与浮层', id: 'components-feedback', disabled: true },
      { label: '对话框', href: 'component_dialog_modal.html', page: 'component_dialog_modal.html', child: true },
      { label: '抽屉', href: 'component_bottom_sheet.html', page: 'component_bottom_sheet.html', child: true },
      { label: '消息提示', href: 'component_snackbar_toast.html', page: 'component_snackbar_toast.html', child: true },
      { label: '弹窗', href: 'component_tooltip.html', page: 'component_tooltip.html', child: true },
      { label: '进度条', href: 'component_progress_indicator.html', page: 'component_progress_indicator.html', child: true },
    ],
  },
  {
    id: 'hardware',
    label: '4. 硬件 Hardware',
    items: [
      { label: '4.1 TFT 屏幕', href: 'hardware_tft.html', page: 'hardware_tft.html', id: 'hw-tft' },
      { label: '4.2 LED 屏幕', href: 'hardware_led.html', page: 'hardware_led.html', id: 'hw-led' },
      { label: '4.3 其它屏幕形态', href: 'hardware_other.html', page: 'hardware_other.html', id: 'hw-other' },
    ],
  },
  {
    id: 'motion',
    label: '5. 动效 Motion',
    items: [
      { label: '5.1 背景动效', href: 'motion.html#motion-bg', id: 'motion-bg' },
      { label: '5.2 转场 Transitions', href: 'motion.html#motion-transitions', id: 'motion-transitions' },
      { label: '5.3 微交互', href: 'motion.html#motion-micro', id: 'motion-micro' },
    ],
  },
  {
    id: 'sensory',
    label: '多感官交互 Sensory',
    items: [
      { label: '灯光 Lighting', href: 'lighting.html', page: 'lighting.html', id: 'sensory-lighting' },
      { label: '触摸 Touch', href: 'touch.html', page: 'touch.html', id: 'sensory-touch' },
      { label: '音效 Audio', href: 'audio.html', page: 'audio.html', id: 'sensory-audio' },
    ],
  },
  {
    id: 'ai',
    label: '7. AI',
    items: [
      { label: '7.1 AI 视觉标准', href: 'ai.html#ai-visual', id: 'ai-visual' },
      { label: '7.2 AI 使用标准', href: 'ai.html#ai-usage', id: 'ai-usage' },
    ],
  },
  {
    id: 'assets',
    label: '8. 资产与推行 Assets',
    items: [
      { label: '8.1 强制规范标准', href: 'assets.html#assets-strict', id: 'assets-strict' },
      { label: '8.2 UT数据推导与沉淀', href: 'assets.html#assets-ut', id: 'assets-ut' },
      { label: '8.3 Figma资产授权', href: 'assets.html#assets-figma', id: 'assets-figma' },
      { label: '8.4 统一度验收机制', href: 'assets.html#assets-qa', id: 'assets-qa' },
    ],
  },
];

const HAIER_NAV_STANDALONE_ITEMS = [
  { label: '9. 更新日志 Log', href: 'changelog.html#changelog', id: 'changelog', standalone: true },
];

const HAIER_NAV_LABEL_EN = {
  '1. 原则 Principles': '1. Principles',
  '1.1 品牌': '1.1 Brand',
  '1.2 设计体验原则': '1.2 UX Principles',
  '1.2.1 品牌战略': '1.2.1 Brand Strategy',
  '1.2.2 品牌设计原则': '1.2.2 Brand Design Principles',
  '1.2.3 核心设计方向': '1.2.3 Core Design Directions',
  '2. 基础 Foundations': '2. Foundations',
  '2.1 视觉基础': '2.1 Visual Foundations',
  '2.1.1 色彩规范': '2.1.1 Color',
  '2.1.2 字体规范': '2.1.2 Typography',
  '2.1.3 图标规范': '2.1.3 Iconography',
  '2.1.4 材质': '2.1.4 Material',
  '2.2 布局基础': '2.2 Layout',
  '2.2.1 信息架构': '2.2.1 Information Architecture',
  '2.2.2 核心要素': '2.2.2 Hero Element',
  '2.2.3 排版': '2.2.3 Spacing & Layout',
  '2.2.4 栅格': '2.2.4 Grid System',
  '3. 组件 Components': '3. Components',
  '3.1 操作类': '3.1 Actions',
  '3.1.1 按钮': '3.1.1 Buttons',
  '3.1.2 开关': '3.1.2 Switch / Toggle',
  '3.2 选择类': '3.2 Selection',
  '3.2.1 单选框': '3.2.1 Radio Button',
  '3.2.2 复选框': '3.2.2 Checkbox',
  '3.2.3 选择器': '3.2.3 Wheel Picker',
  '3.3 输入类': '3.3 Inputs',
  '3.3.1 文本框': '3.3.1 Text Field',
  '3.3.2 调控': '3.3.2 Control',
  '3.3.3 键盘': '3.3.3 Keyboard',
  '3.4 导航类': '3.4 Navigation',
  '3.4.1 应用栏': '3.4.1 App Bar',
  '3.4.2 导航': '3.4.2 Navigation',
  '3.4.3 标签页': '3.4.3 Tabs',
  '3.4.4 面包屑': '3.4.4 Breadcrumbs',
  '3.4.5 分页': '3.4.5 Pagination',
  '3.4.6 步骤条': '3.4.6 Steps',
  '3.5 数据展示': '3.5 Data Display',
  '3.5.1 卡片': '3.5.1 Card',
  '3.5.2 列表': '3.5.2 List / List Tile',
  '3.5.3 头像': '3.5.3 Avatar',
  '3.5.4 分割线': '3.5.4 Divider',
  '3.5.5 徽标': '3.5.5 Badge',
  '3.6 反馈与浮层': '3.6 Feedback & Overlays',
  '3.6.1 对话框': '3.6.1 Dialog / Modal',
  '3.6.2 抽屉': '3.6.2 Bottom Sheet',
  '3.6.3 消息提示': '3.6.3 Snackbar / Toast',
  '3.6.4 弹窗': '3.6.4 Tooltip',
  '3.6.5 进度条': '3.6.5 Progress Indicator',
  '按钮': 'Buttons',
  '开关': 'Switch / Toggle',
  '单选框': 'Radio Button',
  '复选框': 'Checkbox',
  '选择器': 'Wheel Picker',
  '文本框': 'Text Field',
  '调控': 'Control',
  '键盘': 'Keyboard',
  '应用栏': 'App Bar',
  '导航': 'Navigation',
  '标签页': 'Tabs',
  '面包屑': 'Breadcrumbs',
  '分页': 'Pagination',
  '步骤条': 'Steps',
  '卡片': 'Card',
  '列表': 'List / List Tile',
  '头像': 'Avatar',
  '分割线': 'Divider',
  '徽标': 'Badge',
  '对话框': 'Dialog / Modal',
  '抽屉': 'Bottom Sheet',
  '消息提示': 'Snackbar / Toast',
  '弹窗': 'Tooltip',
  '进度条': 'Progress Indicator',
  '4. 硬件 Hardware': '4. Hardware',
  '4.1 TFT 屏幕': '4.1 TFT Screens',
  '4.2 LED 屏幕': '4.2 LED Screens',
  '4.3 其它屏幕形态': '4.3 Other Screens',
  '5. 动效 Motion': '5. Motion',
  '5.1 背景动效': '5.1 Background Motion',
  '5.2 转场 Transitions': '5.2 Transitions',
  '5.3 微交互': '5.3 Micro-interactions',
  '多感官交互 Sensory': 'Sensory Interaction',
  '灯光 Lighting': 'Lighting',
  '触摸 Touch': 'Touch',
  '音效 Audio': 'Audio',
  '7. AI': '7. AI',
  '7.1 AI 视觉标准': '7.1 AI Visual Standards',
  '7.2 AI 使用标准': '7.2 AI Usage Guidelines',
  '8. 资产与推行 Assets': '8. Assets & Governance',
  '8.1 强制规范标准': '8.1 Mandatory Standards',
  '8.2 UT数据推导与沉淀': '8.2 UT Data',
  '8.3 Figma资产授权': '8.3 Figma Assets',
  '8.4 统一度验收机制': '8.4 Consistency QA',
  '9. 更新日志 Log': '9. Changelog',
};

(function initHaierNavigation() {
  const sidebar = document.getElementById('sidebar');
  const mobileButton = document.getElementById('mobile-menu-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  const mainContent = document.getElementById('main-content') || document.querySelector('main');

  if (!sidebar) return;

  const currentPage = window.location.pathname.split('/').pop() || 'haier_os_design_system.html';
  const currentLanguage = localStorage.getItem('haier-guideline-language') || 'zh';
  const sensorySubpages = new Set(['lighting.html', 'touch.html', 'audio.html']);
  let scrollSpyPausedUntil = 0;
  const stripNavNumber = (label) => label.replace(/^\d+(?:\.\d+)*\.?\s*/, '').trim();
  const zhNavLabel = (label) => {
    const stripped = stripNavNumber(label);
    return /[\u4e00-\u9fff]/.test(stripped) ? stripped.replace(/\s+[A-Za-z&].*$/, '').trim() : stripped;
  };
  const navLabel = (label) => currentLanguage === 'zh'
    ? zhNavLabel(label)
    : stripNavNumber(HAIER_NAV_LABEL_EN[label] || label);
  const normalizeHref = (href) =>
    href.replace(
      /^haier_os_design_system\.html(?=#)/,
      currentPage === 'haier_os_design_system.html' ? '' : 'haier_os_design_system.html'
    );
  const currentHash = window.location.hash.replace('#', '');
  const currentGroup = HAIER_NAV_GROUPS.find((group) =>
    group.items.some((item) => item.page === currentPage || item.href?.startsWith(`${currentPage}#`) || item.id === currentHash)
  )?.id;
  const openGroups = new Set(currentGroup ? [currentGroup] : []);

  const FALLBACK_I18N_EN = {
    '返回主页': 'Home',
    '返回主规范': 'Home',
    '返回基础': 'Home',
    '基础': 'Foundations',
    '视觉基础': 'Visual Foundations',
    '布局基础': 'Layout Foundations',
    '图标规范': 'Iconography',
    '图标': 'Iconography',
    '材质': 'Material',
    '层级（空间深度）': 'Hierarchy',
    '信息架构': 'Information Architecture',
    '核心要素': 'Hero Element',
    '排版': 'Spacing & Layout',
    '栅格系统': 'Grid System',
    '设计体验原则': 'User Experience Principles',
    '品牌': 'Brand Identity',
    '色彩': 'Color',
    '字体': 'Typography',
    '组件': 'Components',
    '硬件': 'Hardware',
    '动效': 'Motion',
    '多感官': 'Sensory',
    '资产与推行': 'Assets & Governance',
    '更新日志': 'Changelog',
    '此部分作为 UI 设计争议的最高决策依据，帮助团队在复杂取舍中保持一致判断。': 'This section serves as the top-level decision basis for UI design tradeoffs, helping teams stay aligned in complex decisions.',
    '品牌体验用于统一跨设备、跨品类、跨触点的视觉表达和交互认知。在海尔庞大且多元的硬件生态中，数字界面是用户与我们进行对话的最前沿触点。品牌体验的核心目标不是堆叠视觉符号，而是在不同设备、场景和触点之间建立一致、清晰、可信赖的体验秩序。': 'Brand experience unifies visual expression and interaction cognition across devices, categories, and touchpoints. In Haier’s large and diverse hardware ecosystem, digital interfaces are the front line of dialogue with users. The goal is not to stack visual symbols, but to build a consistent, clear, and trustworthy experience order.',
    '一个海尔，一套体验语言': 'One Haier, One Experience Language',
    '一致': 'Consistent',
    '克制': 'Restrained',
    '可信': 'Trustworthy',
    '从价值到视觉表达': 'From Values to Visual Expression',
    '科技创新': 'Technology Innovation',
    '高端质感': 'Premium Quality',
    '生活品味': 'Lifestyle Taste',
    '化繁为简': 'Simplify Complexity',
    '信息克制': 'Information Restraint',
    '允许犯错': 'Tolerance for Error',
    '一致性': 'Consistency',
    '多维协同': 'Multi-dimensional Synergy',
    'Less is more': 'Less is more',
    '秉持“少即是多”的设计哲学，家电的核心价值在于让用户以最低的关注度高效完成任务。优秀的设计应当是隐形的。系统需通过多模态传感器与场景算法精准预测用户意图，将复杂的底层机器运转逻辑封装于极简的交互架构中。用最少的操作步骤与视觉干预，释放最大的服务效能，最大化降低用户的认知与操作成本。': 'Following the “Less is more” philosophy, the core value of home appliances is to help users complete tasks efficiently with minimal attention. Great design should be invisible. The system should use multimodal sensors and contextual algorithms to predict intent, encapsulate complex machine logic in a minimal interaction architecture, and maximize service effectiveness with the fewest steps and least visual intervention—reducing both cognitive and operational costs.',
    '线/面性图标基准及不可更改的强约束图标。': 'Line and filled icon standards, plus strict icons that must not be changed.',
    '材质光影 Token 作为系统视觉基调，确保跨设备渲染一致。': 'Material and lighting tokens define the system visual tone and keep rendering consistent across devices.',
    'Z 轴层级、投影阴影强度及堆叠逻辑。': 'Z-axis hierarchy, shadow intensity, and stacking logic.',
    '主视觉对齐方式与核心操作区热区。': 'Hero alignment and primary action touch zones.',
    '8pt、12pt 等基础间距体系规范。': 'Base spacing rules such as 8pt and 12pt.',
    '指导不同硬件、分辨率与屏幕方向的响应式栅格规范。': 'Responsive grid guidance for different hardware, resolutions, and screen orientations.',
    '空间深度帮助用户理解界面层级和操作优先级，避免浮层、卡片和背景互相竞争。': 'Spatial depth helps users understand interface hierarchy and operation priority, preventing overlays, cards, and backgrounds from competing.',
    '基础层': 'Base Layer',
    '内容层': 'Content Layer',
    '浮层': 'Floating Layer',
    '承载页面背景、主内容区和常规列表，保持低干扰。': 'Holds page backgrounds, main content, and regular lists with low distraction.',
    '用于卡片、控制面板和局部操作区，提供可识别的边界。': 'Used for cards, control panels, and local operation areas with clear boundaries.',
    '用于弹窗、菜单和临时确认，不应长期占据主界面。': 'Used for dialogs, menus, and temporary confirmations; should not occupy the main interface long-term.',
    '图标应服务于快速识别与跨端一致性，优先保持语义稳定、轮廓清晰和尺寸可控。': 'Icons should support fast recognition and cross-device consistency, prioritizing stable meaning, clear outlines, and controlled sizing.',
    '线性图标': 'Line Icons',
    '面性图标': 'Filled Icons',
    '强约束图标': 'Strict Icons',
    '用于常规导航、工具入口和轻量状态表达，保持统一描边粗细与端点风格。': 'Used for navigation, tool entries, and lightweight states with consistent stroke weight and endpoints.',
    '用于高优先级入口、关键状态和需要更强识别度的设备能力表达。': 'Used for high-priority entries, key states, and device capabilities that need stronger recognition.',
    '涉及安全、告警、运行状态的图标不可随业务风格随意改写。': 'Icons for safety, alerts, and operating states must not be casually restyled.',
    '作为系统视觉基调，我们定义了三套标准材质 Token，供开发直接映射，确保跨设备渲染的磨玻璃特效一致。': 'We define three standard material tokens for direct development mapping, ensuring consistent glass rendering across devices.',
    '底层背景。低模糊度。': 'Base background with low blur.',
    '卡片/列表容器。中度模糊。': 'Card and list containers with medium blur.',
    '浮层与弹窗。强烈边缘高光。': 'Overlays and dialogs with stronger edge highlights.',
    '核心要素用于建立页面第一焦点，确保设备状态、主操作与关键反馈在首屏中稳定可见。': 'Hero elements establish the first focal point and keep device status, primary actions, and key feedback visible in the first viewport.',
    '主视觉应围绕当前任务组织，避免把装饰图形置于关键操作之上。核心操作区应保留稳定热区，便于用户形成肌肉记忆。': 'Hero visuals should be organized around the current task. Avoid placing decorative graphics above key actions, and keep stable touch zones for muscle memory.',
    '以一个清晰、稳定、可识别的视觉核心统领首屏，将设备当前最重要的状态、数值或任务置于用户视线与操作路径的中心。': 'Use one clear, stable, and recognizable visual core to lead the first viewport, placing the device’s most important state, value, or task at the center of attention and action.',
    'Hero = 第一视觉焦点': 'Hero = First Visual Focus',
    '任务视觉锚点': 'Task Visual Anchor',
    '英雄元素承载当前最重要的状态、数值或任务，让用户一眼看懂设备正在做什么，以及下一步可以做什么。': 'The hero element carries the most important state, value, or task, helping users instantly understand what the device is doing and what they can do next.',
    '唯一焦点': 'Single Focus',
    '同一视区只建立一个主视觉中心。': 'Establish only one primary visual center in a viewport.',
    '状态优先': 'State First',
    '优先呈现当前任务与关键反馈。': 'Prioritize the current task and critical feedback.',
    '位置稳定': 'Stable Position',
    '跨状态保持锚点和操作热区稳定。': 'Keep the anchor and interaction zones stable across states.',
    '正在制冷': 'Cooling',
    '目标温度 · 运行正常': 'Target temperature · Running normally',
    '构成：核心信息、辅助信息、关键操作': 'Anatomy: Core Information, Supporting Information, and Key Action',
    '所有内容围绕主任务组织。视觉中心承载“最重要”，两侧或外围仅放置理解当前状态所必需的信息和高频操作。': 'Organize all content around the primary task. The visual center carries what matters most; place only essential state information and frequent actions at the sides or perimeter.',
    '辅助信息': 'Supporting Information',
    '主视觉核心': 'Primary Visual Core',
    '关键数值 / 状态 / 产品': 'Key Value / State / Product',
    '视觉权重最高 · 语义唯一': 'Highest visual weight · Single meaning',
    '关键操作': 'Key Action',
    '1. 核心层 Primary': '1. Primary Layer',
    '承载当前任务的关键对象，必须在 1 秒内被识别。': 'Carries the key object of the current task and must be recognizable within one second.',
    '2. 辅助层 Context': '2. Context Layer',
    '解释核心状态，但不可与核心争夺视觉权重。': 'Explains the core state without competing for visual weight.',
    '3. 操作层 Action': '3. Action Layer',
    '围绕核心任务布置，位置稳定、路径短、结果可预期。': 'Arrange actions around the core task with stable positions, short paths, and predictable outcomes.',
    '三种推荐构图': 'Three Recommended Compositions',
    '根据屏幕比例与任务性质选择构图，不以设备品类作为唯一判断条件。': 'Choose a composition based on screen proportions and task characteristics, not device category alone.',
    '辅助': 'Supporting',
    '核心': 'Core',
    '操作': 'Action',
    '居中聚焦': 'Centered Focus',
    '适合状态确认、数值调节与沉浸式运行页。核心置于视区几何中心或视觉中心。': 'Suitable for state confirmation, value adjustment, and immersive running views. Place the core at the geometric or visual center.',
    '核心状态': 'Core State',
    '控制 / 信息': 'Controls / Information',
    '左右分屏': 'Split View',
    '适合宽屏与“查看 + 操作”并重的场景。核心侧占比应明显大于辅助侧。': 'Suitable for wide screens where viewing and action are equally important. The core side should be clearly larger than the supporting side.',
    '快捷操作': 'Quick Actions',
    '上下叠放': 'Vertical Stack',
    '适合窄屏和纵向屏。保持核心先读、操作后达，避免上下多中心竞争。': 'Suitable for narrow and portrait displays. Present the core first and actions second, avoiding competing vertical centers.',
    '跨状态与跨屏适配': 'Adaptation Across States and Screens',
    '锚点不漂移': 'Keep the Anchor Stable',
    '数值变化、模式切换和反馈出现时，英雄元素的中心位置保持稳定。允许内部内容渐变或替换，不允许整体频繁跳位。': 'Keep the hero element centered when values change, modes switch, or feedback appears. Internal content may transition or change, but the entire element must not jump frequently.',
    '比例优先于固定尺寸': 'Prioritize Proportion over Fixed Size',
    '在不同屏幕中保持主次比例和呼吸空间。屏幕缩小时，先减少辅助项，再缩小核心，不做简单等比压缩。': 'Preserve hierarchy and breathing room across screens. On smaller screens, reduce supporting items before shrinking the core; do not scale everything proportionally.',
    '热区围绕任务': 'Place Targets Around the Task',
    '高频控制置于核心附近并保持一致方向关系；低频设置移入次级层，避免外围操作形成第二焦点。': 'Place frequent controls near the core with consistent directional relationships. Move infrequent settings to a secondary layer so peripheral actions do not create another focus.',
    '异常覆盖常态': 'Exceptions Override Normal States',
    '安全告警与需立即处理的异常可以临时接管英雄层级；恢复后回到原有锚点，不破坏用户已形成的空间记忆。': 'Safety alerts and urgent exceptions may temporarily take over the hero hierarchy. Return to the original anchor afterward to preserve spatial memory.',
    '使用边界': 'Usage Boundaries',
    '• 让一个核心任务主导首屏，其余内容为它服务。': '• Let one core task lead the first viewport; all other content should support it.',
    '• 保持主视觉、状态提示和高频操作之间的语义关联。': '• Maintain a semantic relationship between the primary visual, state indicators, and frequent actions.',
    '• 用留白、尺度与对比建立层级，而不是依赖装饰堆叠。': '• Build hierarchy with whitespace, scale, and contrast rather than decorative layering.',
    '• 在小屏中主动折叠低频信息，保证核心仍完整可读。': '• Collapse infrequent information on small screens so the core remains fully readable.',
    '• 不要在同一视区放置多个同等强度的“大主视觉”。': '• Do not place multiple equally dominant hero visuals in one viewport.',
    '• 不要让装饰图形、品牌图案或动效遮挡核心状态。': '• Do not let decorative graphics, brand patterns, or motion obscure the core state.',
    '• 不要因状态切换改变主操作位置或核心阅读顺序。': '• Do not change the primary action position or core reading order when states change.',
    '• 不要把所有功能平铺在英雄区域周围。': '• Do not place every function around the hero area.',
    '判断它是否是真正的英雄元素': 'Determine Whether It Is a True Hero Element',
    '移除这个元素后，如果用户无法快速判断设备当前状态、当前任务或下一步操作，它就是核心要素；如果移除后任务理解没有变化，它更可能只是装饰或辅助信息。': 'If removing the element prevents users from quickly understanding the device state, current task, or next action, it is a hero element. If task comprehension remains unchanged, it is more likely decorative or supporting information.',
    '状态 · 任务 · 下一步': 'State · Task · Next Step',
    '留白用于组织内容层级，不只是视觉空隙。基础间距应优先从 8pt 体系中选择，并根据设备尺寸做稳定扩展。': 'Spacing organizes content hierarchy, not just empty space. Base spacing should prioritize the 8pt system and scale steadily by device size.',
    '基础元素间距。': 'Base element spacing.',
    '紧凑内容组间距。': 'Compact content group spacing.',
    '模块与页面区块间距。': 'Module and page section spacing.',
    '网格系统用于让内容在中控屏、移动端和嵌入式屏幕之间保持稳定比例与阅读节奏。': 'The grid system keeps content proportions and reading rhythm stable across control panels, mobile, and embedded screens.',
    '此部分作为所有设计争议的最高决策依据。': 'This section is the highest-level basis for all design decisions.',
    '家电的核心价值在于高效完成任务。优秀的设计应当是隐形且克制的。系统需通过多模态传感器与场景算法精准预测用户意图，将复杂的底层机器运转逻辑封装于极简的交互架构之中，最大化降低用户的操作成本。': 'The core value of home appliances is completing tasks efficiently. Good design should feel invisible and restrained. The system should use multimodal sensors and scenario algorithms to predict user intent accurately, wrapping complex machine logic in a minimal interaction structure to reduce operating effort.',
    '界面设计应保持视觉焦点的绝对专注。在任何场景下，仅优先呈现与当前任务最关键的数据和核心操作。坚决避免将所有功能平铺堆砌在同一视区，通过清晰的主次划分，有效降低界面的视觉噪音与用户的决策负担。': 'Interface design should keep visual focus disciplined. In every scenario, only the data and actions most critical to the current task should be prioritized. Avoid laying every function into the same view; use clear hierarchy to reduce visual noise and decision load.',
    '构建安全的系统探索环境。所有的破坏性或关键性操作均需提供清晰的状态预警与非破坏性的回退机制。通过降低误操作的不可逆成本，消除用户在交互过程中的认知负担与焦虑感。': 'Build a safe environment for system exploration. Destructive or critical actions must provide clear warnings and non-destructive recovery paths. Reducing the irreversible cost of mistakes lowers cognitive load and anxiety during interaction.',
    '跨端认知要保持一致，系统图标、语义色彩、操控手势等必须具备唯一且确定的含义。同时全局性的底层视觉基建不可随意篡改，各产业在接入规范时，必须严格调用基础平台下的视觉构建块。': 'Cross-device cognition must remain consistent. System icons, semantic colors, and gestures must have unique and definite meanings. Global visual foundations must not be altered casually; each business unit should use the base platform visual building blocks when adopting the guidelines.',
    '跨端认知要保持一致，系统图标、语义色彩、操控手势等必须要具备唯一且确定的含义。同时全局性的底层视觉基建不可以随意篡改，各产业再接入规范时，必须严格调用基础平台下的视觉构建块。': 'Cross-device cognition must remain consistent. System icons, semantic colors, and gestures must have unique and definite meanings. Global visual foundations must not be altered casually; each business unit should use the base platform visual building blocks when adopting the guidelines.',
    '在体验上，用户不应该被困在单一的屏幕玻璃内。界面的视觉内容需要向物理环境延伸，保证硬件如实体灯带、旋钮等以及触觉反馈或系统音效之间的无缝联动，避免多维之间各行其事，割裂用户体验。': 'In the experience, users should not be confined to a single glass screen. Visual content should extend into the physical environment, coordinating light strips, knobs, haptics, and system audio so each dimension works together instead of fragmenting the experience.',
    '品牌体验': 'Brand Experience',
    '在海尔庞大且多元的硬件生态中，数字界面是用户与我们进行对话的最前沿触点。品牌体验的核心目标不是堆叠视觉符号，而是在不同设备、场景和触点之间建立一致、清晰、可信赖的体验秩序。': 'In Haier’s large and diverse hardware ecosystem, digital interfaces are the front-line touchpoint for dialogue with users. Brand experience is not about stacking visual symbols, but about building a consistent, clear, and trustworthy order across devices, scenarios, and touchpoints.',
    '海尔拥有丰富的家电品类，但用户面对的应该是“一个海尔”，而不是彼此割裂的孤立设备。UI 界面、灯光、触觉与声音反馈都应共同服务于同一套品牌识别和交互秩序。': 'Haier has a rich range of appliance categories, but users should experience one Haier rather than isolated devices. UI, lighting, haptics, and sound feedback should all serve the same brand identity and interaction order.',
    '统一不是简单复制样式，而是让用户从洗衣机切换到烤箱、从中控屏切换到移动应用时，仍能保持稳定的认知路径和操作信任。': 'Consistency is not simply copying styles. It means users keep a stable cognitive path and operational trust when moving from a washer to an oven, or from a control screen to a mobile app.',
    '视觉、交互、反馈和语言在跨品类体验中保持同源，降低重新学习成本。': 'Visuals, interaction, feedback, and language should share the same source across categories, reducing relearning costs.',
    '视觉、交互语言跨品类体验保持统一，降低用户学习成本': 'Visual and interaction language remain unified across categories, reducing learning costs.',
    '品牌表达服务于任务效率，不以装饰性元素干扰设备核心信息。': 'Brand expression serves task efficiency and should not let decorative elements interfere with core device information.',
    '品牌表达服务于用户体验，不以装饰性元素干扰核心信息': 'Brand expression serves user experience and should not let decorative elements interfere with core information.',
    '状态表达清晰、反馈及时、关键操作可预期，建立长期品牌信任。': 'Clear status, timely feedback, and predictable key actions build long-term brand trust.',
    '状态清晰、反馈及时、关键操作可预期，建立长期品牌信任': 'Clear status, timely feedback, and predictable key actions build long-term brand trust.',
    '品牌设计原则': 'Brand Design Principles',
    '核心方向': 'Core Directions',
    '体现前瞻、迭代和自信的科技探索精神，为品牌视觉提供坚实基底。': 'Reflect a forward-looking, iterative, and confident spirit of technology exploration, giving the brand visuals a solid foundation.',
    '以现代简约、智慧亲和、优雅愉悦的表达建立高品质体验感知。': 'Build a high-quality experience through modern simplicity, intelligent warmth, and elegant delight.',
    '连接真实生活方式，让科技体验具有温度、灵感和亲近感。': 'Connect with real lifestyles so technology feels warm, inspiring, and approachable.',
    '科技不应表现为冰冷、复杂的机器指令，而应通过智能化的多模态交互提供无缝、精准的使用体验。': 'Technology should not appear as cold, complex machine commands. It should provide a seamless and precise experience through intelligent multimodal interaction.',
    '复杂的机器算力与 AI 模型应隐藏在极简、直觉的界面之下，在用户需要时精准出现，在不需要时安静隐去。': 'Complex compute power and AI models should stay beneath a minimal, intuitive interface, appearing precisely when needed and fading away when not.',
    '家电是家庭空间的一部分，设计必须尊重用户的居住环境与生活节奏。': 'Appliances are part of the home, so design must respect the living environment and daily rhythm.',
    '数字界面应展现温润的生命力，与真实家居生活达成视觉与心理上的双重平衡。': 'Digital interfaces should feel warm and alive, balancing visually and psychologically with real home life.',
    '确保全品类达到 90% 统一度的物理底座，要求极度严谨。': 'The physical foundation for achieving 90% consistency across all categories, requiring strong rigor.',
    '主色调、警告色及深浅模式色阶定义。': 'Definitions for primary colors, warning colors, and light/dark color scales.',
    '点击查看详情页 &rarr;': 'View details ->',
    '点击查看详情页 →': 'View details ->',
    '远距离阅读大字号规范与等宽数字字体规范。': 'Large-type rules for distance reading and monospaced numeral font rules.',
    '材质、模糊、投影与高光 Token。': 'Material, blur, shadow, and highlight tokens.',
    '设计规范': 'Design Guidelines',
    '规范目录': 'Guideline Directory',
    '内容已按 1–8 大分类拆分为独立页面，左侧导航可展开查看子分类。': 'Content is split into independent pages across categories 1-8. Use the left navigation to expand subcategories.',
    '设计决策的最高原则与体验取舍依据。': 'Top principles for design decisions and experience tradeoffs.',
    '视觉基础、色彩、字体与布局基础。': 'Visual foundations, color, typography, and layout foundations.',
    '操作、输入、导航、数据与反馈组件。': 'Action, input, navigation, data, and feedback components.',
    'TFT、LED 与其它屏幕形态规范。': 'Guidelines for TFT, LED, and other screen forms.',
    '背景动效、转场与微交互。': 'Background motion, transitions, and micro-interactions.',
    '灯光、触觉与听觉反馈规范。': 'Lighting, haptic, and audio feedback guidelines.',
    'AI 视觉标准与使用标准。': 'AI visual standards and usage guidelines.',
    '强制标准、UT、Figma 与验收机制。': 'Mandatory standards, UT, Figma, and acceptance mechanisms.',
    'Haier Design 1.0.0 不仅是一套跨设备的 UI 库，更是一套连接屏幕显示、物理触觉、环境灯光与三维声音的“多感官编排系统”。我们以简约、清爽为基调，通过高度模块化的工程手段，赋能全品类家电产品的智能化进化。': 'Haier Design 1.0.0 is not only a cross-device UI library, but also a multisensory orchestration system connecting screen display, physical haptics, ambient lighting, and spatial sound. With a simple and fresh visual tone, highly modular engineering enables intelligent evolution across appliance categories.',
    'Figma 中的标准预制件与组装逻辑。': 'Standard prefabs and assembly logic in Figma.',
    'Button 按钮、悬浮按钮、图标按钮等。': 'Buttons, floating buttons, icon buttons, and more.',
    'Checkbox、Radio、Switch、Slider 等筛选与控制组件。': 'Selection and control components such as checkbox, radio, switch, and slider.',
    'Text Input、步进器、旋钮数据输入等。': 'Text input, steppers, knob-based data input, and more.',
    'Tabs、Top Bar、底部菜单等导航组件。': 'Navigation components such as tabs, top bars, and bottom menus.',
    'List、Card、表格等数据承载组件。': 'Data containers such as lists, cards, and tables.',
    'Toast、Modal、Progress 等反馈与状态组件。': 'Feedback and status components such as toast, modal, and progress.',
    '组件变体架构示例': 'Component Variant Architecture Example',
    '为了支持全品类家电，严禁堆砌离散组件。核心组件必须按类似代码': 'To support all appliance categories, avoid piling up disconnected components. Core components must be configured with logic similar to code',
    '的逻辑配置，实现原子化装配。': 'to support atomic assembly.',
    'Control Card (控制面板卡片)': 'Control Card',
    '1. 硬件维度 (Variants)': '1. Hardware Dimension (Variants)',
    '2. 状态维度 (Variants)': '2. State Dimension (Variants)',
    '3. 内容组合开关 (Boolean Properties)': '3. Content Composition Toggles (Boolean Properties)',
    '针对不同材质屏幕的视觉降级与适配策略。': 'Visual fallback and adaptation strategies for different screen materials.',
    '触控热区、阅读距离与信息层级需匹配真实硬件尺寸。': 'Touch targets, reading distance, and information hierarchy must match the real hardware size.',
    '区分大屏（如冰箱）和小屏（如咖啡机）的响应式折叠逻辑。': 'Responsive folding logic for large screens such as refrigerators and small screens such as coffee machines.',
    '大滑块拨盘、横向卡片流、大触控区的标准模式定义。': 'Standard patterns for large sliders, horizontal card flows, and large touch zones.',
    '段码屏：受限像素下的字符标准、跑马灯与闪烁频率。': 'Segment displays: character standards, marquee behavior, and blink frequency under limited pixels.',
    '图文混排：明确印刷丝印文字与触摸 LED 图标的对齐基线。': 'Mixed text and graphics: define alignment baselines for printed labels and touch LED icons.',
    '异形屏、透明屏、投影等特种硬件。': 'Special hardware such as irregular screens, transparent screens, and projection.',
    '[ 极端环境适配策略... ]': '[ Extreme environment adaptation strategy... ]',
    '界面元素的动态表现原则。': 'Motion principles for interface elements.',
    '弥散光晕的呼吸节律、状态切换时的平滑过度动画。': 'Breathing rhythm for aura backgrounds and smooth transitions during state changes.',
    '页面切换、层级进入与退出时的节奏规范。': 'Rhythm rules for page changes and hierarchy enter/exit transitions.',
    '按钮点击反弹、图标状态切换小动画。': 'Button press rebound and small animations for icon state changes.',
    '设备的物理反馈体验与屏外融合。': 'Physical device feedback and off-screen integration.',
    '界面状态应与灯光反馈保持同步，让物理环境成为系统反馈的一部分。': 'Interface state should stay synchronized with lighting feedback, making the physical environment part of system feedback.',
    'AI 净洗模式中': 'In AI wash mode',
    '物理 LED 导光条': 'the physical LED light guide',
    '与屏幕动画完全同步': 'is fully synchronized with screen animation',
    '[ 马达震动曲线参数 (Tick / Pop) 载入中... ]': '[ Motor vibration curve parameters (Tick / Pop) loading... ]',
    '音效需符合整体“柔软”基调，避免尖锐蜂鸣，倡导使用柔和合成音。': 'Sound effects should match the overall soft tone, avoiding sharp beeps and favoring gentle synthesized sounds.',
    '[ 系统 UI 音效矩阵 (.wav) 载入中... ]': '[ System UI sound matrix (.wav) loading... ]',
    'AI 智能特性的专属体验规范，覆盖视觉识别、语音反馈与使用边界。': 'Dedicated experience guidelines for AI features, covering visual recognition, voice feedback, and usage boundaries.',
    '语音唤醒时的视觉波形与拾音状态反馈。': 'Visual waveform and pickup-state feedback during voice wake-up.',
    '“正在思考”与“识别完成”的流光转场动效。': 'Flowing-light transitions for thinking and recognition-complete states.',
    '[ 主动响应与被动建议的交互流程树... ]': '[ Interaction flow tree for active responses and passive suggestions... ]',
    '确保规范能够落地并维持高统一度的执行手册。': 'Execution manual for implementing the guidelines and maintaining high consistency.',
    '返回按钮一致性：': 'Back button consistency:',
    '固定采用': 'Always use',
    '，严禁私自替换。': '; do not replace it arbitrarily.',
    '主操作区高度：': 'Primary action area height:',
    '触屏底部确认 Button 热区高度严禁小于': 'The bottom confirmation button touch area on touchscreens must not be less than',
    '错误警示标准：': 'Error warning standard:',
    '系统报错必须伴随': 'System errors must include',
    '级物理警告音。': 'level physical warning sound.',
    '基于用户测试得到的设计改良数据看板。': 'Design improvement dashboard based on user testing data.',
    '集团内组件库的订阅与分发权限管理标准。': 'Subscription and distribution permission standards for the group component library.',
    '开发走查与验证标准，确保落地 90% 还原度。': 'Development review and validation standards to ensure 90% implementation fidelity.',
    '版本演进记录。': 'Version evolution record.',
    '版本号': 'Version',
    '日期': 'Date',
    '更新内容': 'Update',
    '应用全新 9 级框架。扩展并完善硬件、动效及 AI 相关层级。': 'Applied the new 9-level framework and expanded hardware, motion, and AI layers.',
    '早期': 'Early',
    '内部预览版，基础组件构想与概念验证。': 'Internal preview with initial component concepts and proof of concept.',
    '系统色彩用于统一品牌识别、状态反馈和跨设备视觉层级，点击色块可复制对应色值。': 'System colors unify brand identity, status feedback, and cross-device visual hierarchy. Click a swatch to copy its value.',
    '已复制色值到剪贴板': 'Color value copied to clipboard',
    '主品牌色定义了 Haier Design 的核心视觉识别，并为重点操作与品牌场景提供统一基准。': 'Primary brand colors define the core visual identity of Haier Design and provide a unified baseline for key actions and brand scenarios.',
    '辅助色主要用于图表数据可视化、插画、标签分类等需要丰富色彩展现的场景。我们彻底摒弃了难以落地的渐变色条，采用了极具数学美感的': 'Auxiliary colors are mainly used for charts, illustration, tags, and other scenarios that need richer color expression. We avoid hard-to-implement gradients and use a mathematically structured',
    '进行规范管理。第 6 阶为基准主色。': 'for standardized management. Step 6 is the baseline main color.',
    '适老化视觉高亮设计': 'Age-friendly visual highlight design',
    '专为老年人产品设计，旨在提升高龄用户的视觉识别度。': 'Designed for elderly-oriented products to improve visual recognition for senior users.',
    '通过控制明度，建立清晰的信息层级与空间纵深感。下面展示了标准的 9 阶灰度连续色带，采用竖向排列并补充了各阶色值的核心应用场景。': 'By controlling lightness, neutral colors establish clear information hierarchy and spatial depth. The standard 9-step grayscale ramp is shown vertically with core use cases for each step.',
    '以浅灰作为页面背景与容器底色，保证磨玻璃层次稳定且不过度抢占注意力。': 'Use light gray as page and container backgrounds to keep glass layers stable without taking too much attention.',
    '以 80% 至 60% 的灰度作为轻量级分割线，对视觉打扰降到最低；对于强调用途的控件描边，可选用 39% (#666666) 的色阶。': 'Use 80% to 60% grayscale for lightweight dividers to minimize visual interruption. For emphasized control strokes, 39% (#666666) may be used.',
    '使用 4% 或 7% 作为一级大标题文字色；20% 至 26% 适用于大量正文阅读，缓解视疲劳；39% 用于辅助或次要信息说明。': 'Use 4% or 7% for primary heading text; 20% to 26% for long body reading to reduce fatigue; 39% for supporting or secondary information.',
    '功能色用于成功、警告与危险等状态反馈，确保用户能快速识别系统状态。': 'Functional colors indicate success, warning, and danger states so users can quickly recognize system status.',
    '参考全局 Token 体系，字体系统保证不同终端下的易读性与清晰层级。': 'Based on the global token system, typography ensures readability and clear hierarchy across terminals.',
    '中文': 'Chinese',
    '英文': 'English',
    '数字': 'Numerals',
    '标准中文字体 (Font Name)': 'Standard Chinese Font (Font Name)',
    '中文字体统一采用': 'Chinese typography uses',
    '方正兰亭黑 (FZLT Black)': 'FZLanTingHei (FZLT Black)',
    '，以保证在各种屏幕和终端设备上提供清晰、一致且富有科技感的阅读体验。': 'to provide a clear, consistent, and technological reading experience across screens and devices.',
    '下载字体安装包': 'Download font package',
    '字重 Font Weight': 'Font Weight',
    '字重类别': 'Weight Category',
    '展示 (Preview)': 'Preview',
    '参考 CSS (Weight)': 'CSS Weight',
    '说明 (Description)': 'Description',
    '粗黑 (Bold)': 'Bold',
    '黑 (Regular)': 'Regular',
    '纤黑 (Light)': 'Light',
    '文本样式 Text Style': 'Text Style',
    '层级 (Level)': 'Level',
    '字号 (Size)': 'Size',
    '行高 (Line Height)': 'Line Height',
    '显示': 'Display',
    '标题': 'Title',
    '主标题': 'Headline',
    '标签': 'Label',
    '正文': 'Body',
    '注：预览文字大小为适配页面阅读做了等比缩小展示，实际字号请以字号列标注的 pt 数值为准。': 'Note: Preview text is scaled down for page readability. Use the pt values in the size column as the source of truth.',
    '打印字号 (Print Font Size) 对照': 'Print Font Size Reference',
    '物理尺寸': 'Physical Size',
    '字号 (pt)': 'Font Size (pt)',
    '预览': 'Preview',
    '标准英文字体 (Font Name)': 'Standard English Font (Font Name)',
    '英文字体统一采用': 'English typography uses',
    '不同字重用于区分标题、正文、辅助信息与关键数字信息。': 'Different weights distinguish titles, body text, supporting information, and key numerals.',
    '数字字体用于设备状态、时间、温度、能耗等高频数据展示。': 'Numeral fonts are used for high-frequency data such as device status, time, temperature, and energy consumption.',
    '此特殊数字字体不应用于正文。': 'This specialized numeral font should not be used for body text.',
    '数字字体': 'Numeral Font',
    '数字专用字体统一采用': 'Dedicated numeral typography uses',
    '，用于强调或特殊场景下的数字展示，不用于正文。': 'for emphasized or special numeral displays, not for body text.',
    '文本风格 · 显示': 'Text Style · Display',
    '对于特定的字体大小或粗细，没有严格的规定。您可以根据具体情况选择合适的大小和粗细，并将其作为有效的设计元素加以利用。': 'There are no strict rules for specific font sizes or weights. Choose appropriate sizes and weights for the context and use them as effective design elements.',
    '双八': 'Double Eight',
    '默认文本': 'Default Text',
    '间距规范': 'Spacing Rules',
    '数字与数字之间的间距：': 'Spacing between numerals:',
    '数字与冒号 / 小数点之间的间距：': 'Spacing between numerals and colons/decimal points:',
    '整体字符高度：': 'Overall character height:',
    '为基础比例单位）': 'as the base proportional unit)',
    '斜切面（数码管倾斜切角）间距为': 'The bevel spacing for segment-display angled cuts is',
    '，元素间距和比例需严格遵循此规范': '; element spacing and proportions must strictly follow this rule',
    'LED标准尺寸': 'LED Standard Sizes',
    '数码管在不同物理尺寸下的标准应用规格，按整体高度由大到小排列，预览已按比例等比缩放。': 'Standard segment-display specifications for different physical sizes, ordered by overall height from large to small. Previews are scaled proportionally.',
    '规格 (宽 x 高)': 'Spec (W x H)',
    '数字宽度': 'Numeral Width',
    '笔画粗细': 'Stroke Weight',
    '数字预览 0-9': 'Numeral Preview 0-9',
    '尺寸需根据实际屏幕密度、观看距离和硬件工艺进行校准。': 'Sizes should be calibrated based on actual screen density, viewing distance, and hardware process.',
    '搭配使用': 'Combined Use',
    '数码管数字常与计量单位或状态缩写组合使用，单位文本使用常规字体，与数字风格区分层级。': 'Segment numerals are often paired with units or status abbreviations. Unit text should use regular typography to keep a clear hierarchy.',
    '常用单位 / 状态缩写': 'Common Units / Status Abbreviations'
    ,
    'Haier Design | 资产与推行': 'Haier Design | Assets & Governance',
    'Haier Design | 品牌': 'Haier Design | Brand',
    'Haier Design | 更新日志 Log': 'Haier Design | Changelog',
    'Haier Design | 色彩规范': 'Haier Design | Color',
    'Haier Design | 组件': 'Haier Design | Components',
    'Haier Design | 设计体验原则': 'Haier Design | User Experience Principles',
    'Haier Design | 基础': 'Haier Design | Foundations',
    'Haier Design | 栅格系统': 'Haier Design | Grid System',
    'Haier Design | 多模态与跨端设计规范': 'Haier Design | Multimodal & Cross-device Design Guidelines',
    'Haier Design | 硬件': 'Haier Design | Hardware',
    'Haier Design | 核心要素': 'Haier Design | Hero Element',
    'Haier Design | 图标规范': 'Haier Design | Iconography',
    'Haier Design | 光影': 'Haier Design | Materials & Lighting',
    'Haier Design | 动效': 'Haier Design | Motion',
    'Haier Design | 原则': 'Haier Design | Principles',
    'Haier Design | 多感官交互': 'Haier Design | Sensory Interaction',
    'Haier Design | 排版': 'Haier Design | Spacing & Layout',
    'Haier Design | 层级（空间深度）': 'Haier Design | Spatial Depth',
    'Haier Design | 层级（XYZ 空间布局）': 'Haier Design | XYZ Spatial Hierarchy',
    '字体规范 | Haier Design': 'Typography | Haier Design',
    '1. 原则': '1. Principles',
    '1.1 设计体验原则': '1.1 User Experience Principles',
    '1.2 品牌': '1.2 Brand',
    '2. 基础': '2. Foundations',
    '2.1 视觉基础': '2.1 Visual Foundations',
    '2.1.1 色彩': '2.1.1 Color',
    '2.1.2 字体': '2.1.2 Typography',
    '2.1.3 图标': '2.1.3 Iconography',
    '2.1.4 光影': '2.1.4 Materials & Lighting',
    '2.2 布局基础': '2.2 Layout Foundations',
    '2.2.1 层级（XYZ 空间布局）': '2.2.1 Hierarchy (XYZ Spatial Layout)',
    '2.2.2 核心要素': '2.2.2 Hero Element',
    '2.2.3 排版': '2.2.3 Spacing & Layout',
    '2.2.4 栅格系统': '2.2.4 Grid System',
    '2.2.4 弹性网格 Flexible Grid': '2.2.4 Flexible Grid',
    '2.2.2 核心要素 Hero Element': '2.2.2 Hero Element',
    '2.2.3 留白与排版 Spacing & Layout': '2.2.3 Spacing & Layout',
    '2.1.3 图标 Iconography': '2.1.3 Iconography',
    '2.1.4 材质光影 Materials & Lighting': '2.1.4 Materials & Lighting',
    '2.2.1 空间深度 Spatial Depth': '2.2.1 Spatial Depth',
    '3. 组件': '3. Components',
    '3.1 操作类 Action': '3.1 Action',
    '3.2 筛选与控制类 Selection & Controls': '3.2 Selection & Controls',
    '3.3 输入类 Inputs': '3.3 Inputs',
    '3.4 导航类 Navigation': '3.4 Navigation',
    '3.5 数据容器 Data Containers': '3.5 Data Containers',
    '3.6 反馈与状态 Feedback Status': '3.6 Feedback & Status',
    '4. 硬件': '4. Hardware',
    '4.1 TFT 屏幕 TFT Screens': '4.1 TFT Screens',
    '4.1.1 原则': '4.1.1 Principles',
    '4.1.2 尺寸 Dimensions': '4.1.2 Dimensions',
    '4.1.3 标准适配 Standard Adaptation': '4.1.3 Standard Adaptation',
    '4.2 LED 屏幕 LED Screens': '4.2 LED Screens',
    '4.3 其它 Others': '4.3 Others',
    '5. 动效': '5. Motion',
    '5.1 背景': '5.1 Background',
    '5.2 转场 Transitions': '5.2 Transitions',
    '5.3 微交互 Micro-interactions': '5.3 Micro-interactions',
    '6. 多感官交互': '6. Sensory Interaction',
    '6.1 视觉 Visuals': '6.1 Visuals',
    '6.1.1 灯光 Lighting：Aura Sync 虚实同频': '6.1.1 Lighting: Aura Sync',
    '6.2 触觉 Haptics': '6.2 Haptics',
    '6.3 听觉 Audio': '6.3 Audio',
    '7.1 AI 视觉标准 AI Visual Standards': '7.1 AI Visual Standards',
    '7.1.1 AI 图标 AI Iconography': '7.1.1 AI Iconography',
    '7.1.2 AI 语音 AI Voice': '7.1.2 AI Voice',
    '7.1.3 AI 动效': '7.1.3 AI Motion',
    '7.2 AI 使用标准': '7.2 AI Usage Guidelines',
    '8. 资产与推行': '8. Assets & Governance',
    '8.1 强制规范标准 Mandatory Standards': '8.1 Mandatory Standards',
    '8.2 UT 数据推导': '8.2 UT Data',
    '8.3 Figma 资产授权': '8.3 Figma Asset Authorization',
    '8.4 统一度验收': '8.4 Consistency Acceptance',
    '9. 更新日志': '9. Changelog',
    '色彩规范': 'Color Guidelines',
    '1. 主品牌色': '1. Primary Brand Colors',
    '主品牌色': 'Primary Brand Color',
    'Blue-1 (最浅)': 'Blue-1 (Lightest)',
    'Blue-6 (主色)': 'Blue-6 (Primary)',
    '2. 辅助色': '2. Auxiliary Colors',
    '10 阶竖向阵列': '10-step vertical array',
    'Cyan / 靛青': 'Cyan',
    'Green / 翠绿': 'Green',
    'Purple / 罗兰紫': 'Purple',
    'Red / 浪漫红': 'Red',
    'Orange / 活力橙': 'Orange',
    '2.1 无障碍适老色彩': '2.1 Accessible Senior-friendly Colors',
    '3. 中性色': '3. Neutral Colors',
    'Neutral / 中性灰': 'Neutral Gray',
    '中性色应用规范': 'Neutral Color Usage',
    '背景与容器 (Backgrounds)': 'Backgrounds & Containers',
    '边框与分割 (Dividers)': 'Borders & Dividers',
    '排版与文本': 'Typography & Text',
    '4. 功能色': '4. Functional Colors',
    '字体规范': 'Typography',
    '方正兰亭黑 FZLanTingHei': 'FZLanTingHei',
    '方正兰亭黑主要通过以下三种字重来构建界面的信息层级，保证重点突出且不失轻盈感。': 'FZLanTingHei uses three main weights to build interface hierarchy, keeping emphasis clear while preserving lightness.',
    '粗黑': 'Bold',
    '黑': 'Regular',
    '纤黑': 'Light',
    '用于强烈的视觉强调，如全局大标题、核心数据展示、警告状态': 'For strong visual emphasis, such as global headings, key data displays, and warning states.',
    '日常阅读正文、常规按钮文本、大多数 UI 控件的基础字重': 'Base weight for daily body reading, regular button text, and most UI controls.',
    '辅助文案、次要内容等弱化展示场景': 'For supporting copy, secondary content, and reduced-emphasis scenarios.',
    '依据业务场景，提取了极具辨识度的中文文本层级样式，并统一了其字号大小与行高。': 'Distinct Chinese text hierarchy styles are extracted by business scenario, with unified font sizes and line heights.',
    '海尔智家': 'Haier Smart Home',
    '用于极大字号的数据展示或英雄区域主视觉文字': 'For very large data displays or hero visual text.',
    '页面主要标题，引导用户的核心模块标题': 'Main page titles and core module headings.',
    '卡片大标题、重要提示区及子页面标题': 'Large card titles, important prompt areas, and subpage titles.',
    '辅助说明、组件内部标签、次要提示信息': 'Supporting descriptions, component labels, and secondary hints.',
    '(纤黑)': '(Light)',
    '常规段落内容中的弱化、次要展示场景': 'Reduced-emphasis and secondary scenarios within regular paragraphs.',
    '(黑)': '(Regular)',
    '常规段落内容、列表文本、基础阅读文本': 'Regular paragraphs, list text, and base reading text.',
    '(粗黑)': '(Bold)',
    '正文中需要强调的重点内容': 'Emphasized content inside body text.',
    '用于强烈的视觉强调，如全局大标题、核心数据展示、标题类文本': 'For strong visual emphasis, such as global headings, key data displays, and title text.',
    '日常阅读正文、主标题/标签类文本、大多数 UI 控件的基础字重': 'Base weight for body reading, headline/label text, and most UI controls.',
    '辅助文案、次要正文内容等弱化展示场景': 'For supporting copy and secondary body content.',
    '依据业务场景，提取了极具辨识度的英文文本层级样式，并统一了其字号大小与行高。': 'Distinct English text hierarchy styles are extracted by business scenario, with unified font sizes and line heights.',
    '字重 (Weight)': 'Weight',
    '化繁为简 Simplify Complexity': 'Simplify Complexity',
    '信息克制 Information Restraint': 'Information Restraint',
    '允许犯错 Tolerance for Error': 'Tolerance for Error',
    '一致性 Consistency': 'Consistency',
    '多维协同 Multi-dimensional Synergy': 'Multi-dimensional Synergy',
    '2.2.2 布局模式': '2.2.2 Layout Patterns',
    '排版与响应式布局': 'Spacing & Responsive Layout',
    '同一操作心智，不同屏幕形态。以任务优先级驱动重排，而不是按比例缩放界面。': 'One interaction model across screen forms. Reflow by task priority instead of scaling the interface proportionally.',
    '设计意图': 'Pattern Intent',
    '先保持信息角色稳定，再改变空间关系': 'Keep information roles stable before changing spatial relationships',
    '设备比例变化时，核心任务、操作顺序和物理位置映射保持一致；导航、状态、参数等辅助信息允许压缩、折行或按需隐藏。任何形态都必须让用户先识别当前模式与剩余时间，再完成启动或暂停。': 'As screen proportions change, keep the core task, operation order, and physical-position mapping consistent. Navigation, status, and parameters may compress, wrap, or hide on demand. Every form must reveal the current mode and remaining time before start or pause.',
    '本页内容': 'On This Page',
    '基线模块': 'Baseline Modules',
    '形态模式': 'Form Patterns',
    'TFT / LED 映射': 'TFT / LED Mapping',
    '验收清单': 'Acceptance Checklist',
    '01 · 基线解构': '01 · Baseline Deconstruction',
    '四个稳定的信息角色': 'Four Stable Information Roles',
    '这是布局约束，不是四个永远可见的矩形。': 'These are layout constraints, not four rectangles that must always remain visible.',
    'Figma：每个角色建立独立框架': 'Figma: Create an independent frame for each role',
    '全局导航': 'Global Navigation',
    '跨任务切换。宽屏常驻；空间不足时压缩、下移或按需呼出。': 'Switches across tasks. Persistent on wide screens; compressed, moved down, or recalled on demand when space is limited.',
    '顶部状态': 'Header & Status',
    '承载层级与系统状态。不可与核心任务争夺视觉重心。': 'Carries hierarchy and system status without competing with the core task.',
    '核心视窗': 'Content View',
    '承载模式、倒计时与参数。始终获得最大可用空间。': 'Carries mode, countdown, and parameters, and always receives the largest available area.',
    '主操作': 'Primary Action',
    '启动 / 暂停。位置稳定、触达明确，不随内容滚动丢失。': 'Start / pause. Keep its position stable, clearly reachable, and never scrolled out with content.',
    '优先级': 'Priority',
    '当前模式': 'Current Mode',
    '核心时间': 'Core Time',
    '关键参数': 'Key Parameters',
    '导航与系统状态': 'Navigation & System Status',
    '02 · 响应式模式': '02 · Responsive Patterns',
    '四类屏幕形态，不做等比缩放': 'Four screen forms without proportional scaling',
    '比例用于选择布局模式；实际断点还需结合物理尺寸、观看距离和输入方式验证。': 'Use aspect ratio to select a layout pattern; validate actual breakpoints against physical size, viewing distance, and input method.',
    '横向舒展': 'Horizontal Expansion',
    '宽屏 · 横向锚定': 'Wide · Horizontal Anchoring',
    '导航和主操作固定在两侧，核心视窗弹性增长。优先增加可见内容，而不是放大控件。': 'Anchor navigation and primary action to both sides while the content view grows fluidly. Increase visible content before enlarging controls.',
    '排列': 'Arrangement',
    '导航 ｜ 顶部状态 + 核心视窗 ｜ 主操作': 'Navigation | Header + Content View | Primary Action',
    '内容容量': 'Content Capacity',
    '21:9 显示 4–5 个模式；16:9 显示 3 个，并保留横向浏览。': 'Show 4–5 modes at 21:9 and 3 at 16:9, retaining horizontal browsing.',
    '信息层级允许并排；核心时间必须保持第一视觉重心。': 'Information levels may sit side by side; core time must remain the primary visual focus.',
    '页面层级 / 当前模式': 'Page Hierarchy / Current Mode',
    '系统状态': 'System Status',
    '线框只表达 N / H / C / A 的位置与层级，不代表最终视觉。': 'The wireframe only expresses N / H / C / A position and hierarchy, not final styling.',
    'LED 静态映射 · 宽屏': 'LED Static Mapping · Wide',
    '固定功能': 'Fixed Function',
    '固定参数': 'Fixed Parameter',
    '仅双八位置显示可变数字': 'Only the double-eight position may show variable numerals',
    '垂直折行': 'Vertical Wrap',
    '标准屏 · 栅格重组': 'Standard · Grid Recomposition',
    '增加纵向利用率。导航根据物理宽度选择压缩侧栏或底部栏，主操作固定右下。': 'Use vertical space more effectively. Choose a compressed side rail or bottom bar by physical width, with the primary action fixed at bottom right.',
    '顶部状态 → 内容栅格 → 底部导航；主操作固定右下。': 'Header → Content Grid → Bottom Navigation; primary action fixed at bottom right.',
    '从单行切换为 2×2 或 2×3；顺序按阅读流延续。': 'Switch from one row to a 2×2 or 2×3 grid while preserving reading order.',
    '选择依据': 'Selection Rule',
    '若侧栏占用超过可用宽度的 16%，优先切换底部导航。': 'If the side rail exceeds 16% of available width, switch to bottom navigation.',
    '状态': 'Status',
    'LED 静态映射 · 标准屏': 'LED Static Mapping · Standard',
    '标签位置固定，数字仅在双八内变化': 'Label positions stay fixed; numerals vary only inside the double-eight display',
    '单点聚焦': 'Single Focus',
    '方形屏 · 径向聚焦': 'Square · Radial Focus',
    '只保留一次任务所需的最少信息。导航和系统状态降级为手势或边缘入口。': 'Keep only the minimum information needed for one task. Move navigation and system status to gestures or edge entry points.',
    '中心数据 + 底部主操作区；辅助信息不常驻。': 'Central data + bottom primary-action area; supporting information is not persistent.',
    '输入映射': 'Input Mapping',
    '旋转负责选择 / 调节，按压负责确认 / 启停。': 'Rotate to select or adjust; press to confirm or start / pause.',
    '限制': 'Constraint',
    '单屏只表达一个决策，禁止缩入完整宽屏界面。': 'Express one decision per screen; never shrink the full wide-screen interface into it.',
    'LED 静态映射 · 方形屏': 'LED Static Mapping · Square',
    '固定模式': 'Fixed Mode',
    '固定环形标签 + 中央双八': 'Fixed radial labels + central double-eight display',
    '线性串联': 'Linear Flow',
    '条形屏 · 单行任务流': 'Strip · Single-row Task Flow',
    '信息彻底扁平化，以从左到右的操作顺序串联。取消卡片与所有纵向嵌套。': 'Flatten information into a left-to-right operation sequence. Remove cards and all vertical nesting.',
    '功能入口 → 当前模式 → 核心时间 → 主操作。': 'Function Entry → Current Mode → Core Time → Primary Action.',
    '文本': 'Text',
    '模式名超长时单行滚动；时间和操作不可被挤压。': 'Scroll overlong mode names on one line; never compress time or action.',
    '视觉': 'Visual',
    '仅文字、图标与分隔；禁用玻璃背景和多层卡片。': 'Use only text, icons, and dividers; remove glass backgrounds and layered cards.',
    '当前模式 · 单行文本': 'Current Mode · Single-line Text',
    'LED 静态映射 · 条形屏': 'LED Static Mapping · Strip',
    '固定顺序，不使用滚动文本': 'Fixed order with no scrolling text',
    '03 · TFT → LED 映射': '03 · TFT → LED Mapping',
    '映射的是操作心智，不是视觉材质': 'Map the interaction model, not the visual material',
    'LED 只能在固定位置显示固定标签；可变内容仅允许出现在双八数字位。视觉重心、控制顺序和主操作位置必须与 TFT 保持一致。': 'LED panels show fixed labels at fixed positions. Variable content is allowed only in the double-eight numeral positions. Visual focus, control order, and primary-action position must remain consistent with TFT.',
    '01 · 核心数字同位': '01 · Align Core Numerals',
    'TFT 的核心倒计时映射为最大尺寸七段数码管，并继承左对齐或居中对齐方式。': 'Map the TFT core countdown to the largest seven-segment display while preserving left or center alignment.',
    '02 · 主操作同侧': '02 · Keep Primary Action on the Same Side',
    'TFT 右侧启动 / 暂停在 LED 上对应绝对右侧实体键或背光触控键。': 'Map the TFT right-side start / pause action to a physical or backlit touch key at the far right of the LED panel.',
    '03 · 功能参数对应': '03 · Pair Functions and Parameters',
    '每个功能与其参数上下成组、逐列对应；功能区承担主要识别，参数区保持辅助层级。': 'Group each function above its parameter in aligned columns; functions carry primary recognition while parameters remain secondary.',
    'LED 信息架构': 'LED Information Architecture',
    '双八 · 可变数字': 'Double Eight · Variable Numerals',
    '功能区 : 参数区 = 4 : 1 · 固定标签不可变化 · 主操作保持右侧': 'Function Area : Parameter Area = 4 : 1 · Fixed labels do not change · Primary action stays on the right',
    '04 · 验收清单': '04 · Acceptance Checklist',
    '布局模式验收': 'Layout Pattern Acceptance',
    '必须满足': 'Must Meet',
    '禁止做法': 'Do Not',
    'Figma 建议：': 'Figma Recommendation:',
    '以 N / H / C / A 建立四个组件槽位；为宽屏、标准屏、方形屏、条形屏建立变体。使用自动布局、折行与最小 / 最大宽度表达规则，避免为每个分辨率复制独立画板。': 'Create four component slots for N / H / C / A and variants for Wide, Standard, Square, and Strip. Express rules with Auto Layout, wrap, and min / max width instead of duplicating frames for every resolution.',
    '功能': 'Function',
    '参数': 'Parameter',
    '启动 / 暂停': 'Start / Pause',
    '□ 3 秒内识别当前模式与剩余时间': '□ Identify the current mode and remaining time within 3 seconds',
    '□ 启动 / 暂停无需滚动即可触达': '□ Reach start / pause without scrolling',
    '□ 参数顺序跨 TFT / LED 保持一致': '□ Keep parameter order consistent across TFT / LED',
    '□ 隐藏信息有明确、可发现的召回路径': '□ Provide a clear and discoverable path to recall hidden information',
    '□ 触控目标按物理尺寸而非像素验收': '□ Validate touch targets by physical size, not pixels',
    '× 将宽屏界面整体等比缩小': '× Scale the entire wide-screen interface down proportionally',
    '× 为填满空间而无意义放大卡片': '× Enlarge cards merely to fill space',
    '× 因硬件不同更换参数排列顺序': '× Change parameter order for different hardware',
    '× 让主操作跟随内容滚出可视区': '× Let the primary action scroll out of view',
    '× 仅凭宽高比决定全部断点': '× Determine every breakpoint from aspect ratio alone',
    '© 2026 Haier Design 设计团队 · 内部保密': '© 2026 Haier Design Lab · Internal Confidential'
  };
  Object.assign(FALLBACK_I18N_EN, window.HAIER_HARDWARE_I18N_EN || {});

  const PAGE_TITLE_EN = {
    'haier_os_design_system.html': 'Haier Design | Multimodal & Cross-device Design Guidelines',
    'principles.html': 'Haier Design | User Experience Principles',
    'design_principles.html': 'Haier Design | User Experience Principles',
    'brand.html': 'Haier Design | Brand',
    'foundations.html': 'Haier Design | Foundations',
    'color_details.html': 'Haier Design | Color',
    'typography_details.html': 'Haier Design | Typography',
    'iconography_details.html': 'Haier Design | Iconography',
    'materials_lighting_details.html': 'Haier Design | Material',
    'spatial_depth_details.html': 'Haier Design | Information Architecture',
    'hero_element_details.html': 'Haier Design | Hero Element',
    'spacing_layout_details.html': 'Haier Design | Spacing & Layout',
    'grid_system_details.html': 'Haier Design | Grid System',
    'components.html': 'Haier Design | Components',
    'hardware.html': 'Haier Design | Hardware',
    'motion.html': 'Haier Design | Motion',
    'sensory.html': 'Haier Design | Sensory Interaction',
    'lighting.html': 'Haier Design | Lighting',
    'touch.html': 'Haier Design | Touch',
    'audio.html': 'Haier Design | Audio',
    'ai.html': 'Haier Design | AI',
    'assets.html': 'Haier Design | Assets & Governance',
    'changelog.html': 'Haier Design | Changelog',
  };

  const normalizeTopHomeLink = () => {
    if (!mainContent || currentPage === 'haier_os_design_system.html') return;

    const pageTitle = mainContent.querySelector('h1');
    const isSensorySubpage = sensorySubpages.has(currentPage);
    if (isSensorySubpage && pageTitle?.previousElementSibling?.tagName === 'P') {
      pageTitle.previousElementSibling.remove();
    }
    const pageIntro = isSensorySubpage ? null : pageTitle?.closest('section');
    const pageDescription = isSensorySubpage
      ? (pageTitle?.nextElementSibling?.tagName === 'P' ? pageTitle.nextElementSibling : null)
      : (pageIntro ? Array.from(pageIntro.children).find((element) => element.tagName === 'P') || pageIntro.querySelector('p') : null);
    if (pageIntro) pageIntro.classList.add('guideline-page-intro');
    pageTitle?.classList.add('guideline-page-title');
    pageDescription?.classList.add('guideline-page-description');

    const container = Array.from(mainContent.children).find((element) => element.id !== 'language-switcher');
    if (isSensorySubpage) {
      mainContent.classList.add('guideline-sensory-main');
      container?.classList.add('guideline-sensory-page');
    }
    let link = mainContent.querySelector('a[href="haier_os_design_system.html"], a[href="foundations.html"]');

    if (!link && container) {
      const wrapper = document.createElement('div');
      wrapper.className = 'guideline-top-actions flex items-center justify-between mb-8';
      wrapper.innerHTML = '<a href="haier_os_design_system.html" class="px-4 py-2 bg-white/50 hover:bg-white/90 rounded-full transition-colors flex items-center text-gray-700 shadow-sm border border-gray-200/50 backdrop-blur-md"><span class="text-sm font-semibold"></span></a>';
      container.prepend(wrapper);
      link = wrapper.querySelector('a');
    }

    if (!link) return;
    link.href = 'haier_os_design_system.html';
    link.className = 'guideline-home-link px-4 py-2 bg-white/50 hover:bg-white/90 rounded-full transition-colors flex items-center text-gray-700 shadow-sm border border-gray-200/50 backdrop-blur-md';
    const label = link.querySelector('span') || link;
    if (label !== link) label.className = 'text-sm font-semibold';
    label.dataset.i18nZh = '返回主页';
    label.dataset.i18nEn = 'Home';
    label.textContent = currentLanguage === 'zh' ? '返回主页' : 'Home';

    const actions = link.closest('div');
    const switcher = document.getElementById('language-switcher');
    if (actions) {
      actions.className = 'guideline-top-actions flex items-center justify-between mb-8';
      if (switcher && switcher.parentElement !== actions) actions.append(switcher);
    }
  };

  const applyFallbackTranslations = (language = currentLanguage) => {
    normalizeTopHomeLink();

    document.querySelectorAll('[data-i18n-zh][data-i18n-en]').forEach((element) => {
      element.textContent = element.dataset[language === 'zh' ? 'i18nZh' : 'i18nEn'];
    });

    if (language === 'en') {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (['SCRIPT', 'STYLE', 'SVG', 'PATH', 'CODE'].includes(node.parentElement?.tagName)) continue;
        const text = node.nodeValue.trim();
        if (!FALLBACK_I18N_EN[text]) continue;
        const leading = node.nodeValue.match(/^\s*/)?.[0] || '';
        const trailing = node.nodeValue.match(/\s*$/)?.[0] || '';
        node.nodeValue = `${leading}${FALLBACK_I18N_EN[text]}${trailing}`;
      }
      if (PAGE_TITLE_EN[currentPage]) document.title = PAGE_TITLE_EN[currentPage];
    }
  };

  const initLanguageSwitcher = () => {
    if (!mainContent || document.getElementById('language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.id = 'language-switcher';
    switcher.className = 'fixed top-6 right-6 md:static md:ml-auto z-50 pointer-events-none';
    switcher.innerHTML = `
      <button type="button" class="pointer-events-auto min-w-[72px] px-5 py-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-blue-600 border border-white/60 shadow-sm backdrop-blur-md text-xs font-semibold transition-colors" aria-label="切换中英文" data-language-toggle>
        <span data-language-label>${currentLanguage === 'zh' ? 'EN' : '中文'}</span>
      </button>
    `;

    mainContent.prepend(switcher);
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.dataset.guidelineLanguage = currentLanguage;

    switcher.querySelector('[data-language-toggle]').addEventListener('click', () => {
      const nextLanguage = (localStorage.getItem('haier-guideline-language') || 'zh') === 'zh' ? 'en' : 'zh';
      localStorage.setItem('haier-guideline-language', nextLanguage);
      document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en';
      document.documentElement.dataset.guidelineLanguage = nextLanguage;
      switcher.querySelector('[data-language-label]').textContent = nextLanguage === 'zh' ? 'EN' : '中文';
      applyFallbackTranslations(nextLanguage);
      window.location.reload();
    });

    applyFallbackTranslations(currentLanguage);
  };

  const initNavigationStyleOverrides = () => {
    if (document.getElementById('haier-navigation-style-overrides')) return;

    const style = document.createElement('style');
    style.id = 'haier-navigation-style-overrides';
    style.textContent = `
      :root {
        --brand-hover: #4292FF;
      }

      body {
        background: #f5f7fa !important;
      }

      .aura-background {
        position: fixed !important;
        inset: 0 !important;
        background:
          radial-gradient(circle at 12% 0, #cfe7ff 0, transparent 38%),
          radial-gradient(circle at 90% 85%, #dcecff 0, transparent 40%),
          #f5f8fc !important;
      }

      .aura-background .aura-blob {
        display: none !important;
      }

      #sidebar,
      body > header.glass-panel {
        background: rgba(255, 255, 255, 0.76) !important;
        backdrop-filter: blur(22px) !important;
        -webkit-backdrop-filter: blur(22px) !important;
        border-color: rgba(255, 255, 255, 0.9) !important;
        box-shadow: 0 12px 36px rgba(34, 131, 226, 0.08) !important;
      }

      #sidebar {
        overflow-y: auto !important;
        scrollbar-width: none;
        scrollbar-color: #d0d5dd transparent;
        transition: transform 0.28s ease, opacity 0.28s ease !important;
      }

      #sidebar:hover {
        scrollbar-width: thin;
        scrollbar-color: #d0d5dd transparent;
      }

      #sidebar::-webkit-scrollbar {
        width: 0;
      }

      #sidebar:hover::-webkit-scrollbar {
        width: 8px;
      }

      #sidebar::-webkit-scrollbar-track {
        background: transparent;
      }

      #sidebar::-webkit-scrollbar-thumb {
        background: #d0d5dd;
        border-radius: 10px;
      }

      #sidebar::-webkit-scrollbar-thumb:hover,
      #sidebar::-webkit-scrollbar-thumb:active {
        background: #d0d5dd;
      }

      #main-content {
        background: transparent !important;
        transition: margin-left 0.28s ease !important;
      }

      .guideline-page-intro {
        margin-bottom: 3rem !important;
      }

      .guideline-page-title {
        margin-bottom: 1rem !important;
        color: #111827 !important;
        font-size: 2.25rem !important;
        line-height: 2.5rem !important;
        font-weight: 700 !important;
        letter-spacing: -0.025em !important;
      }

      .guideline-page-description {
        max-width: 48rem !important;
        color: #86868b !important;
        font-size: 1.125rem !important;
        line-height: 1.625 !important;
        font-weight: 400 !important;
      }

      .guideline-sensory-page {
        width: 100% !important;
        max-width: 1200px !important;
        margin-right: auto !important;
        margin-left: auto !important;
        padding-bottom: 6rem !important;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
      }

      #main-content.guideline-sensory-main {
        padding: 1.5rem !important;
      }

      .guideline-sensory-page > .guideline-page-description {
        margin-bottom: 2.25rem !important;
      }

      .guideline-home-link {
        min-width: auto !important;
        padding: 0.5rem 1rem !important;
        border-radius: 9999px !important;
        color: #374151 !important;
        font-size: 0.875rem !important;
        line-height: 1.25rem !important;
      }

      .guideline-home-link:hover {
        color: #374151 !important;
      }

      [data-sidebar-collapse],
      #sidebar-restore-button {
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
        border: 1px solid rgba(209, 213, 219, 0.65);
        border-radius: 0.75rem;
        background: rgba(255, 255, 255, 0.7);
        color: #667085;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
      }

      [data-sidebar-collapse]:hover,
      #sidebar-restore-button:hover {
        color: #2283e2;
        background: rgba(255, 255, 255, 0.96);
      }

      #sidebar-restore-button {
        display: none;
        position: fixed;
        top: 1.5rem;
        left: 1.5rem;
        z-index: 49;
      }

      @media (min-width: 768px) {
        #main-content.guideline-sensory-main {
          padding: 2.5rem !important;
        }

        .guideline-page-title {
          font-size: 3rem !important;
          line-height: 1 !important;
        }

        body.haier-sidebar-collapsed #sidebar {
          transform: translateX(-100%) !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        body.haier-sidebar-collapsed #main-content {
          margin-left: 0 !important;
        }

        body.haier-sidebar-collapsed #sidebar-restore-button {
          display: flex;
        }
      }

      @media (min-width: 1024px) {
        #main-content.guideline-sensory-main {
          padding: 3rem !important;
        }
      }

      [class~="hover:text-blue-600"]:hover,
      [class~="hover:text-blue-700"]:hover,
      .group:hover [class~="group-hover:text-blue-600"],
      .group:hover [class~="group-hover:text-blue-600/70"],
      .group:hover [class~="group-hover:text-blue-700"],
      .icon-tab:hover,
      .tab-btn:hover {
        color: var(--brand-hover) !important;
      }

      [class~="hover:bg-blue-600"]:hover,
      .group:hover [class~="group-hover:bg-blue-600"] {
        background-color: var(--brand-hover) !important;
      }

      .icon-slot:hover {
        color: var(--brand-hover) !important;
        box-shadow: inset 0 0 0 1px var(--brand-hover) !important;
      }

      .haier-logo-container {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 4rem !important;
        height: 4rem !important;
        flex: 0 0 4rem !important;
        font-size: 0 !important;
        background: #2283e2 !important;
        color: #ffffff !important;
        border: 0 !important;
        border-radius: 0.75rem !important;
      }

      .haier-logo-container img {
        display: block;
        width: 78%;
        height: auto;
      }

      .haier-brand-lockup {
        display: block;
        width: min(100%, 12rem);
        height: auto;
      }

      .haier-brand-tagline {
        margin-top: 0.25rem;
        color: #1d1d1f;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      }

      #sidebar {
        background: linear-gradient(180deg, #ffffff 0%, #f7faff 100%) !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        border-radius: 0 !important;
        border-right: 1px solid #e9eff6 !important;
      }

      .sidebar-nav-item.nav-child {
        border-left: 0 !important;
        padding-left: 1.75rem !important;
      }

      .sidebar-nav-item {
        border-left-width: 0 !important;
        font-weight: 400 !important;
      }

      .sidebar-group-trigger {
        font-weight: 400 !important;
      }

      .sidebar-group-panel .sidebar-nav-item:not(.nav-child) {
        padding-left: 1.75rem !important;
      }

      .sidebar-nav-item.nav-disabled {
        color: rgba(107, 114, 128, 0.55) !important;
        cursor: default !important;
        pointer-events: none !important;
      }

      .sidebar-nav-item.nav-child.active {
        border-left-color: transparent !important;
      }

      .sidebar-nav-item.active {
        color: var(--brand-primary, #2283e2) !important;
        background: linear-gradient(90deg, var(--brand-light, #e5f0ff) 0%, transparent 100%) !important;
        border-left-color: transparent !important;
        border-radius: 0 !important;
        font-weight: 400 !important;
      }
    `;
    document.head.appendChild(style);
  };

  const navItemTemplate = (item) => {
    if (item.disabled) {
      return `<span class="sidebar-nav-item nav-disabled block px-4 py-2.5 text-sm font-normal rounded-xl transition-colors" data-nav-id="${item.id || ''}">${navLabel(item.label)}</span>`;
    }

    const [itemPage, itemHash] = item.href.split('#');
    const isCurrentPage =
      item.page === currentPage ||
      (itemPage === currentPage && (!currentHash || itemHash === currentHash)) ||
      (!itemPage && itemHash && itemHash === currentHash);
    const childPrefix = '';
    const baseClasses = item.standalone
      ? 'sidebar-nav-item block px-4 py-2.5 text-sm font-normal text-gray-500/80 hover:text-blue-600 rounded-xl transition-colors'
      : item.child
        ? 'sidebar-nav-item nav-child block px-4 py-2 text-sm font-normal text-gray-600 hover:text-blue-600 pl-7 rounded-r-lg transition-colors'
        : 'sidebar-nav-item block px-4 py-2.5 text-sm font-normal text-gray-700 hover:text-blue-600 rounded-xl transition-colors';

    return `<a href="${normalizeHref(item.href)}" class="${baseClasses}${isCurrentPage ? ' active' : ''}" data-nav-id="${item.id || ''}" data-nav-page="${item.page || ''}">${childPrefix}${navLabel(item.label)}</a>`;
  };

  const groupTemplate = (group) => {
    const isOpen = openGroups.has(group.id);

    return `
      <div class="sidebar-nav-group" data-nav-group="${group.id}">
        <button type="button" class="sidebar-group-trigger w-full flex items-center justify-between gap-3 px-4 py-2.5 mt-2 text-left text-sm font-normal text-gray-500/80 hover:text-blue-600 hover:bg-white/40 rounded-xl transition-colors" aria-expanded="${isOpen}" aria-controls="nav-panel-${group.id}" data-nav-toggle="${group.id}">
          <span>${navLabel(group.label)}</span>
          <svg class="w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id="nav-panel-${group.id}" class="sidebar-group-panel mt-1 space-y-1 ${isOpen ? '' : 'hidden'}">
          ${group.items.map(navItemTemplate).join('')}
        </div>
      </div>`;
  };

  sidebar.innerHTML = `
    <div class="relative p-8 pb-4">
      <button type="button" class="hidden md:flex absolute top-6 right-5" aria-label="收起左侧导航" title="收起导航" data-sidebar-collapse>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <a href="haier_os_design_system.html" class="inline-block" aria-label="Haier NEXT UX Guideline 首页"><img class="haier-brand-lockup" src="assets/brand/haier-logo.svg" alt="Haier"></a>
      <p class="haier-brand-tagline text-sm">NEXT UX Guideline 1.0.0</p>
    </div>
    <nav class="flex-1 px-4 pb-12 space-y-1" aria-label="章节目录">
      ${HAIER_NAV_GROUPS.map(groupTemplate).join('')}
      <div class="mt-2 pt-2 border-t border-white/50">
        ${HAIER_NAV_STANDALONE_ITEMS.map(navItemTemplate).join('')}
    </div>
    </nav>`;

  const sidebarRestoreButton = document.createElement('button');
  sidebarRestoreButton.id = 'sidebar-restore-button';
  sidebarRestoreButton.type = 'button';
  sidebarRestoreButton.setAttribute('aria-label', '展开左侧导航');
  sidebarRestoreButton.setAttribute('title', '展开导航');
  sidebarRestoreButton.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
  document.body.appendChild(sidebarRestoreButton);

  const setSidebarCollapsed = (collapsed, persist = true) => {
    document.body.classList.toggle('haier-sidebar-collapsed', collapsed);
    sidebar.querySelector('[data-sidebar-collapse]')?.setAttribute('aria-expanded', String(!collapsed));
    sidebarRestoreButton.setAttribute('aria-expanded', String(!collapsed));
    if (persist) localStorage.setItem('haier-guideline-sidebar-collapsed', collapsed ? '1' : '0');
  };

  setSidebarCollapsed(localStorage.getItem('haier-guideline-sidebar-collapsed') === '1', false);
  sidebar.querySelector('[data-sidebar-collapse]')?.addEventListener('click', () => setSidebarCollapsed(true));
  sidebarRestoreButton.addEventListener('click', () => setSidebarCollapsed(false));

  document.querySelectorAll('.haier-logo-container').forEach((logo) => {
    if (logo.querySelector('img')) return;
    logo.setAttribute('aria-label', 'Haier');
    logo.innerHTML = '<img src="assets/brand/haier-wordmark-white.png" alt="Haier">';
  });

  const expandGroup = (groupId) => {
    openGroups.clear();
    sidebar.querySelectorAll('[data-nav-toggle]').forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
      button.querySelector('svg')?.classList.remove('rotate-180');
    });
    sidebar.querySelectorAll('.sidebar-group-panel').forEach((panel) => {
      panel.classList.add('hidden');
    });

    openGroups.add(groupId);
    const group = sidebar.querySelector(`[data-nav-group="${groupId}"]`);
    const trigger = sidebar.querySelector(`[data-nav-toggle="${groupId}"]`);
    const panel = sidebar.querySelector(`#nav-panel-${groupId}`);

    group?.classList.add('is-open');
    trigger?.setAttribute('aria-expanded', 'true');
    trigger?.querySelector('svg')?.classList.add('rotate-180');
    panel?.classList.remove('hidden');
  };

  const toggleGroup = (groupId) => {
    const isOpen = openGroups.has(groupId);
    const trigger = sidebar.querySelector(`[data-nav-toggle="${groupId}"]`);
    const panel = sidebar.querySelector(`#nav-panel-${groupId}`);

    if (isOpen) {
      openGroups.delete(groupId);
      trigger?.setAttribute('aria-expanded', 'false');
      trigger?.querySelector('svg')?.classList.remove('rotate-180');
      panel?.classList.add('hidden');
    } else {
      expandGroup(groupId);
    }
  };

  sidebar.querySelectorAll('[data-nav-toggle]').forEach((button) => {
    button.addEventListener('click', () => toggleGroup(button.dataset.navToggle));
  });

  const setMenuOpen = (open) => {
    sidebar.classList.toggle('hidden', !open && window.innerWidth < 768);
    sidebar.classList.toggle('flex', open || window.innerWidth >= 768);
    sidebar.classList.toggle('z-50', open);
    sidebar.classList.toggle('bg-white/90', open);
    sidebar.setAttribute('aria-hidden', String(!open && window.innerWidth < 768));
    mobileButton?.setAttribute('aria-expanded', String(open));
    backdrop?.classList.toggle('hidden', !open);
  };

  mobileButton?.setAttribute('aria-controls', 'sidebar');
  mobileButton?.setAttribute('aria-expanded', 'false');
  mobileButton?.addEventListener('click', () => setMenuOpen(sidebar.classList.contains('hidden')));
  backdrop?.addEventListener('click', () => setMenuOpen(false));

  const navLinks = sidebar.querySelectorAll('.sidebar-nav-item');
  const setActiveNavLink = (activeLink) => {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link === activeLink);
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href') || '';
      const [page, hash] = href.split('#');
      const isSamePageHash = hash && (!page || page === currentPage);

      if (isSamePageHash && mainContent) {
        const target = document.getElementById(hash);
        if (target) {
          event.preventDefault();
          scrollSpyPausedUntil = Date.now() + 300;
          setActiveNavLink(link);
          const previousScrollBehavior = mainContent.style.scrollBehavior;
          mainContent.style.scrollBehavior = 'auto';
          mainContent.scrollTop = Math.max(target.offsetTop - 40, 0);
          mainContent.style.scrollBehavior = previousScrollBehavior;
          history.replaceState(null, '', `#${hash}`);
        }
      }

      if (window.innerWidth < 768) setMenuOpen(false);
    });
  });

  initNavigationStyleOverrides();
  initLanguageSwitcher();

  if (mainContent && currentHash) {
    const initialTarget = document.getElementById(currentHash);
    if (initialTarget) {
      requestAnimationFrame(() => {
        mainContent.scrollTop = Math.max(initialTarget.offsetTop - 40, 0);
        const initialLink = sidebar.querySelector(`[data-nav-id="${currentHash}"]`);
        if (initialLink) {
          scrollSpyPausedUntil = Date.now() + 300;
          setActiveNavLink(initialLink);
        }
      });
    }
  }

  if (mainContent) {
    const observedSections = [...document.querySelectorAll('[id]')].filter((element) =>
      sidebar.querySelector(`[data-nav-id="${element.id}"]`)
    );

    if (observedSections.length) {
      const updateActiveLink = () => {
        if (Date.now() < scrollSpyPausedUntil) return;

        let currentId = observedSections[0]?.id || '';
        observedSections.forEach((section) => {
          if (mainContent.scrollTop >= section.offsetTop - 120) currentId = section.id;
        });
        navLinks.forEach((link) => {
          link.classList.toggle('active', Boolean(link.dataset.navId) && link.dataset.navId === currentId);
        });

        const activeGroup = HAIER_NAV_GROUPS.find((group) =>
          group.items.some((item) => item.id === currentId)
        );
        if (activeGroup) expandGroup(activeGroup.id);
      };

      mainContent.addEventListener('scroll', updateActiveLink, { passive: true });
      updateActiveLink();
    }
  }

  if (window.innerWidth >= 768) {
    sidebar.setAttribute('aria-hidden', 'false');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      sidebar.classList.remove('hidden');
      sidebar.classList.add('flex');
      sidebar.setAttribute('aria-hidden', 'false');
      backdrop?.classList.add('hidden');
    } else if (!sidebar.classList.contains('z-50')) {
      sidebar.classList.add('hidden');
      sidebar.setAttribute('aria-hidden', 'true');
    }
  });
})();
