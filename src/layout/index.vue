<template>
  <div class="layout_container">
    <div class="layout_slider">
      <logo />
      <cat-menu />
    </div>
    <div class="layout_tabbar">111</div>
    <div class="layout_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from './logo/index.vue'
import catMenu from './menu/index.vue'
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
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
  }
  .layout_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: $main-content-padding;
    overflow: auto;
  }
}
</style>
