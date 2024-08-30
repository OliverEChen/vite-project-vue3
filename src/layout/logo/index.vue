<template>
  <div class="logo">
    <img :src="setting.logoUrl" object-fit="cover" />
    <h1>{{ setting.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>
<style scoped lang="scss">
.logo {
  padding: 10px 20px;
  width: 100%;
  height: $base-menu-logo-height;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: $base-logo-title-fontSize;
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
