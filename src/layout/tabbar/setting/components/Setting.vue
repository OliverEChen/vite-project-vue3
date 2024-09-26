<template>
  <el-drawer
    v-model="drawer"
    title="I am the title"
    :direction="direction"
    :append-to-body="true"
  >
    <div class="flex f-d-column">
      <span>Hi, there!</span>
      <el-switch
        v-model="dark"
        size="large"
        active-action-icon="MoonNight"
        inactive-action-icon="Sunny"
        active-text="暗黑模式"
        inactive-text="普通模式"
        @change="onSwitchDark"
      />
      <div>
        <span class="mg-r10">主题颜色</span>
        <el-color-picker v-model="color" />
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { DrawerProps } from 'element-plus'
const drawer = ref(false)
const color = ref('#409EFF')
const direction = ref<DrawerProps['direction']>('rtl')
const dark = ref(false)
const onSwitchDark = () => {
  const html = document.documentElement
  if (dark.value) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function open() {
  drawer.value = true
}
defineExpose({
  open,
  handleClose,
})
</script>
