# Fancy Underline

TextCSS 的装饰性下划线模块为文字添加了精美的下划线效果，让您的文本更具设计感。

## 可用效果

### 装饰性下划线 (textcss-underline)

为文字添加可自定义的装饰性下划线效果。

```html
<div class="textcss-underline">Underlined Text</div>
```

## 自定义变量

您可以通过以下 CSS 变量自定义下划线效果：

```css
:root {
  /* 下划线颜色 */
  --textcss-underline-color: currentColor;

  /* 下划线宽度 */
  --textcss-underline-width: 2px;

  /* 下划线样式 */
  --textcss-underline-style: solid;

  /* 下划线偏移 */
  --textcss-underline-offset: 2px;
}
```

## 示例

### 基础用法

```html
<!-- 基础下划线 -->
<div class="textcss-underline">Hello World</div>
```

### 自定义下划线

```css
/* 自定义颜色 */
.textcss-underline {
  --textcss-underline-color: #ff0000;
}

/* 自定义宽度 */
.textcss-underline {
  --textcss-underline-width: 3px;
}

/* 自定义样式 */
.textcss-underline {
  --textcss-underline-style: dashed;
}

/* 自定义偏移 */
.textcss-underline {
  --textcss-underline-offset: 4px;
}

/* 组合效果 */
.textcss-underline {
  --textcss-underline-color: #00ff00;
  --textcss-underline-width: 2px;
  --textcss-underline-style: wavy;
  --textcss-underline-offset: 3px;
}
```

### 悬停效果

```css
/* 悬停时改变颜色 */
.textcss-underline:hover {
  --textcss-underline-color: #ff00ff;
}

/* 悬停时改变宽度 */
.textcss-underline:hover {
  --textcss-underline-width: 4px;
}

/* 悬停时改变样式 */
.textcss-underline:hover {
  --textcss-underline-style: double;
}
```

## 注意事项

1. 下划线效果使用伪元素实现
2. 支持所有颜色格式（HEX、RGB、HSL等）
3. 可以通过 CSS 变量轻松自定义
4. 支持响应式设计
5. 支持过渡动画

## 浏览器支持

- Chrome 4+
- Firefox 5+
- Safari 4+
- Edge 12+

## 性能优化

- 使用伪元素实现下划线效果，减少 DOM 节点
- 使用 `transform` 实现动画效果，确保最佳性能
- 避免过度使用动画效果，可能影响性能
- 使用 `will-change` 提示浏览器优化动画性能
