<template>
  <div>首页</div>
  <el-button type="primary" @click="useStore.userLoginOut()">
    退出登陆
  </el-button>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
const useStore = useUserStore()
</script>
<style scoped lang="scss"></style>
