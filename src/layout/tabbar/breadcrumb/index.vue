<template>
  <div class="flex f-a-center">
    <el-icon class="mg-r10" size="20px" @click="onCollapseChange">
      <component :is="store.isCollapse ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator="/">
      <template v-for="item in route.matched" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }" v-show="item.meta.title">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import useSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
const route = useRoute()
let store = useSettingStore()
const onCollapseChange = () => {
  store.isCollapse = !store.isCollapse
}
</script>
<style scoped lang="scss"></style>
