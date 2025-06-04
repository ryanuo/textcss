// This file is auto-generated. Do not edit manually.
import type { StyleObject } from './types'

export interface Utilities {
  [key: string]: StyleObject
}

const utilities: Utilities = {
  '.fancy-underline': {
    'text-decoration': 'underline wavy red',
  },
  '.underline-dotted': {
    'text-decoration': 'underline dotted #555',
  },
  '.underline-double': {
    'text-decoration': 'underline double #007acc',
  },
  '.underline-dashed': {
    'text-decoration': 'underline dashed orange',
  },
  '.underline-gradient': {
    position: 'relative',
    display: 'inline-block',
    color: 'inherit',
  },
  '.textcss-underline': {
    'text-decoration': 'none',
    'position': 'relative',
  },
  '.text-glitch': {
    position: 'relative',
  },
  '.text-glitch-intense': {
    position: 'relative',
  },
  '.text-glitch-slow': {
    position: 'relative',
  },
  '.text-gradient': {
    'background': 'linear-gradient(var(--textcss-gradient-direction), var(--textcss-gradient-colors))',
    '-webkit-background-clip': 'text',
    'background-clip': 'text',
    'color': 'rgba(0,0,0,0)',
  },
  '.text-gradient-radial': {
    'background': 'radial-gradient(circle at center, var(--textcss-gradient-colors))',
    '-webkit-background-clip': 'text',
    'background-clip': 'text',
    'color': 'rgba(0,0,0,0)',
  },
  '.text-gradient-animated': {
    'background': 'linear-gradient(var(--textcss-gradient-direction), var(--textcss-gradient-colors))',
    'background-size': '200% auto',
    '-webkit-background-clip': 'text',
    'background-clip': 'text',
    'color': 'rgba(0,0,0,0)',
    'animation': 'gradient-shift var(--textcss-gradient-duration) linear infinite',
  },
  '.neon-text-blue': {
    'color': 'aqua',
    'text-shadow': '0 0 5px aqua,0 0 10px aqua,0 0 20px aqua',
  },
  '.neon-text-pink': {
    'color': '#f0f',
    'text-shadow': '0 0 5px #f0f,0 0 10px #f0f,0 0 20px #f0f',
  },
  '.neon-text-green': {
    'color': '#39ff14',
    'text-shadow': '0 0 5px #39ff14,0 0 10px #39ff14,0 0 20px #39ff14',
  },
  '.neon-glow': {
    'color': '#fff',
    'text-shadow': '0 0 3px #fff,0 0 5px aqua,0 0 10px aqua,0 0 20px aqua',
  },
  '.neon-border': {
    'color': '#000',
    'background': 'aqua',
    'text-shadow': 'none',
    'padding': '.25em .5em',
    'border': '2px solid aqua',
    'box-shadow': '0 0 5px aqua,0 0 10px aqua,0 0 20px aqua',
  },
  '.textcss-neon': {
    'color': 'var(--textcss-neon-text-color)',
    'text-shadow': 'var(--textcss-neon-glow)',
    'animation': 'neon-pulse 1.5s ease-in-out infinite alternate',
  },
  '.textcss-neon-static': {
    'color': 'var(--textcss-neon-text-color)',
    'text-shadow': 'var(--textcss-neon-glow)',
  },
  '.outline-text': {
    'color': 'rgba(0,0,0,0)',
    '-webkit-text-stroke': '1px #000',
  },
  '.outline-thick': {
    'color': 'rgba(0,0,0,0)',
    '-webkit-text-stroke': '2px #ff4081',
  },
  '.outline-white': {
    'color': 'rgba(0,0,0,0)',
    '-webkit-text-stroke': '1.5px #fff',
  },
  '.outline-gradient': {
    'position': 'relative',
    'color': 'rgba(0,0,0,0)',
    'background': 'linear-gradient(90deg, #ff6ec4, #7873f5)',
    'background-clip': 'text',
    '-webkit-background-clip': 'text',
    '-webkit-text-stroke': '1px #222',
  },
  '.textcss-outline': {
    '-webkit-text-stroke': 'var(--textcss-outline-width) var(--textcss-outline-color)',
  },
  '.textcss-outline-offset': {
    'text-shadow': 'calc(var(--textcss-outline-offset)*1) 0 var(--textcss-outline-color),calc(var(--textcss-outline-offset)*-1) 0 var(--textcss-outline-color),0 calc(var(--textcss-outline-offset)*1) var(--textcss-outline-color),0 calc(var(--textcss-outline-offset)*-1) var(--textcss-outline-color)',
  },
  '.typing-effect': {
    'overflow': 'hidden',
    'white-space': 'nowrap',
    'border-right': '2px solid',
    'width': '0',
    'animation': 'typing 3s steps(30, end) forwards',
  },
  '.shimmer-text': {
    'background': 'linear-gradient(90deg, #ccc, #fff, #ccc)',
    'background-size': '200% 100%',
    'background-clip': 'text',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'rgba(0,0,0,0)',
    'animation': 'shimmer 2s infinite',
  },
  '.blinking-text': {
    animation: 'blink 1s step-start infinite',
  },
  '.textcss-typing': {
    'width': '0',
    'overflow': 'hidden',
    'white-space': 'nowrap',
    'border-right': '2px solid',
    'animation': 'textcss-typing var(--textcss-animation-duration) var(--textcss-animation-timing) var(--textcss-animation-delay) var(--textcss-animation-fill-mode),textcss-blink .75s step-end infinite',
  },
  '.textcss-fade-in': {
    opacity: '0',
    animation: 'fade-in var(--textcss-animation-duration) var(--textcss-animation-timing) var(--textcss-animation-delay) var(--textcss-animation-fill-mode)',
  },
  '.textcss-slide-in': {
    transform: 'translateY(20px)',
    opacity: '0',
    animation: 'slide-in var(--textcss-animation-duration) var(--textcss-animation-timing) var(--textcss-animation-delay) var(--textcss-animation-fill-mode)',
  },
  '.textcss-bounce': {
    animation: 'bounce var(--textcss-animation-duration) cubic-bezier(0.36, 0, 0.66, -0.56) var(--textcss-animation-delay) var(--textcss-animation-iteration) var(--textcss-animation-direction) var(--textcss-animation-fill-mode)',
  },
  '.textcss-shake': {
    animation: 'shake var(--textcss-animation-duration) cubic-bezier(0.36, 0.07, 0.19, 0.97) var(--textcss-animation-delay) var(--textcss-animation-iteration) var(--textcss-animation-direction) var(--textcss-animation-fill-mode)',
  },
  '.textcss-pulse': {
    animation: 'pulse var(--textcss-animation-duration) ease-in-out var(--textcss-animation-delay) var(--textcss-animation-iteration) var(--textcss-animation-direction) var(--textcss-animation-fill-mode)',
  },
  '.textcss-spin': {
    animation: 'spin var(--textcss-animation-duration) linear var(--textcss-animation-delay) var(--textcss-animation-iteration) var(--textcss-animation-direction) var(--textcss-animation-fill-mode)',
  },
  '.text-blur': {
    filter: 'blur(var(--textcss-blur-amount, 2px))',
    transition: 'filter var(--textcss-transition-duration, 0.3s) var(--textcss-transition-timing, ease)',
  },
  '.text-blur-sm': {
    filter: 'blur(var(--textcss-blur-sm, 1px))',
    transition: 'filter var(--textcss-transition-duration, 0.3s) var(--textcss-transition-timing, ease)',
  },
  '.text-blur-md': {
    filter: 'blur(var(--textcss-blur-md, 2px))',
    transition: 'filter var(--textcss-transition-duration, 0.3s) var(--textcss-transition-timing, ease)',
  },
  '.text-blur-lg': {
    filter: 'blur(var(--textcss-blur-lg, 4px))',
    transition: 'filter var(--textcss-transition-duration, 0.3s) var(--textcss-transition-timing, ease)',
  },
  '.text-blur-animated': {
    animation: 'blur-pulse var(--textcss-blur-duration, 3s) ease-in-out infinite',
  },
  '.text-shadow-pop': {
    'text-shadow': '1px 1px 0 #000',
  },
  '.glow': {
    'text-shadow': '0 0 5px #fff,0 0 10px #f0f,0 0 15px aqua',
  },
  '.ghost-shadow': {
    'text-shadow': '2px 2px 8px rgba(0,0,0,.6)',
  },
  '.textcss-shadow': {
    'text-shadow': 'var(--textcss-shadow-offset-x) var(--textcss-shadow-offset-y) var(--textcss-shadow-blur) var(--textcss-shadow-color)',
  },
  '.uppercase-spacing': {
    'text-transform': 'uppercase',
    'letter-spacing': '.15em',
  },
  '.lowercase-fade': {
    'text-transform': 'lowercase',
    'opacity': '.85',
  },
  '.capitalize-loose': {
    'text-transform': 'capitalize',
    'letter-spacing': '.1em',
  },
  '.skew-text': {
    display: 'inline-block',
    transform: 'skewX(-10deg)',
  },
  '.rotate-text': {
    display: 'inline-block',
    transform: 'rotate(-3deg)',
  },
  '.scale-text': {
    display: 'inline-block',
    transform: 'scale(1.1)',
  },
  '.textcss-transform': {
    'transform': 'scale(var(--textcss-transform-scale)) rotate(var(--textcss-transform-rotate)) skew(var(--textcss-transform-skew))',
    'transform-origin': 'center',
    'transition': 'transform .3s ease',
  },
}

export default utilities
