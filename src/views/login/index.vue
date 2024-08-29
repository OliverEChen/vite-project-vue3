<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
          <h1>欢迎来到XX后台系统</h1>
          <el-form-item>
            <el-input
              v-model="loginFormData.username"
              prefix-icon="User"
              placeholder="Please input username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginFormData.password"
              prefix-icon="Lock"
              type="password"
              show-password
              placeholder="Please input password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :loading="loading"
              @click="submitForm"
              class="w-p-100"
            >
              登 陆
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="Login">
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import router from '@/router'
import { ElNotification } from 'element-plus'
let loading = ref(false)
const useStore = useUserStore()
const loginFormData = reactive({
  username: 'admin',
  password: '111111',
})
const submitForm = async () => {
  try {
    loading.value = true
    await useStore.userLogin(loginFormData)
    loading.value = false
    router.replace('/')
    ElNotification({
      type: 'success',
      duration: 2000,
      message: '登陆成功',
    })
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      duration: 2000,
      message: (error as Error).message,
    })
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: #fff;
      margin-bottom: 20px;
      font-size: 36px;
    }
  }
}
</style>
