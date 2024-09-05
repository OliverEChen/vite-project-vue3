import request from '@/utils/request'
import {
  loginFormData,
  loginResponseData,
  ResponseData,
  userInfoReponseData,
} from './type'

enum API {
  LOGIN_URL = '/user/login',
  LOGINOUT_URL = '/user/login-out',
  USERINFO_URL = '/user/info',
}

// 登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<string, loginResponseData>(API.LOGIN_URL, data)
// 退出登陆
export const reqLoginOut = () =>
  request.get<any, ResponseData>(API.LOGINOUT_URL)
// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, userInfoReponseData>(API.USERINFO_URL)

// 获取用户分页列表
export const reqUserList = (page: number, limit: number) =>
  request.get<any, any>(`/admin/acl/user/${page}/${limit}`)
