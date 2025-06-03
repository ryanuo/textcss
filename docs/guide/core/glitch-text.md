# Glitch Text

模拟数字故障风格的文字特效，支持颜色偏移、抖动、切片等可调节参数。

## 在线演示

### 基础故障效果

<demo html="../../demos/glitch-text/basic.html" />

### 自定义故障效果

<demo html="../../demos/glitch-text/custom.html" />

## 基本用法

使用 `text-glitch` 类来应用基本的故障效果：

```html
<h1 class="text-glitch" data-text="Glitch Text">Glitch Text</h1>
```

## 自定义效果

### 使用 CSS 变量

可以通过 CSS 变量来自定义故障效果：

```css
:root {
  --textcss-glitch-offset: 2px; /* 颜色偏移距离 */
  --textcss-glitch-intensity: 0.1; /* 故障强度 */
  --textcss-glitch-duration: 0.3s; /* 动画持续时间 */
}

/* 自定义故障效果 */
.custom-glitch {
  --textcss-glitch-offset: 3px;
  --textcss-glitch-duration: 0.5s;
}
```

### 预设类

库提供了几个预设的故障效果类：

```html
<!-- 基础故障效果 -->
<h1 class="text-glitch" data-text="Basic Glitch">Basic Glitch</h1>

<!-- 增强故障效果 -->
<h1 class="text-glitch-intense" data-text="Intense Glitch">Intense Glitch</h1>

<!-- 慢速故障效果 -->
<h1 class="text-glitch-slow" data-text="Slow Glitch">Slow Glitch</h1>
```

## 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `--textcss-glitch-offset` | `length` | `2px` | 颜色偏移距离 |
| `--textcss-glitch-intensity` | `number` | `0.1` | 故障强度 |
| `--textcss-glitch-duration` | `time` | `0.3s` | 动画持续时间 |

## 注意事项

1. 必须设置 `data-text` 属性，其值应与文本内容相同
2. 故障效果使用伪元素实现，确保父元素有足够的空间
3. 可以通过组合多个类来创建更复杂的效果
