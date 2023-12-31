import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // name: '',
    component: () => import('../views/FrontEndView.vue'),
    children: [
      {
        path: '',
        // name: 'home',
        component: () => import('../views/frontEnd/HomeView.vue')
      },
      {
        path: 'course',
        // name: 'course',
        component: () => import('../views/frontEnd/CourseView.vue')
      },
      {
        path: 'course/course-detail',
        // path: 'course/:id',
        component: () => import('../views/frontEnd/CourseDetail.vue')
      },
      {
        path: '/unit',
        component: () => import('../views/frontEnd/UnitView.vue')
      },
      {
        path: '/unit/unit-detail',
        // path: '/unit/:id',
        component: () => import('../views/frontEnd/UnitDetail.vue')
      },
      {
        path: 'faq',
        // name: 'faq',
        component: () => import('../views/frontEnd/FaqView.vue')
      },
      {
        path: 'news',
        // name: 'news',
        component: () => import('../views/frontEnd/NewsView.vue')
      },
      {
        path: 'cart-check',
        // name: 'cart-check',
        component: () => import('../views/frontEnd/CartCheck.vue')
      },
      {
        path: 'order-pay',
        // name: 'order-pay',
        component: () => import('../views/frontEnd/OrderPay.vue')
      },
      {
        path: 'order-complete',
        // name: 'order-complete',
        component: () => import('../views/frontEnd/OrderComplete.vue')
      },
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/BackEndView.vue')
    // children: [{}]
  },
  {
    path: '/test',
    component: () => import('../views/frontEnd/TestView.vue')
    // children: [{}]
  },
  {
    path: '/login',
    component: () => import('../views/frontEnd/LoginView.vue')
  },
  {
    path: '/signin',
    component: () => import('../views/frontEnd/SignView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { // 切換頁面回到頁面最上方
    return {
      top: 0
    }
  }
})

export default router
