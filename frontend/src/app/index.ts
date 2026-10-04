import { createApp } from 'vue'
import pinia from './provider/pinia'
import router from './provider/router'
import App from './App.vue'
import './styles/base.css'

export function setupApp() {
  const app = createApp(App)

  app.use(pinia)
  app.use(router)

  return app
}
