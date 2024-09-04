import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import pinia from './store'
import useUserStore from './store/modules/user'
import setting from './setting'
nprogress.configure({
  showSpinner: false,
})
const userStore = useUserStore(pinia)
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  document.title = `${setting.title}-${to.meta.title as string}`
  nprogress.start()
  const token = userStore.token
  const username = userStore.username
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.userInfoAction()
          next()
        } catch (error) {
          await userStore.userLoginOut()
          next({ path: '/login', query: { redirect: to.path } })
          console.log(error)
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
// 全局后置守卫
router.afterEach((to, from, next) => {
  nprogress.done()
})
