import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import StyleOrderGuard from '@custom/style-order-guard/vite'

export default defineConfig({
  plugins: [vue(), StyleOrderGuard()],
  build: {
    cssCodeSplit: true, // ✅ CSS를 라우트/엔트리 단위로 분리
    rollupOptions: {
      output: {
        // ✅ chunk별 순서 명시: CSS chunk가 여러 개 생겨도 순서를 고정적으로 유지
        manualChunks: {
          components: ['src/assets/styles/components.css'],
          utilities: ['src/assets/styles/utilities.css'],
          theme: ['src/assets/styles/theme-service-b.css'],
        },
      },
    },
  },
})
