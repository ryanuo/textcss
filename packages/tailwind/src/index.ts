import type { PluginAPI } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
import keyframes from './keyframes'
import utilities from './utilities'

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
