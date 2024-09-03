<template>
  <el-container class="layout_container">
    <el-aside
      class="layout_slider"
      :class="{ isCollapse: settingStore.isCollapse ? true : false }"
    >
      <logo />
      <el-scrollbar class="layout_menu">
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          :collapse="settingStore.isCollapse"
        >
          <cat-menu :menuList="store.routes" />
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header
        class="layout_tabbar"
        :class="{ isCollapse: settingStore.isCollapse ? true : false }"
      >
        <tabbar />
      </el-header>
      <el-main
        class="layout_main"
        :class="{ isCollapse: settingStore.isCollapse ? true : false }"
      >
        <cat-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import logo from './logo/index.vue'
import catMenu from './menu/index.vue'
import catMain from './main/index.vue'
import tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'
import useSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
let $route = useRoute()
let store = useUserStore()
let settingStore = useSettingStore()
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    height: 100vh;
    width: $base-menu-width;
    min-width: $base-menu-min-width;
    background-color: $base-menu-background;
    transition: all 0.3s;
    &.isCollapse {
      width: $base-menu-min-width;
    }
  }

  .layout_menu {
    height: calc(100vh - $base-menu-logo-height);
    .el-menu-vertical-demo {
      --el-menu-text-color: #d7bbbb;
      --el-menu-hover-text-color: #d7bbbb;
      --el-menu-bg-color: $base-menu-background;
      --el-menu-hover-bg-color: #378ae7;
      --el-menu-active-color: #ffffff;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transition: all 0.3s;
    &.isCollapse {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: $main-content-padding;
    overflow: auto;
    transition: all 0.3s;
    &.isCollapse {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
