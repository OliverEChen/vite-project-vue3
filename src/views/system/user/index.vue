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
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { DataSource } from '@/components/Table/types'
import { reactive, onMounted } from 'vue'
import { reqUserList } from '@/api/user/index'
const dataSource = reactive<DataSource>({
  showSelection: true,
  total: 500,
  currentPage: 1,
  pageSize: 100,
  pageSizes: [100, 200, 300, 400],
  cols: [
    { label: '时间', prop: 'date' },
    { label: '名称', prop: 'name' },
    { label: '地址', prop: 'address' },
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
onMounted(async () => {
  await reqUserList(1, 10)
})
const onSelectionChange = (val: object[]) => {
  console.log(val)
}
const onPageSizeChange = (val: number) => {
  dataSource.pageSize = val
}
const onPageCurrentChange = (val: number) => {
  dataSource.currentPage = val
}
</script>
<style scoped lang="scss"></style>
