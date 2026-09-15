# 一念轻应用读取说明

## 应用身份

- 应用名称：Haier Design Guideline
- 应用类型：公司内部设计规范静态网站
- 唯一入口：`index.html`
- 默认语言：简体中文

## 必须遵循的读取规则

1. 只把 `index.html` 识别为应用入口。
2. `Haier_Guideline.html` 和 `haier_os_design_system.html` 是历史链接兼容跳转页，不能作为独立页面。
3. 根目录下的其他 HTML 是 `index.html` 的内容子页面，不能重新组合、改写或生成另一套页面。
4. 左侧导航的唯一数据源是 `haier-nav.js` 中的 `HAIER_NAV_GROUPS`。
5. 保留项目原有 HTML、CSS、JavaScript、图片、字体和交互，不根据文件内容重新设计界面。
6. Logo 必须使用 `assets/brand/haier-logo.svg`；蓝色背景可使用 `assets/brand/haier-wordmark-white.png`。禁止用文字方块或其他图形替代。
7. 不从文件名推断页面版本，不创建源码中不存在的新页面。

## 页面关系

`index.html` 是首页；品牌、原则、基础、组件、硬件、动效、多感官、AI、资产与更新日志
均由统一导航进入。页面之间的链接和锚点应按源码原样工作。
