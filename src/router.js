import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [

    /* ----------------------------
    /* Основные маршруты.
    /* ---------------------------- */
    {
      path: '/',
      component: () => import('@/views/layouts/AppLayout'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/pages/Home'),
        }
      ]
    },

    /* ----------------------------
    /* Маршруты ошибок.
    /* ---------------------------- */
    {
      path: '/error',
      component: () => import('@/views/layouts/ErrorLayout'),
      children: [
        {
          path: '403',
          name: '403',
          component: () => import('@/views/pages/errors/403')
        },
        {
          path: '404',
          name: '404',
          component: () => import('@/views/pages/errors/404')
        },
        {
          path: '500',
          name: '500',
          component: () => import('@/views/pages/errors/500')
        }
      ]
    },
    {
      path: '*',
      redirect: '/error/404'
    }
  ]
})

export default router
