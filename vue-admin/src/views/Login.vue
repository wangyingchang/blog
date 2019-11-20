<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="model.name" placeholder="请输入密码">
            <i slot="prefix" class="el-icon-s-custom"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码" v-model="model.password" show-password>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return {
      model: {}
    }
  },
  methods: {
    login() {
      this.$http({
          method: 'post',
          url:'/login',
          data: this.model
      }).then((res)=>{
        console.log(res.data.token);
        localStorage.token = res.data.token;
        this.$router.push('/');
        this.$message({
          type: 'success',
          message: '登录成功'
        })
      });
    }
  }
}
</script>
<style scope> 
  .login-card {
    width: 30%;
    margin: 150px auto;
  }
</style>