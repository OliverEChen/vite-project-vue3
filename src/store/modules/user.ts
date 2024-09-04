import { defineStore } from 'pinia'
import { reqLogin, reqLoginOut, reqUserInfo } from '@/api/user'
import { loginFormData } from '@/api/user/type'
import { UserState } from './types/type'
import { constantRoute } from '@/router/routes'
const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      username: '',
      avatar: '',
      userInfo: {},
      token: localStorage.getItem('TOKEN'),
      routes: constantRoute,
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      const res = await reqLogin(data)
      if (res.code === 200) {
        this.token = res.data.token as string
        localStorage.setItem('TOKEN', res.data.token as string)
        return Promise.resolve(res)
      } else {
        return Promise.reject(res.data)
      }
    },
    async userInfoAction() {
      const res = await reqUserInfo()
      if (res.code === 200) {
        this.userInfo = res.data
        this.username = res.data.username
        this.avatar = res.data.avatar
        return Promise.resolve(res)
      } else {
        return Promise.reject(res.data)
      }
    },
    async userLoginOut() {
      const result: any = await reqLoginOut()
      if (result.code == 200) {
        localStorage.removeItem('TOKEN')
        this.token = ''
        this.username = ''
        this.avatar = ''
        this.userInfo = {}
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
  getters: {},
})
export default useUserStore
