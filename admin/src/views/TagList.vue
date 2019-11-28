<template>
  <div class="tag">
    <h1>标签列表</h1>
    <el-button type="primary" @click="dialogFormVisible = true">新建标签</el-button>
    <el-table
    :data="tagList"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="100"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="分类名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述"
      width="200">
    </el-table-column>
    <el-table-column
      prop="createdAt"
      label="创建时间"
      width="180"
      sortable>
    </el-table-column>
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
  <!-- 弹出框 -->
  <el-dialog title="创建标签" :visible.sync="dialogFormVisible">
    <el-form :model="tagModel">
      <el-form-item label="标签名称" :label-width="formLabelWidth">
        <el-input  v-model="tagModel.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="标签描述" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="tagModel.description" ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
import date2String from '../utils/index';

export default {
  data(){
    return {
      tagList: [],
      tagModel: {},
      dialogFormVisible: false,
      formLabelWidth: '120px'
    }
  },
  mounted: function(){
    this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      this.$http({
          method: 'get',
          url:'/api/admin/rest/tag',
      }).then((res)=> {
        console.log(res)
        // this.tagList = res.data
        // 处理时间
        this.tagList = res.data.map((tag)=> {
          tag.createdAt = date2String(new Date(tag.createdAt));
          return tag
        })
        this.$message({
          type: 'success',
          message: '初始化数据成功'
        })
      }).catch(()=> {
        this.$message({
          type: 'error',
          message: '初始化数据失败'
        })
      });
    },

    // 添加
    save() {
      this.$http({
          method: 'post',
          url:'/api/admin/rest/tag',
          data: this.tagModel
      }).then((res)=> {
        console.log(res);
        this.$message({
          type: 'success',
          message: '成功'
        })
        this.dialogFormVisible = false
        this.initData()
      }).catch(()=> {
        this.$message({
          type: 'error',
          message: '失败'
        })
      });
    },

    // 修改
    handleEdit(index, row) {
        console.log(index, row)
        this.dialogFormVisible = true
        this.tagModel = row;
    },

    // 删除
    handleDelete(index, row) {
      console.log(index, row)
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
            method: 'delete',
            url:'/api/admin/rest/tag/' + row.id,
        }).then((res)=> {
          console.log(res)
          this.$message({
            type: 'success',
            message: '删除成功'
          })

          this.initData()
        }).catch(()=> {
          this.$message({
            type: 'error',
            message: '删除失败'
          })
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    
  }
  
}
</script>
