import request from '@/utils/request'
import { loginFormData, loginResponseData, userInfoReponseData } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<string, loginResponseData>(API.LOGIN_URL, data)
// 获取用户信息
export const reqUserInfo = () =>
  request.get<userInfoReponseData>(API.USERINFO_URL)
