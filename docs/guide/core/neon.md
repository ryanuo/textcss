# Neon

TextCSS 的霓虹灯效果模块为文字添加了炫酷的发光效果，让您的文本在黑暗中闪耀。

## 可用效果

### 静态霓虹 (textcss-neon-static)

创建一个静态的霓虹灯发光效果。

```html
<div class="textcss-neon-static">Neon Text</div>
```

<demo html="../../demos/neon/neon-static.html" />

### 动态霓虹 (textcss-neon)

创建一个带有呼吸效果的动态霓虹灯效果。

```html
<div class="textcss-neon">Pulsing Neon Text</div>
```

<demo html="../../demos/neon/neon-pulse.html" />

## 自定义变量

您可以通过以下 CSS 变量自定义霓虹灯效果：

```css
:root {
  /* 霓虹灯颜色 */
  --textcss-neon-color: #0ff;

  /* 霓虹灯发光效果 */
  --textcss-neon-glow:
    0 0 5px var(--textcss-neon-color), 0 0 10px var(--textcss-neon-color), 0 0 20px var(--textcss-neon-color);

  /* 文字颜色 */
  --textcss-neon-text-color: #fff;
}
```

## 示例

### 基础用法

```html
<!-- 静态霓虹效果 -->
<div class="textcss-neon-static">Static Neon</div>

<!-- 动态霓虹效果 -->
<div class="textcss-neon">Pulsing Neon</div>
```

### 自定义霓虹效果

```css
/* 自定义静态霓虹效果 */
.textcss-neon-static {
  --textcss-neon-color: #ff00ff;
  --textcss-neon-text-color: #ffffff;
}

/* 自定义动态霓虹效果 */
.textcss-neon {
  --textcss-neon-color: #00ff00;
  --textcss-neon-text-color: #ffffff;
  --textcss-neon-glow:
    0 0 10px var(--textcss-neon-color), 0 0 20px var(--textcss-neon-color), 0 0 30px var(--textcss-neon-color);
}
```

<demo html="../../demos/neon/neon-custom.html" />

## 注意事项

1. 霓虹效果使用 `text-shadow` 实现
2. 支持所有颜色格式（HEX、RGB、HSL等）
3. 可以通过 CSS 变量轻松自定义
4. 支持响应式设计
5. 动态效果使用 CSS 动画实现

## 浏览器支持

- Chrome 4+
- Firefox 5+
- Safari 4+
- Edge 12+

## 性能优化

- 使用 `text-shadow` 实现发光效果，确保最佳性能
- 避免过度使用多层阴影，可能影响性能
- 使用 `will-change` 提示浏览器优化动画性能
- 动态效果使用 `opacity` 实现呼吸效果，减少重绘
