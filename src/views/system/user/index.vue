<template>
  <div>
    <el-card>
      <el-form>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <el-form-item label="用户名">
              <el-input placehoulder="请输入用户名"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="f-j-end">
          <el-button type="primary">搜索</el-button>
          <el-button>重置</el-button>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="mg-t10">
      <el-row>
        <el-button type="primary">添加用户</el-button>
        <el-button type="danger">批量删除</el-button>
      </el-row>
      <Table
        :dataSource="dataSource"
        class="mg-t10"
        @selection="onSelectionChange"
        @page-size="onPageSizeChange"
        @page-current="onPageCurrentChange"
      >
        <template #Operations="scope">
          <div>
            <el-button
              size="small"
              @click="handleEdit(scope, scope.$index, scope.row)"
            >
              Edit
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              Delete
            </el-button>
          </div>
        </template>
      </Table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { DataSource } from '@/components/Table/types'
import { reactive, onMounted } from 'vue'
import { reqUserList } from '@/api/modules/user/index'
const dataSource = reactive<DataSource>({
  showSelection: true,
  showOperation: true,
  operationWidth: 200,
  total: 0,
  currentPage: 1,
  pageSize: 10,
  pageSizes: [5, 10, 30, 60],
  cols: [
    { label: '用户名称', prop: 'username' },
    { label: '姓名', prop: 'name' },
    { label: '手机号', prop: 'phone' },
    { label: '创建时间', prop: 'createTime' },
  ],
  data: [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ],
})
onMounted(() => {
  reqUserListFn()
})
const reqUserListFn = async () => {
  const { code, data } = await reqUserList(
    dataSource.currentPage,
    dataSource.pageSize,
  )
  if (code === 200) {
    dataSource.data = data.records
    dataSource.total = data.total
  }
}
const handleEdit = (scope, index, row) => {
  console.log(scope, index, row)
}
const onSelectionChange = (val: object[]) => {
  console.log(val)
}
const onPageSizeChange = (val: number) => {
  dataSource.pageSize = val
  reqUserListFn()
}
const onPageCurrentChange = (val: number) => {
  dataSource.currentPage = val
  reqUserListFn()
}
</script>
<style scoped lang="scss"></style>
