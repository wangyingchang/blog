<template>
  <div class="about">
    <h1>创建博客</h1>
    <el-input v-model="model.title" placeholder="请输入内容"></el-input>
    
    <el-select v-model="model.sort" placeholder="请选择文章分类">
      <el-option
        v-for="item in sortData"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>

    <el-select
      v-model="model.tags"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="请选择文章标签">
      <el-option
        v-for="item in tagData"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>

    <el-input v-model="model.image" placeholder="图片"></el-input>
    <br>
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
      model:{},
      editor: null,
      sortData: [],
      tagData: [],
    }
  },
  mounted(){
    this.initData();
    this.initEditor();
  },
  methods: {
    initData() {
      // 博客分类数据
      this.$http({
          method: 'get',
          url:'/api/admin/rest/sort',
      }).then((res)=> {
        console.log(res)
        // this.sortData = res.data
        this.sortData = res.data.map((sort)=> {
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
        console.log(res)
        // this.tagData = res.data
        // 处理时间
        this.tagData = res.data.map((tag)=> {
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
      this.model.content=this.getValue();
      console.log(this.model);

      this.$http({
          method: 'post',
          url:'/createBlog',
          data: this.model
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
