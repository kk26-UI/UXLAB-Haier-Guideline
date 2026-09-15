# Haier Design Guideline

公司内部使用的 Haier Design Guideline 静态站点。

## 发布入口

唯一正式入口是 [`index.html`](index.html)。GitHub Pages、静态托管平台和一念轻应用
均应从该文件启动。`Haier_Guideline.html` 与 `haier_os_design_system.html` 仅用于兼容
历史链接，不是独立页面，也不应被识别为应用入口。

## 页面与资源约定

- `index.html`：唯一首页。
- `haier-nav.js`：所有正式页面共用的导航结构、导航样式和中英文逻辑。
- `assets/brand/haier-logo.svg`：导航和浅色背景使用的正式 Haier Logo。
- `assets/brand/haier-wordmark-white.png`：蓝色背景使用的正式 Haier Logo。
- 其余根目录 HTML：由首页和统一导航访问的正式内容页，不是独立应用。

请严格保留现有页面结构、视觉样式、文案与资源引用，不要根据单个 HTML 文件重新
生成侧栏、Logo 或页面。左侧导航以 `haier-nav.js` 中的 `HAIER_NAV_GROUPS` 为唯一依据。

## 本地运行

直接打开 `index.html` 即可使用，无需安装依赖或执行构建。
