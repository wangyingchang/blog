<template>
  <div class="sort">
    <h1>分类列表</h1>
    <el-button type="primary" @click="dialogFormVisible = true">新建分类</el-button>
    <el-table
    :data="sortList"
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
  <el-dialog title="创建分类" :visible.sync="dialogFormVisible">
    <el-form :model="sortModel">
      <el-form-item label="分类名称" :label-width="formLabelWidth">
        <el-input  v-model="sortModel.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="分类描述" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="sortModel.description" ></el-input>
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
      sortList: [],
      sortModel: {},
      dialogFormVisible: false,
      formLabelWidth: '120px'
    }
  },
  mounted: function(){
    this.initData();
  },
  methods: {
    initData() {
      this.$http({
          method: 'get',
          url:'/api/admin/rest/sort',
      }).then((res)=> {
        console.log(res)
        // this.sortList = res.data
        this.sortList = res.data.map((sort)=> {
          sort.createdAt = date2String(new Date(sort.createdAt));
          return sort
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

    // 添加分类
    save() {
      this.$http({
          method: 'post',
          url:'/api/admin/rest/sort',
          data: this.sortModel
      }).then((res)=> {
        console.log(res);
        this.$message({
          type: 'success',
          message: '创建成功'
        })
        this.dialogFormVisible = false
        this.initData()
      }).catch(()=> {
        this.$message({
          type: 'error',
          message: '创建失败'
        })
      });
    },


    handleEdit(index, row) {
        console.log(index, row);
        this.dialogFormVisible = true
        this.sortModel = row;
    },

    // 删除
    handleDelete(index, row) {
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http({
            method: 'delete',
            url:'/api/admin/rest/sort/' + row.id,
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
