import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

function addRedirects() {
  router.addRoute({
    path: '/home',
    redirect: '/home',
  })
}

addRedirects()

if (import.meta.hot) {
  handleHotUpdate(router)
}
