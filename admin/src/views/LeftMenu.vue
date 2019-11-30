<template>
    <div class="left_menu">
      <el-menu 
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#409EFF"
        >
        <el-menu-item>
          <i class="el-icon-user"></i>
          <span slot="title">个人博客后台</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-edit"></i>
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
            <i class="el-icon-notebook-2"></i>
            <span slot="title">笔记管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/note/list">笔记</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/note/list">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">每日一句</span>
        </el-menu-item>
      </el-menu>
  </div>
</template>

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

<style scoped>
  .left_menu {
    height: 100vh;
    width: 210px;
  }
</style>