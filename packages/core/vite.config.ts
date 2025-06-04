import path from 'node:path'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({ preset: 'default' }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, 'src/index.scss'),
      ],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['sass'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: 'dist',
        assetFileNames: 'text.min.css',
      },
    },
    emptyOutDir: true,
  },
})
