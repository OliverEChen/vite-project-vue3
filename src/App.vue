<script setup lang="ts">
import { reqLogin } from '@/api/user/index'
import { onMounted, reactive } from 'vue'
let result = reactive({})
onMounted(async () => {
  const res = await reqLogin({
    username: 'admin',
    password: '111111',
  })
  Object.assign(result, res)
})
</script>

<template>
  <div>
    {{ result }}
  </div>
</template>

<style scoped lang="scss"></style>
