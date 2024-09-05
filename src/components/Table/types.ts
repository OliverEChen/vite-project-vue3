export interface DataSource {
  showSelection?: boolean
  total: number
  currentPage: number
  pageSize: number
  pageSizes: number[]
  cols: object[]
  data: object[]
}
