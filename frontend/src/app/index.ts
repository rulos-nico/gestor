import { type App } from 'vue'

import { pinia } from '@app/provider/pinia'
import { router } from '@app/provider/router'

export function installProviders(app: App): void {
  app.use(pinia)
  app.use(router)
}

