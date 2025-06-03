# Core Modules

TextCSS 的核心模块提供了一系列强大的文本样式和动画效果。每个模块都是独立的，可以根据需要单独使用。

## 可用模块

### Gradient Text
为文字添加渐变色效果，支持线性和径向渐变，可自定义颜色、方向和动画。
[了解更多 →](./gradient-text)

### Text Blur
实现文字模糊效果，适用于加载状态或背景装饰，支持模糊度和交互动画。
[了解更多 →](./text-blur)

### Glitch Text
模拟数字故障风格的文字特效，支持颜色偏移、抖动、切片等可调节参数。
[了解更多 →](./glitch-text)

### Text Animation
提供多种文字动画效果，包括打字机效果、淡入淡出、滑动等。
[了解更多 →](./text-animation)

### Outline
为文字添加轮廓效果，支持自定义颜色、宽度和偏移。
[了解更多 →](./outline)

### Neon
创建霓虹灯效果，让文字发光，支持自定义颜色和发光强度。
[了解更多 →](./neon)

### Transform
提供文字变换效果，包括缩放、旋转和倾斜。
[了解更多 →](./transform)

### Fancy Underline
为文字添加装饰性下划线，支持多种样式和动画效果。
[了解更多 →](./fancy-underline)

### Text Shadow
添加文字阴影效果，支持自定义颜色、模糊度和偏移。
[了解更多 →](./text-shadow)

## 使用方法

所有模块都使用 CSS 类名来应用效果。例如：

```html
<!-- 添加渐变文字效果 -->
<div class="text-gradient">Gradient Text</div>

<!-- 添加模糊文字效果 -->
<div class="text-blur">Blurred Text</div>

<!-- 添加故障文字效果 -->
<div class="text-glitch" data-text="Glitch Text">Glitch Text</div>

<!-- 添加打字机效果 -->
<div class="textcss-typing">Hello World</div>

<!-- 添加霓虹灯效果 -->
<div class="textcss-neon">Glowing Text</div>
```

## 自定义

每个模块都提供了 CSS 变量来自定义效果。您可以在 `:root` 中设置这些变量：

```css
:root {
  /* 渐变文字相关变量 */
  --textcss-gradient-colors: #ff6b6b, #4ecdc4;
  --textcss-gradient-direction: to right;

  /* 模糊文字相关变量 */
  --textcss-blur-amount: 2px;
  --textcss-blur-duration: 0.3s;

  /* 故障文字相关变量 */
  --textcss-glitch-offset: 2px;
  --textcss-glitch-intensity: 0.1;

  /* 动画相关变量 */
  --textcss-animation-duration: 0.5s;

  /* 轮廓相关变量 */
  --textcss-outline-color: #000;

  /* 其他变量... */
}
```

## 浏览器支持

TextCSS 使用现代 CSS 特性，支持所有现代浏览器：

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 性能考虑

所有效果都经过优化，以确保最佳性能：

- 使用 CSS 原生动画而不是 JavaScript
- 最小化重绘和重排
- 使用 GPU 加速的变换
- 优化的选择器性能
