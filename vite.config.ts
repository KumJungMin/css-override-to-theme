import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    vue(),
    stylelint({
      include: ['src/**/*.vue', 'assets/**/*.css'],
      emitWarningAsError: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
