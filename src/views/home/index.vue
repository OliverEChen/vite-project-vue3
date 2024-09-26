<template>
  <div>
    <el-card>
      <div class="flex f-a-center">
        <el-image :src="userStore.avatar" class="w-v-60 h-v-60 mg-r10" />
        <div>
          <h3 class="f16 t-bold mg-b10">
            {{ judgmentTime() }}好, {{ userStore.username }}
          </h3>
          <p>{{ setting.title }}</p>
        </div>
      </div>
    </el-card>
    <div class="flex f-j-center w-p-100">
      <svg-icon name="welcome" width="500px" height="500px"></svg-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import { judgmentTime } from '@/utils/index'
import setting from '@/setting'
const userStore = useUserStore()
</script>
<style scoped lang="scss"></style>
