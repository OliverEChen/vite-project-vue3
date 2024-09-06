export interface DataSource {
  showSelection?: boolean
  showOperation?: boolean
  operationWidth?: number
  total: number
  currentPage: number
  pageSize: number
  pageSizes: number[]
  cols: object[]
  data: object[]
}
