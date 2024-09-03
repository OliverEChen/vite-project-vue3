<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <breadcrumb></breadcrumb>
    </div>
    <div class="tabbar-right">
      <setting></setting>
    </div>
  </div>
</template>

<script setup lang="ts">
import breadcrumb from './breadcrumb/index.vue'
import setting from './setting/index.vue'
</script>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .tabbar-left {
  }
  .tabbar-right {
  }
}
</style>
