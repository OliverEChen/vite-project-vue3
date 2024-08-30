export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  // 匹配任意路由重定向到404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  },
]
