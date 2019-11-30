<template>
  <el-container>
    <el-aside width="210px"> 
      <LeftMenu></LeftMenu>
    </el-aside>
  <el-container>
    <el-header>    
      <TopMenu></TopMenu>
    </el-header>
    <el-main> 
      <router-view></router-view>
    </el-main>
    <el-footer>
      footer
    </el-footer>
  </el-container>
</el-container>
</template>

<script>
import LeftMenu from '@/views/LeftMenu.vue'
import TopMenu from '@/views/TopMenu.vue'

export default {
  name: 'Main',
  components: {
    LeftMenu,TopMenu
  },
  data() {

  },

};
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
  }
  

</style>