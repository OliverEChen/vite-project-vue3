<template>
  <template v-for="item in menuList" :key="item.path">
    <el-menu
      class="el-menu-class"
      :collapse="isCollapse"
      :router="true"
      :default-active="$route.path"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-if="!item.children">
        <el-menu-item
          :index="item.path"
          :route="item"
          v-if="!item.meta.hidden"
          @click="onClickMenuItem"
        >
          <el-icon v-if="item.meta.icon">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </el-menu-item>
      </template>
      <template v-if="item.children && item.children.length === 1">
        <el-menu-item
          :index="item.children[0].path"
          :route="item"
          v-if="!item.meta.hidden"
          @click="onClickMenuItem"
        >
          <el-icon v-if="item.children[0].meta.icon">
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </el-menu-item>
      </template>
      <template v-if="item.children && item.children.length > 1">
        <el-sub-menu :index="item.path">
          <template #title>
            <el-icon v-if="item.meta.icon">
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta?.title }}</span>
          </template>
          <cat-menu :menuList="item.children" />
        </el-sub-menu>
      </template>
    </el-menu>
  </template>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'catMenu',
})
defineProps(['menuList'])

import { ref } from 'vue'
//获取路由对象
import { useRoute } from 'vue-router'
//获取路由对象
let $route = useRoute()
console.log($route.path)
const isCollapse = ref(false)
const onClickMenuItem = (val) => {
  console.log(val)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped lang="scss">
.el-menu-class {
  --el-menu-text-color: #d7bbbb;
  --el-menu-hover-text-color: #d7bbbb;
  --el-menu-bg-color: $base-menu-background;
  --el-menu-hover-bg-color: #378ae7;
  --el-menu-active-color: #ffffff;
}
</style>
