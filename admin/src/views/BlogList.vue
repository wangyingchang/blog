<template>
  <div class="blog">
    <h1>博客列表</h1>
    <el-button type="primary" @click="createBlog">创建博客</el-button>
<el-table
    :data="blogDate.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="title"
      prop="title">
    </el-table-column>
    <el-table-column
      label="content"
      prop="content">
    </el-table-column>
    <el-table-column
      label="image"
      prop="image">
    </el-table-column>
        <el-table-column
      label="views"
      prop="views">
    </el-table-column>
    <el-table-column
      label="Date"
      prop="createdAt">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>

export default {
  data(){
    return {
      blogDate: {}
    }
  },
  mounted: function(){
    this.$http({
        method: 'get',
        url:'/api/admin/rest/blog',
    }).then((res)=>{
      this.blogDate = res.data
      console.log(res);
    });
  },
  methods: {
    createBlog() {
      this.$router.push('/blog/edit')
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
  
}
</script>
