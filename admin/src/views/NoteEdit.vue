<template>
  <div class="about">
    <h1>新建笔记</h1>
    <el-input v-model="model.fileName" placeholder="请输入笔记名称"></el-input>
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

//import date2String from '../utils/index';


export default {
  data() {
    return {
      model: {
        fileName: null,
        content: {}
      }
    }
  },
  mounted(){
    this.initData();
    this.initEditor();
  },
  methods: {
    initData() {
      if (this.$route.query.fileName) {
        
        this.$http({
          method: 'get',
          url:'/note/'+ this.$route.query.fileName,
        }).then((res)=> {
          this.model.fileName = this.$route.query.fileName
          this.model.content = res.data.content;
         this.editor.setValue(this.model.content)
          this.$message({
            type: 'success',
            message: '成功'
          })
        }).catch(()=> {
          this.$message({
            type: 'error',
            message: '接口错误'
          })
        });
      }
    },

    initEditor() {
      this.editor = new Editor({
        el: document.querySelector('#content'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '600px'
      });
      if (this.value) {
        this.editor.setValue(this.value)
      }
      this.editor.on('change', () => {
        this.$emit('input', this.editor.getValue())
      })
    },
    save(){
      this.model.content = this.editor.getValue();
      console.log(this.model)
      this.$http({
          method: 'post',
          url:'/note',
          data: this.model
      }).then((res)=> {
        this.$message({
          type: 'success',
          message: res.data.message
        })
      }).catch((res)=> {
        this.$message({
          type: 'error',
          message: res.data.message
        })
      });
    }
  }
}
</script>
