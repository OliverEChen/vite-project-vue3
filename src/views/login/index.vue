<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          ref="ruleFormRef"
          class="login-form"
          :model="ruleForm"
          :rules="rules"
        >
          <h1>欢迎来到 {{ setting.title }}</h1>
          <el-form-item prop="username">
            <el-input
              v-model="ruleForm.username"
              prefix-icon="User"
              placeholder="Please input username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
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
              @click="submitForm(ruleFormRef)"
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

<script setup lang="ts">
defineOptions({
  name: 'Login',
})
import setting from '@/setting'
import { reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import useUserStore from '@/store/modules/user'
import router from '@/router'
import { ElNotification } from 'element-plus'
import { judgmentTime } from '@/utils/index'
interface RuleForm {
  username: string
  password: string
}
let loading = ref(false)
const ruleFormRef = ref<FormInstance>()
const useStore = useUserStore()
const ruleForm = reactive<RuleForm>({
  username: 'admin',
  password: 'admin',
})
const validatePass = (_rule: any, value: any, callback: any) => {
  const regex = /[a-zA-Z]/
  if (regex.test(value)) {
    callback()
  } else {
    callback(new Error('密码需要包含字母'))
  }
}
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' },
    { validator: validatePass, trigger: 'blur' },
  ],
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        loading.value = true
        await useStore.userLogin(ruleForm)
        loading.value = false
        router.replace('/')
        ElNotification({
          type: 'success',
          duration: 2000,
          title: `Hi, ${judgmentTime()}好`,
          message: '欢迎回来！',
        })
      } catch (error) {
        loading.value = false
        ElNotification({
          type: 'error',
          duration: 2000,
          message: (error as Error).message,
        })
      }
    } else {
      console.log('error submit!', fields)
    }
  })
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
    top: 30vh;
    width: 80%;
    padding: 40px;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      margin-bottom: 20px;
      font-size: 36px;
      color: #fff;
    }
  }
}
</style>
