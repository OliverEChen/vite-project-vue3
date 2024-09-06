import request from '@/utils/request'
import type { UserResData } from './types'

// 获取用户分页列表
export const reqUserList = (page: number, limit: number) =>
  request.get<any, UserResData>(`/admin/acl/user/${page}/${limit}`)
