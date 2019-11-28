<template>
  <div class="blog">
    <h1>博客列表</h1>
    <el-button type="primary" @click="createBlog">创建博客</el-button>

    <el-table :data="blogList" style="width: 100%" >
    <el-table-column
      label="ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="title"
      prop="title">
    </el-table-column>
    <el-table-column
      label="views"
      prop="views">
    </el-table-column>
    <el-table-column
      label="Date"
      prop="createdAt">
    </el-table-column>
    <el-table-column label="操作">
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
      blogList: []
    }
  },
  mounted(){
    this.$http({
        method: 'get',
        url:'/api/admin/rest/blog',
    }).then((res)=>{
      this.blogList = res.data
    });
  },
  methods: {
    createBlog() {
      this.$router.push('/blog/edit')
    },
    handleEdit(index, row) {
      this.$router.push({ path: '/blog/edit', query: { blogId: row.id} })
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
  
}
</script>
