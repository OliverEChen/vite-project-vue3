export interface ResData {
  code: number
  message: string
  ok: boolean
  data: object
}
export interface User {
  id: number
  createTime: string
  updateTime: string
  username: string
  password: string
  name: string
  phone: string
  roleName: string
}
export type Records = User[]
export interface UserResData extends ResData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    pages: number
  }
}
