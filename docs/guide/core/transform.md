# Transform

TextCSS 的变换效果模块为文字添加了各种变换效果，让您的文本更具动感。

## 可用效果

### 基础变换 (textcss-transform)

为文字添加缩放、旋转和倾斜效果。

```html
<div class="textcss-transform">Transformed Text</div>
```

## 自定义变量

您可以通过以下 CSS 变量自定义变换效果：

```css
:root {
  /* 缩放比例 */
  --textcss-transform-scale: 1;

  /* 旋转角度 */
  --textcss-transform-rotate: 0deg;

  /* 倾斜角度 */
  --textcss-transform-skew: 0deg;
}
```

## 示例

### 基础用法

```html
<!-- 基础变换 -->
<div class="textcss-transform">Hello World</div>
```

### 自定义变换

```css
/* 自定义缩放效果 */
.textcss-transform {
  --textcss-transform-scale: 1.2;
}

/* 自定义旋转效果 */
.textcss-transform {
  --textcss-transform-rotate: 15deg;
}

/* 自定义倾斜效果 */
.textcss-transform {
  --textcss-transform-skew: 10deg;
}

/* 组合变换 */
.textcss-transform {
  --textcss-transform-scale: 1.1;
  --textcss-transform-rotate: 5deg;
  --textcss-transform-skew: 2deg;
}
```

### 悬停效果

```css
/* 悬停时放大 */
.textcss-transform:hover {
  --textcss-transform-scale: 1.2;
}

/* 悬停时旋转 */
.textcss-transform:hover {
  --textcss-transform-rotate: 10deg;
}

/* 悬停时组合效果 */
.textcss-transform:hover {
  --textcss-transform-scale: 1.1;
  --textcss-transform-rotate: 5deg;
  --textcss-transform-skew: 2deg;
}
```

## 注意事项

1. 变换效果使用 CSS `transform` 属性实现
2. 支持所有角度单位（deg、rad、turn等）
3. 可以通过 CSS 变量轻松自定义
4. 支持响应式设计
5. 支持过渡动画

## 浏览器支持

- Chrome 4+
- Firefox 5+
- Safari 4+
- Edge 12+

## 性能优化

- 使用 `transform` 实现变换效果，确保最佳性能
- 使用 `will-change: transform` 提示浏览器优化性能
- 避免过度使用变换效果，可能影响性能
- 使用 `transform-origin` 控制变换原点
