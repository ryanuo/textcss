# Text Animation

TextCSS 提供了一系列文本动画效果，让你的文字更加生动有趣。

## 动画变量

你可以通过 CSS 变量来自定义动画效果：

```css
:root {
  --textcss-animation-duration: 0.5s; /* 动画持续时间 */
  --textcss-animation-timing: ease-in-out; /* 动画时间函数 */
  --textcss-animation-delay: 0s; /* 动画延迟时间 */
  --textcss-animation-iteration: 1; /* 动画重复次数 */
  --textcss-animation-direction: normal; /* 动画方向 */
  --textcss-animation-fill-mode: forwards; /* 动画填充模式 */
}
```

## 动画效果

### 打字机效果

创建一个打字机效果，文字会逐字显示：

```html
<div class="textcss-typing">Hello, World!</div>
```

<demo html="../../demos/text-animation/typing.html" />

### 淡入效果

文字会从透明逐渐显示：

```html
<div class="textcss-fade-in">Fade In Text</div>
```

<demo html="../../demos/text-animation/fade-in.html" />

### 滑入效果

文字会从下方滑入：

```html
<div class="textcss-slide-in">Slide In Text</div>
```

<demo html="../../demos/text-animation/slide-in.html" />

### 弹跳效果

文字会有弹跳动画：

```html
<div class="textcss-bounce">Bounce Text</div>
```

<demo html="../../demos/text-animation/bounce.html" />

### 摇晃效果

文字会有左右摇晃的动画：

```html
<div class="textcss-shake">Shake Text</div>
```

<demo html="../../demos/text-animation/shake.html" />

### 脉冲效果

文字会有缩放脉冲动画：

```html
<div class="textcss-pulse">Pulse Text</div>
```

<demo html="../../demos/text-animation/pulse.html" />

### 旋转效果

文字会旋转：

```html
<div class="textcss-spin">Spin Text</div>
```

<demo html="../../demos/text-animation/spin.html" />

## 自定义动画

你可以通过修改 CSS 变量来自定义动画效果。例如，让动画重复 3 次：

```css
:root {
  --textcss-animation-iteration: 3;
}
```

或者让动画无限重复：

```css
:root {
  --textcss-animation-iteration: infinite;
}
```

## 性能考虑

- 动画效果使用了 CSS transform 和 opacity 属性，这些属性不会触发重排，性能较好
- 对于需要重复播放的动画，建议使用 `infinite` 或适当的重复次数
- 在移动设备上，建议适当减少动画的复杂度，以保持良好的性能

## 浏览器支持

所有动画效果都使用了标准的 CSS 动画属性，支持所有现代浏览器：

- Chrome 4+
- Firefox 5+
- Safari 4+
- Opera 12+
- Edge 12+

## 性能优化

- 使用 `transform` 和 `opacity` 属性实现动画，确保最佳性能
- 避免使用可能触发重排的属性
- 使用 `will-change` 提示浏览器优化动画性能
