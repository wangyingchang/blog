<template>
<el-container style="height: 100vh;">
  <LeftMenu></LeftMenu>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <TopMenu></TopMenu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import LeftMenu from '@/views/LeftMenu.vue'
import TopMenu from '@/views/TopMenu.vue'

export default {
  components: {
    LeftMenu,TopMenu
  },
  data() {

  },

};
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    background-color: rgb(238, 241, 246);
  }
  
</style>