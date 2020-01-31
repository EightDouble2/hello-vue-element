<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="login-box" :rules="rules">
      <h1 class="login-title">欢迎登录</h1>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: null,
          password: null
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      login: function (formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            sessionStorage.setItem('isLogin', 'true');
            this.$store.dispatch('asyncSetUser', this.form);
            this.$router.push("/main");
          }else {
            this.$message.error('请输入账号密码');
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-title {
    text-align: center;
  }

  .login-box {
    text-align: left;
    width: 400px;
    border: 1px solid #DCDFE6;
    margin: 150px auto 0 auto;
    padding: 20px 50px 20px 20px;
    border-radius: 5px;
    box-shadow: 0 0 25px;
  }
</style>
