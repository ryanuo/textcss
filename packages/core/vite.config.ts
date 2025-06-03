import path from 'node:path'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
// vite.config.ts
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
        sassOptions: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.scss'),
      name: 'TextCSS',
      fileName: () => 'text.css',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: () => 'text.min.css',
      },
    },
    emptyOutDir: true,
  },
})
