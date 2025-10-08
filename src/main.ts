
import { createApp } from 'vue'
import App from './App.vue'

// ✅ import 순서: base → components → utilities → overrides
import '@/assets/styles/base.css'
import '@/assets/styles/components.css'
import '@/assets/styles/utilities.css'
import '@/assets/styles/setting-b.css' // ⚠️ 오버라이드 (임시 유지)

createApp(App).mount('#app')

