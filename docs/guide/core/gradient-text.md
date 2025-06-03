# Gradient Text

为文字添加渐变色效果，支持线性和径向渐变，可自定义颜色、方向和动画。

## 在线演示

### 基础渐变效果

<demo html="../../demos/gradient-text/basic.html" />

### 自定义渐变效果

<demo html="../../demos/gradient-text/custom.html" />

<style>
.demo-container {
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 1rem 0;
}

.demo-container h2 {
  margin: 1rem 0;
  font-size: 2rem;
}

.custom-gradient-1 {
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.custom-gradient-2 {
  background: linear-gradient(to right, #2193b0, #6dd5ed);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.custom-gradient-3 {
  background: linear-gradient(to bottom, #134E5E, #71B280);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>

## 基本用法

使用 `text-gradient` 类来应用基本的渐变文字效果：

```html
<h1 class="text-gradient">Gradient Text</h1>
```

## 渐变类型

### 线性渐变

默认使用线性渐变，可以通过 `text-gradient` 类应用：

```html
<div class="text-gradient">Linear Gradient Text</div>
```

### 径向渐变

使用 `text-gradient-radial` 类来应用径向渐变效果：

```html
<div class="text-gradient-radial">Radial Gradient Text</div>
```

### 动画渐变

使用 `text-gradient-animated` 类来添加流动的渐变动画效果：

```html
<div class="text-gradient-animated">Animated Gradient Text</div>
```

## 自定义

### 使用 Mixin

在 SCSS 中，您可以使用 `gradient-text` mixin 来自定义渐变效果：

```scss
.my-custom-gradient {
  @include gradient-text($colors: $gradient-colors, $direction: $gradient-direction, $type: linear);
}
```

### 使用 CSS 变量

您可以通过 CSS 变量来自定义渐变效果：

```css
:root {
  /* 渐变颜色 */
  --textcss-gradient-colors: #ff6b6b, #4ecdc4, #45b7d1;

  /* 渐变方向 */
  --textcss-gradient-direction: to right;

  /* 动画持续时间 */
  --textcss-gradient-duration: 3s;
}
```

## 参数说明

### gradient-text Mixin

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| $colors | List | $gradient-colors | 渐变色列表 |
| $direction | String | $gradient-direction | 渐变方向 |
| $type | String | linear | 渐变类型 (linear/radial) |

### animated-gradient-text Mixin

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| $colors | List | $gradient-colors | 渐变色列表 |
| $direction | String | $gradient-direction | 渐变方向 |
| $duration | Number | $gradient-duration | 动画持续时间 |

## 示例

### 基础渐变

```html
<div class="text-gradient">Basic Gradient</div>
```

### 自定义方向

```scss
.custom-direction {
  @include gradient-text($direction: 45deg, $colors: $gradient-colors);
}
```

### 多色渐变

```scss
.multi-color {
  @include gradient-text(
    $colors: (
      #ff6b6b,
      #4ecdc4,
      #45b7d1,
      #96e6a1,
    )
  );
}
```

### 动画渐变

```scss
.animated {
  @include animated-gradient-text($colors: $gradient-colors, $direction: $gradient-direction, $duration: 5s);
}
```

## 浏览器支持

渐变文字效果支持所有现代浏览器：

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 注意事项

1. 确保文字有足够的对比度，以保证可读性
2. 动画渐变效果可能会影响性能，建议适度使用
3. 在深色背景上使用浅色渐变，在浅色背景上使用深色渐变
4. 考虑添加 fallback 颜色，以支持不支持渐变效果的浏览器
