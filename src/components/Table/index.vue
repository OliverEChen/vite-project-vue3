<template>
  <div>
    <el-table
      :data="dataSource.data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        v-if="dataSource.showSelection"
      />
      <template v-for="item in dataSource.cols" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        />
      </template>
      <el-table-column
        label="Operations"
        :width="dataSource.operationWidth"
        v-if="dataSource.showOperation"
      >
        <template #default="scope">
          <slot name="Operations" v-bind="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="f-j-end mg-t10"
      v-model:current-page="dataSource.currentPage"
      v-model:page-size="dataSource.pageSize"
      :page-sizes="dataSource.pageSizes"
      :total="dataSource.total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['selection', 'page-size', 'page-current'])
defineProps({
  dataSource: {
    type: Object,
    required: true,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps: any) {
      console.log('rawProps', rawProps)
      return {}
    },
  },
})
const handleSelectionChange = (val: object[]) => {
  emit('selection', val)
}
const handleSizeChange = (val: number) => {
  emit('page-size', val)
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  emit('page-current', val)
  console.log(`current page: ${val}`)
}
</script>
