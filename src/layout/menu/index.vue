<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item
        :index="item.path"
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
        v-if="!item.meta.hidden"
        @click="onClickMenuItem"
      >
        <el-icon v-if="item.children[0].meta.icon">
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <span>{{ item.children[0].meta?.title }}</span>
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
  </template>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'catMenu',
})
defineProps(['menuList'])
import {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
} from 'vue-router'
import router from '@/router'

const onClickMenuItem = (vc: {
  index: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
}) => {
  console.log('vc', vc)
  router.push(vc.index)
}
</script>
<style scoped lang="scss"></style>
