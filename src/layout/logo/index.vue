<template>
  <div
    class="logo"
    :class="{ isCollapse: settingStore.isCollapse ? true : false }"
  >
    <img :src="setting.logoUrl" object-fit="cover" />
    <h1 v-if="!settingStore.isCollapse">{{ setting.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
import useSettingStore from '@/store/modules/setting'
let settingStore = useSettingStore()
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: $base-logo-title-fontSize;
  padding: var(--el-menu-base-level-padding);
  transition: all 0.3s;
  &.isCollapse {
    justify-content: center;
  }
  h1 {
    margin-left: 10px;
  }
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
</style>
