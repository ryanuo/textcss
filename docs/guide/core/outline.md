# Outline

TextCSS 的轮廓效果模块为文字添加了精美的轮廓效果，让您的文本更具视觉冲击力。

## 可用效果

### 基础轮廓 (textcss-outline)

为文字添加基础轮廓效果。

```html
<div class="textcss-outline">Outlined Text</div>
```

<demo html="../../demos/outline/outline.html" />

### 偏移轮廓 (textcss-outline-offset)

为文字添加带偏移的轮廓效果。

```html
<div class="textcss-outline-offset">Offset Outlined Text</div>
```

<demo html="../../demos/outline/outline-offset.html" />

## 自定义变量

您可以通过以下 CSS 变量自定义轮廓效果：

```css
:root {
  /* 轮廓颜色 */
  --textcss-outline-color: #000;

  /* 轮廓宽度 */
  --textcss-outline-width: 2px;

  /* 轮廓偏移 */
  --textcss-outline-offset: 0;
}
```

## 示例

### 基础用法

```html
<!-- 基础轮廓 -->
<div class="textcss-outline">Hello World</div>

<!-- 偏移轮廓 -->
<div class="textcss-outline-offset">Offset Text</div>
```

### 自定义轮廓

```css
/* 自定义基础轮廓 */
.textcss-outline {
  --textcss-outline-color: #ff0000;
  --textcss-outline-width: 3px;
}

/* 自定义偏移轮廓 */
.textcss-outline-offset {
  --textcss-outline-color: #00ff00;
  --textcss-outline-width: 2px;
  --textcss-outline-offset: 2px;
}
```

## 注意事项

1. 轮廓效果使用 `-webkit-text-stroke` 和 `text-shadow` 实现
2. 支持所有颜色格式（HEX、RGB、HSL等）
3. 可以通过 CSS 变量轻松自定义
4. 支持响应式设计

## 浏览器支持

- Chrome 4+
- Firefox 5+
- Safari 4+
- Edge 12+

## 性能优化

- 使用 `text-shadow` 实现偏移效果，确保最佳性能
- 避免过度使用偏移效果，可能影响性能
- 使用 `will-change` 提示浏览器优化渲染性能
