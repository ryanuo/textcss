import type { PluginAPI } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import utilities from './utilities'

interface Keyframes {
  [key: string]: {
    [key: string]: {
      [key: string]: string
    }
  }
}

interface ThemeConfig {
  theme: {
    extend: {
      blur: {
        sm: string
        md: string
        lg: string
      }
      glitch: {
        offset: string
        offsetIntense: string
        intensity: string
        intensityIntense: string
        duration: string
        durationSlow: string
      }
      gradient: {
        colors: string
        direction: string
        duration: string
      }
    }
  }
}

const keyframes: Keyframes = {
  '@keyframes blur-pulse': {
    '0%, 100%': {
      filter: 'blur(0)',
    },
    '50%': {
      filter: 'blur(var(--textcss-blur-max, 4px))',
    },
  },
  '@keyframes glitch-anim-1': {
    '0%': {
      'clip-path': 'inset(20% 0 30% 0)',
      'transform': 'translate(-2px, -2px)',
    },
    '20%': {
      'clip-path': 'inset(60% 0 10% 0)',
      'transform': 'translate(2px, 2px)',
    },
    '40%': {
      'clip-path': 'inset(40% 0 50% 0)',
      'transform': 'translate(-2px, 2px)',
    },
    '60%': {
      'clip-path': 'inset(80% 0 5% 0)',
      'transform': 'translate(2px, -2px)',
    },
    '80%': {
      'clip-path': 'inset(10% 0 70% 0)',
      'transform': 'translate(-2px, -2px)',
    },
    '100%': {
      'clip-path': 'inset(30% 0 20% 0)',
      'transform': 'translate(2px, 2px)',
    },
  },
  '@keyframes glitch-anim-2': {
    '0%': {
      'clip-path': 'inset(30% 0 20% 0)',
      'transform': 'translate(2px, 2px)',
    },
    '20%': {
      'clip-path': 'inset(10% 0 70% 0)',
      'transform': 'translate(-2px, -2px)',
    },
    '40%': {
      'clip-path': 'inset(80% 0 5% 0)',
      'transform': 'translate(2px, -2px)',
    },
    '60%': {
      'clip-path': 'inset(40% 0 50% 0)',
      'transform': 'translate(-2px, 2px)',
    },
    '80%': {
      'clip-path': 'inset(60% 0 10% 0)',
      'transform': 'translate(2px, 2px)',
    },
    '100%': {
      'clip-path': 'inset(20% 0 30% 0)',
      'transform': 'translate(-2px, -2px)',
    },
  },
  '@keyframes gradient-shift': {
    '0%': {
      'background-position': '0% 50%',
    },
    '50%': {
      'background-position': '100% 50%',
    },
    '100%': {
      'background-position': '0% 50%',
    },
  },
}

const themeConfig: ThemeConfig = {
  theme: {
    extend: {
      blur: {
        sm: '1px',
        md: '3px',
        lg: '4px',
      },
      glitch: {
        offset: '2px',
        offsetIntense: '4px',
        intensity: '0.1',
        intensityIntense: '0.2',
        duration: '0.3s',
        durationSlow: '0.45s',
      },
      gradient: {
        colors: 'linear-gradient(to right, #ff6b6b, #4ecdc4)',
        direction: 'to right',
        duration: '3s',
      },
    },
  },
}

export default plugin(({ addUtilities }: PluginAPI) => {
  // 添加所有工具类
  addUtilities(utilities)

  // 添加动画关键帧
  addUtilities(keyframes)
}, themeConfig)
