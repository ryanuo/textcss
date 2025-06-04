# TextCSS Core

TextCSS Core is a powerful SCSS library that provides a collection of text effects and animations for modern web applications. This package contains the core functionality and modules for text styling.

## Features

### Text Effects
- **Text Shadow**: Add depth and dimension to your text with customizable shadow effects
- **Fancy Underline**: Create stylish and animated underlines for your text
- **Text Animation**: Various text animations including typing, fade, and bounce effects
- **Transform**: Apply various text transformations like rotation, scale, and skew
- **Neon**: Create glowing neon text effects with customizable colors and intensity
- **Outline**: Add customizable text outlines with various styles
- **Gradient Text**: Apply beautiful gradient effects to your text
- **Text Blur**: Create blurred text effects with different intensity levels
- **Glitch Text**: Add retro-style glitch effects to your text

## Installation

```bash
npm install @textcss/core
```

## Usage

Import the core styles in your SCSS file:

```scss
@use '@textcss/core';
```

### Available Variables

The package provides a set of customizable variables that you can override:

```scss
// Colors
$primary-color: #333;
$secondary-color: #666;
$accent-color: #007bff;

// Text Effects
$text-shadow-color: rgba(0, 0, 0, 0.3);
$text-shadow-blur: 2px;
$text-shadow-offset: 1px;

// Animation
$transition-duration: 0.3s;
$transition-timing: ease;

// Blur
$blur-sm: 1px;
$blur-md: 2px;
$blur-lg: 4px;

// Glitch
$glitch-offset: 2px;
$glitch-intensity: 0.1;
$glitch-duration: 0.3s;

// Gradient
$gradient-colors: (#ff6b6b, #4ecdc4, #45b7d1);
$gradient-direction: to right;
$gradient-duration: 3s;
```

### CSS Variables

The package also provides CSS variables that you can use in your styles:

```css
:root {
  --textcss-primary-color: #333;
  --textcss-secondary-color: #666;
  --textcss-accent-color: #007bff;
  /* ... and more */
}
```

## Modules

Each text effect is available as a separate module that you can import individually:

```scss
@use '@textcss/core/modules/text-shadow';
@use '@textcss/core/modules/fancy-underline';
@use '@textcss/core/modules/text-animation';
@use '@textcss/core/modules/transform';
@use '@textcss/core/modules/neon';
@use '@textcss/core/modules/outline';
@use '@textcss/core/modules/gradient-text';
@use '@textcss/core/modules/text-blur';
@use '@textcss/core/modules/glitch-text';
```

## Browser Support

The package uses modern CSS features and is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
