# Text Animation

TextCSS 的文字动画模块提供了一系列优雅的文字动画效果，让您的文本更具表现力。

## 可用效果

### 打字机效果 (textcss-typing)

创建一个模拟打字机效果的文字动画。

```html
<div class="textcss-typing">Hello World</div>
```

<demo html="../../demos/text-animation/typing.html" />

### 淡入效果 (textcss-fade-in)

文字从透明到不透明的淡入动画。

```html
<div class="textcss-fade-in">Fade In Text</div>
```

<demo html="../../demos/text-animation/fade-in.html" />

### 滑入效果 (textcss-slide-in)

文字从下方滑入的动画效果。

```html
<div class="textcss-slide-in">Slide In Text</div>
```

<demo html="../../demos/text-animation/slide-in.html" />

## 自定义变量

您可以通过以下 CSS 变量自定义动画效果：

```css
:root {
  /* 动画持续时间 */
  --textcss-animation-duration: 0.5s;

  /* 动画时间函数 */
  --textcss-animation-timing: ease-in-out;

  /* 动画延迟时间 */
  --textcss-animation-delay: 0s;
}
```

## 示例

### 基础用法

```html
<!-- 打字机效果 -->
<div class="textcss-typing">Welcome to TextCSS</div>

<!-- 淡入效果 -->
<div class="textcss-fade-in">This text fades in</div>

<!-- 滑入效果 -->
<div class="textcss-slide-in">This text slides in</div>
```

### 自定义动画

```css
/* 自定义打字机效果 */
.textcss-typing {
  --textcss-animation-duration: 2s;
  --textcss-animation-timing: steps(30, end);
  --textcss-animation-delay: 0.5s;
}

/* 自定义淡入效果 */
.textcss-fade-in {
  --textcss-animation-duration: 1s;
  --textcss-animation-timing: ease-out;
}

/* 自定义滑入效果 */
.textcss-slide-in {
  --textcss-animation-duration: 0.8s;
  --textcss-animation-timing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

<demo html="../../demos/text-animation/custom.html" />

## 注意事项

1. 动画效果使用 CSS 原生动画，性能优秀
2. 所有动画都支持暂停和恢复
3. 可以通过 CSS 变量轻松自定义
4. 支持响应式设计

## 浏览器支持

- Chrome 4+
- Firefox 5+
- Safari 4+
- Edge 12+

## 性能优化

- 使用 `transform` 和 `opacity` 属性实现动画，确保最佳性能
- 避免使用可能触发重排的属性
- 使用 `will-change` 提示浏览器优化动画性能
