<template>
    <div class="login">
      <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginForm">
        <h3 class="title">若依后台管理系统</h3>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            type="text"
          placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            style="width: 63%"
            placeholder="验证码"></el-input>
          <div class="login-code">
            <img :src="codeUrl" class="login-code-img" @click="getCode"/>
          </div>
        </el-form-item>
        <el-checkbox
          style="margin: 0px 0px 25px 0px"
          v-model="loginForm.rememberMe">记住密码</el-checkbox>
        <el-form-item style="width: 100%">
          <el-button
            @click.native="handleLogin"
          type="primary"
          style="width: 100%">
            <span>登 录</span>
          </el-button>
        </el-form-item>
      </el-form>
      <div class="el-login-footer">
        <span>Copyright © 2018-2022 ruoyi.vip All Rights Reserved.</span>
      </div>
    </div>
</template>

<script>
import { getCodeImg } from '../api/login'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        uuid: '',
        rememberMe: false
      },
      codeUrl: '',
      captchaOnOff: true,
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入密码' }
        ],
        code: [
          { required: true, trigger: 'change', message: '请输入验证码' }
        ]
      },
      redirect: undefined
    }
  },
  created () {
    this.getCode()
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    getCode () {
      getCodeImg().then(res => {
        this.captchaOnOff = res.captchaOnOff === undefined ? true : res.captchaOnOff
        if (this.captchaOnOff) {
          this.codeUrl = 'data:image/gif;base64,' + res.img
          this.loginForm.uuid = res.uuid
        }
      })
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('Login', this.loginForm).then((res) => {
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            if (this.captchaOnOff) {
              this.getCode()
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login{
  display: flex;
  height: 100%;
  background-image: url("../assets/images/login-background.jpg");
  background-size: cover;
  justify-content: center;
  align-items: center;
}
.title {
  color: #707070;
  text-align: center;
  margin: 0px auto 30px;
}
.login-form {
  box-sizing: border-box;
  width: 400px;
  border-radius: 6px;
  background: #fff;
  padding: 25px 25px 5px 25px;
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0px;
  color: #fff;
  font-size: 12px;
  letter-spacing: 1px;
  font-family: Arial;
}
.login-code {
  width: 33%;
  float: right;
  img{
    cursor: pointer;
  }
}
  .login-code-img {
    height: 38px;
  }
</style>
