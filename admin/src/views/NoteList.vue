<template>
  <div class="note">
    <h1>笔记列表</h1>
    <el-button type="primary" @click="createNote">新建笔记</el-button>

    <el-table
    :data="noteList"
    stripe
    style="width: 100%">
    <el-table-column
      prop="fileName"
      label="文件名">
    </el-table-column>>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
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
  name: 'NoteList',
  data() {
    return {
      noteList: [],
      model: {},
      data: {},
    }
  },
  async mounted(){
    await this.initData();
    await this.initEditor();
  },
  
  methods: {
    createNote() {
        this.$router.push('/note/edit')
    },
    initData() {
      this.$http({
          method: 'get',
          url:'/note',
      }).then((res)=> {
        this.noteList = res.data;
        console.log(this.noteList);
      }).catch(()=> {
        
      });
    },
    handleEdit(index, row) {
      this.$router.push({ path: '/note/edit', query: { fileName: row.fileName} })
    },
    handleDelete() {
      this.$message({
        type: 'warn',
        message: '辛辛苦苦写的笔记为什么要删呢？'
      })
    }


  }
}
</script>

<style>
/* pre {
  background-color: whitesmoke;
  color: black;
} */
</style>
