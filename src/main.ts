
import { createApp } from 'vue'
import App from './App.vue'

// ✅ import 순서: base → components → utilities → theme
import '@/assets/styles/base.css'
import '@/assets/styles/components.css'
import '@/assets/styles/utilities.css'
import '@/assets/styles/theme-service-b.css' // ✅ 테마 스코프 기반 변수 덮기

createApp(App).mount('#app')

