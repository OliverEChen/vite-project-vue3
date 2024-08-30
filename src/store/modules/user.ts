import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { loginFormData } from '@/api/user/type'
import { UserState } from './types/type'
import router from '@/router'

const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: localStorage.getItem('TOKEN'),
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
    async userLoginOut() {
      localStorage.removeItem('TOKEN')
      router.replace('/login')
    },
  },
  getters: {},
})
export default useUserStore
