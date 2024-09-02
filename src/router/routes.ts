export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登陆',
      hidden: true,
      icon: '',
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'layout',
    meta: {
      title: '首页',
      hidden: false,
      icon: '',
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
          hidden: false,
          icon: 'House',
        },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统管理',
      hidden: false,
      icon: 'Setting',
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/system/user',
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          title: '用户',
          hidden: false,
          icon: '',
        },
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'role',
        name: 'role',
        meta: {
          title: '角色',
          hidden: false,
          icon: '',
        },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: '',
    },
    component: () => import('@/views/404/index.vue'),
  },
  // 匹配任意路由重定向到404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: 'any',
      hidden: true,
      icon: '',
    },
  },
]
