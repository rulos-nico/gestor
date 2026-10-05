import { createApp } from 'vue'

import App from '@/App.vue'
import { installProviders } from './app'
import { router } from './app/provider/router'
import './app/styles/base.css'

const app = createApp(App)
installProviders(app)

// Esperar a que el router resuelva la navegación inicial (incluido el
// redirect a /login del guard) ANTES de montar. Evita que App.vue
// renderice el AppShell mientras la ruta aún no está resuelta.
await router.isReady()
app.mount('#app')
