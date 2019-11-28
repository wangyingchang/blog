<template>
  <div class="about">
    <h1>创建博客</h1>

    <el-input v-model="blogModel.title" placeholder="请输入文章标题"></el-input>
    
    <el-select v-model="blogModel.sortId" placeholder="请选择文章分类">
      <el-option
        v-for="item in sortList"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>

    <el-select v-model="blogModel.tagIds" placeholder="请选择文章标签"
      multiple
      filterable
      allow-create
      default-first-option
      >
      <el-option
        v-for="item in tagList"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>

    <div id="content">
    </div>

    <el-button @click="save" type="primary">保存</el-button>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';

import date2String from '../utils/index';


export default {
  data() {
    return {
      blogModel: {},
      sortList: [],
      tagList: [],
      editor: {},
    }
  },
  async mounted(){
    await this.initData();
    await this.initEditor();
  },
  methods: {
    initData() {
      if (this.$route.query.blogId) {
        this.$http({
          method: 'get',
          url:'/api/admin/rest/blog/'+ this.$route.query.blogId,
        }).then((res)=> {
          this.blogModel = res.data;
          console.log(this.blogModel)
          this.$message({
            type: 'success',
            message: '成功'
          })
        }).catch(()=> {
          this.$message({
            type: 'error',
            message: '失败'
          })
        });
      }

      // 博客分类数据
      this.$http({
          method: 'get',
          url:'/api/admin/rest/sort',
      }).then((res)=> {
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
      // 博客标记数据
      this.$http({
          method: 'get',
          url:'/api/admin/rest/tag',
      }).then((res)=> {
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

    initEditor() {
      this.editor = new Editor({
        el: document.querySelector('#content'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '300px'
      });
      if (this.value) {
        this.editor.setValue(this.value)
      }
      this.editor.on('change', () => {
        this.$emit('input', this.editor.getValue())
      })
    },

    destroyEditor() {
      if (!this.editor) return
      this.editor.off('change')
      this.editor.remove()
    },
    
    getValue() {
      return this.editor.getValue()
    },
    setValue(value) {
      this.editor.setValue(value)
    },
    getHtml() {
      return this.editor.getHtml()
    },
    setHtml(value) {
      this.editor.setHtml(value)
    },

    save(){
      this.blogModel.content = this.getValue();
      console.log(this.blogModel);

      this.$http({
          method: 'post',
          url:'/createBlog',
          data: this.blogModel
      }).then((res)=> {
        console.log(res)
        this.$message({
          type: 'success',
          message: '创建成功'
        })
      }).catch(()=> {
        this.$message({
          type: 'error',
          message: '创建失败'
        })
      });
    }
  }
}
</script>
