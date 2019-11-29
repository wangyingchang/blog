<template>
    <el-aside height="100vh" width="210px">
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