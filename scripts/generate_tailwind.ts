import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as sass from 'sass'

interface StyleObject {
  [key: string]: string
}

interface Utilities {
  [key: string]: StyleObject
}

interface Keyframes {
  [key: string]: {
    [key: string]: StyleObject
  }
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const modulesDir = path.join(__dirname, '../', 'packages/core/src/modules')
const modules = fs.readdirSync(modulesDir)
  .filter(file => file.endsWith('.scss'))
  .map(file => path.join(modulesDir, file))

const utilities: Utilities = {}
const keyframes: Keyframes = {}

modules.forEach((modulePath: string) => {
  const result = sass.compile(modulePath, {
    style: 'compressed',
    loadPaths: [path.join(__dirname, '..')],
  })

  const css = result.css.toString()

  // 处理普通工具类
  const utilityRegex = /\.([\w-]+)\s*\{([^}]+)\}/g
  for (const match of css.matchAll(utilityRegex)) {
    const className = match[1]
    const stylesStr = match[2]

    const styles = stylesStr
      .split(';')
      .filter(Boolean)
      .reduce((styleAcc: StyleObject, style: string) => {
        const [property, value] = style.split(':').map(s => s.trim())
        if (property && value) {
          styleAcc[property] = value
        }
        return styleAcc
      }, {})

    utilities[`.${className}`] = styles
  }

  // 处理关键帧动画
  const keyframeRegex = /@keyframes\s+([\w-]+)\s*\{([^}]+)\}/g
  for (const match of css.matchAll(keyframeRegex)) {
    const animationName = match[1]
    const keyframeContent = match[2]

    const keyframeSteps: { [key: string]: StyleObject } = {}
    const stepRegex = /(\d+(?:,\s*\d+)*%?)\s*\{([^}]+)\}/g

    for (const stepMatch of keyframeContent.matchAll(stepRegex)) {
      const percentage = stepMatch[1]
      const stylesStr = stepMatch[2]

      const styles = stylesStr
        .split(';')
        .filter(Boolean)
        .reduce((styleAcc: StyleObject, style: string) => {
          const [property, value] = style.split(':').map(s => s.trim())
          if (property && value) {
            styleAcc[property] = value
          }
          return styleAcc
        }, {})

      keyframeSteps[percentage] = styles
    }

    keyframes[`@keyframes ${animationName}`] = keyframeSteps
  }
})

// 保存 utilities 到文件
const utilitiesPath = path.join(__dirname, '..', 'packages', 'tailwind', 'src', 'utilities.ts')
const utilitiesContent = `// This file is auto-generated. Do not edit manually.
import type { StyleObject } from './types'

export interface Utilities {
  [key: string]: StyleObject
}

const utilities: Utilities = ${JSON.stringify(utilities, null, 2)}

export default utilities
`

fs.writeFileSync(utilitiesPath, utilitiesContent)

// 保存 keyframes 到文件
const keyframesPath = path.join(__dirname, '..', 'packages', 'tailwind', 'src', 'keyframes.ts')
const keyframesContent = `// This file is auto-generated. Do not edit manually.
import type { StyleObject } from './types'

export interface Keyframes {
  [key: string]: {
    [key: string]: StyleObject
  }
}

const keyframes: Keyframes = ${JSON.stringify(keyframes, null, 2)}

export default keyframes
`

fs.writeFileSync(keyframesPath, keyframesContent)

export { keyframes, utilities }
