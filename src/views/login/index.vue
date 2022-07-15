<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-arrow
      @click-left="$router.back()"
    />
    <van-form @submit="login" class="form">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="login-btn"
          >登 录</van-button
        >
      </div>
    </van-form>
    <div class="register"><a href="javascript:;">还没有账号，去注册~</a></div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'Login',

  data() {
    return {
      username: '',
      password: ''
    }
  },

  mounted() {},

  methods: {
    async login() {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间，默认2s，如果为0则持续展示
      })

      const { data } = await login(this.username, this.password)
      if (data.status === 400) {
        this.$toast.fail('账号或密码错误')
      } else {
        this.$store.commit('setUser', data.body.token)
        this.$toast.success('登录成功')
        this.$router.push('/home/profile')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  margin-bottom: 40px;
  :deep(.van-nav-bar__content) {
    background-color: #21b97a;
    font-size: 30px;
  }
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
:deep(.van-nav-bar .van-icon) {
  color: #fff !important;
}
.login-btn {
  margin-top: 40px;
  background-color: #1cb676;
  .van-button__text {
    font-size: 38px;
    font-weight: normal;
  }
}
.form {
  .van-field {
    margin-bottom: 20px;
    font-size: 36px;
  }
}
.register {
  display: flex;
  font-size: 28px;
  justify-content: center;
  padding-top: 20px;
  a {
    color: #666;
    font-size: 28px;
  }
}
</style>
