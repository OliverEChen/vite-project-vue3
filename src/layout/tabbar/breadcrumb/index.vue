<template>
  <div class="flex f-a-center">
    <el-icon class="mg-r10" size="20px" @click="onCollapseChange">
      <component :is="store.isCollapse ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">promotion management</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'
let store = useSettingStore()
const onCollapseChange = () => {
  store.isCollapse = !store.isCollapse
}
</script>
<style scoped lang="scss"></style>
