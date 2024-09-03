<template>
  <div class="flex f-a-center">
    <el-button icon="Refresh" circle />
    <el-button icon="FullScreen" circle />
    <el-button icon="setting" circle />
    <el-image
      style="width: 32px; height: 32px; margin-left: 10px; border-radius: 50%"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      fit="cover"
    />
    <el-dropdown class="mg-l10">
      <span class="el-dropdown-link">
        Dropdown List
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="useStore.userLoginOut()">
            退出登陆
          </el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
const useStore = useUserStore()
</script>
<style scoped lang="scss"></style>
