// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    formatters: {
      css: true,
    },
    typescript: true,
  },
)
