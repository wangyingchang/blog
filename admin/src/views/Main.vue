<template>
<el-container class="container" style="height: 100vh;">
  <el-aside height="100vh" width="200px">
    <el-menu 
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">博客管理</span>
        </template>
         <el-menu-item-group>
          <el-menu-item index="/blog/list">文章管理</el-menu-item>
          <el-menu-item index="/sort/list">分类管理</el-menu-item>
          <el-menu-item index="/tag/list">标签管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">笔记管理</span>
        </template>
         <el-menu-item-group>
          <el-menu-item index="/note/list">笔记</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>汪应昌</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

</el-container>
</template>

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

<script>
  export default {
    data() {
    },
    methods: {
      handleOpen(){

      },
      handleClose(){
        
      }
    }
  };
</script>