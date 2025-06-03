# Text Shadow

TextCSS 的文字阴影模块为文字添加了精美的阴影效果，让您的文本更具层次感。

## 可用效果

### 基础阴影 (textcss-shadow)

为文字添加可自定义的阴影效果。

```html
<div class="textcss-shadow">Shadowed Text</div>
```

## 自定义变量

您可以通过以下 CSS 变量自定义阴影效果：

```css
:root {
  /* 阴影颜色 */
  --textcss-shadow-color: rgba(0, 0, 0, 0.5);

  /* 阴影模糊度 */
  --textcss-shadow-blur: 2px;

  /* 阴影水平偏移 */
  --textcss-shadow-offset-x: 1px;

  /* 阴影垂直偏移 */
  --textcss-shadow-offset-y: 1px;
}
```

## 示例

### 基础用法

```html
<!-- 基础阴影 -->
<div class="textcss-shadow">Hello World</div>
```

### 自定义阴影

```css
/* 自定义颜色 */
.textcss-shadow {
  --textcss-shadow-color: rgba(255, 0, 0, 0.5);
}

/* 自定义模糊度 */
.textcss-shadow {
  --textcss-shadow-blur: 4px;
}

/* 自定义偏移 */
.textcss-shadow {
  --textcss-shadow-offset-x: 2px;
  --textcss-shadow-offset-y: 2px;
}

/* 组合效果 */
.textcss-shadow {
  --textcss-shadow-color: rgba(0, 0, 255, 0.5);
  --textcss-shadow-blur: 3px;
  --textcss-shadow-offset-x: 2px;
  --textcss-shadow-offset-y: 2px;
}
```

### 多层阴影

```css
/* 创建多层阴影效果 */
.textcss-shadow {
  text-shadow:
    var(--textcss-shadow-offset-x) var(--textcss-shadow-offset-y) var(--textcss-shadow-blur) var(--textcss-shadow-color),
    calc(var(--textcss-shadow-offset-x) * 2) calc(var(--textcss-shadow-offset-y) * 2)
      calc(var(--textcss-shadow-blur) * 2) var(--textcss-shadow-color);
}
```

## 注意事项

1. 阴影效果使用 CSS `text-shadow` 属性实现
2. 支持所有颜色格式（HEX、RGB、HSL等）
3. 可以通过 CSS 变量轻松自定义
4. 支持响应式设计
5. 支持多层阴影效果

## 浏览器支持

- Chrome 4+
- Firefox 5+
- Safari 4+
- Edge 12+

## 性能优化

- 使用 `text-shadow` 实现阴影效果，确保最佳性能
- 避免过度使用多层阴影，可能影响性能
- 使用 `will-change` 提示浏览器优化渲染性能
- 考虑使用 `transform: translateZ(0)` 启用 GPU 加速
