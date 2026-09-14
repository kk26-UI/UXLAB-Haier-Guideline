# Haier Design Guideline

静态设计规范站点。直接打开 `haier_os_design_system.html` 即可进入首页。

## 目录结构

- `*.html`：站点页面。保留在根目录以维持现有页面地址与导航链接。
- `haier-nav.js`：全站导航、语言切换与共用样式。
- `assets/brand/`：品牌标识与品牌视觉资源。
- `assets/icons/`：图标、数码字体与状态符号资源。
- `assets/examples/iconography/`：图标规范中的示例与正误对照图。
- `tmp/icon-extraction/`：图标提取过程产生的工作文件，不属于线上页面资源。
- `tmp/root-leftovers/`：从根目录移出的系统残留或待确认文件，可安全复查后清理。

## 维护约定

- 新增页面时同步更新 `haier-nav.js` 中的导航配置。
- 页面使用相对路径引用资源，并按资源用途放入对应的 `assets` 子目录。
- 临时导出、提取和检查文件统一放入 `tmp/`，不要混入站点根目录。
