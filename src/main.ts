
import { createApp } from 'vue'
import App from './App.vue'

// ✅ import 순서: base → components → utilities
import '@/assets/styles/base.css'
import '@/assets/styles/components.css'
import '@/assets/styles/utilities.css'

createApp(App).mount('#app')

