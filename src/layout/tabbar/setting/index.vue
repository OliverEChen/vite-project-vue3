<template>
  <div class="flex f-a-center">
    <el-button icon="Refresh" circle @click="onRefresh" />
    <el-button icon="FullScreen" circle @click="onFullScreen" />
    <el-button icon="setting" circle @click="onSetting"/>
    <el-image
      style="width: 32px; height: 32px; margin-left: 10px; border-radius: 50%"
      :src="userStore.avatar"
      fit="cover"
    />
    <el-dropdown class="mg-l10">
      <span class="el-dropdown-link">
        {{ userStore.username }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="onLoginOut">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <Setting ref="settingRef"></Setting>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import useSettingStore from '@/store/modules/setting'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import Setting from './components/Setting.vue'
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const settingStore = useSettingStore()
const settingRef = ref()
const onSetting = () => {
  console.log(settingRef.value)
  settingRef.value.open()

  // settingRef.value.open()
}
const onRefresh = () => {
  settingStore.refresh = !settingStore.refresh
}
const onFullScreen = () => {
  // 切换是否全屏
  let fs = document.fullscreenElement
  if (!fs) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
const onLoginOut = async () => {
  await userStore.userLoginOut()
  router.replace({ path: '/login', query: { redirect: route.path } })
}
</script>
<style scoped lang="scss"></style>
