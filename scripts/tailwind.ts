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

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const modulesDir = path.join(__dirname, '../', 'packages/core/src/modules')
console.log(modulesDir)
const modules = fs.readdirSync(modulesDir)
  .filter(file => file.endsWith('.scss'))
  .map(file => path.join(modulesDir, file))

const utilities: Utilities = modules.reduce((acc: Utilities, modulePath: string) => {
  const result = sass.compile(modulePath, {
    style: 'compressed',
    loadPaths: [path.join(__dirname, '..')],
  })

  const css = result.css.toString()
  const regex = /\.([\w-]+)\s*\{([^}]+)\}/g

  for (const match of css.matchAll(regex)) {
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

    acc[`.${className}`] = styles
  }

  return acc
}, {})

const targetPath = path.join(__dirname, '..', 'packages', 'tailwind', 'src', 'utilities.ts')
const content = `// This file is auto-generated. Do not edit manually.
import type { StyleObject } from './types'

export interface Utilities {
  [key: string]: StyleObject
}

const utilities: Utilities = ${JSON.stringify(utilities, null, 2)}

export default utilities
`

fs.writeFileSync(targetPath, content)

export default utilities
