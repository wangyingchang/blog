<template>
  <div>
  
  <div id="content"></div>
  <el-button @click="read">123</el-button>
  </div>
</template>


<script>
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';

export default {
  data() {
    return {
      model: {},
      data: {},
    }
  },
  async mounted(){
    await this.initData();
    await this.initEditor();
  },
  
  methods: {
    read() {
      this.editor = new Editor({
        el: document.querySelector('#content'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '400px'
      });
      console.log('!!!!!!!')
      console.log(this.data)
      this.editor.setValue(this.data)
      console.log(this.editor.getValue())
      this.editor.on('change', () => {
        this.$emit('input', this.editor.getValue())
      })
    },
    initData() {
      this.$http({
          method: 'get',
          url:'/markdown',
      }).then((res)=> {
        this.data = res.data;
        console.log(1111)
      }).catch(()=> {
        
      });
    },
    initEditor() {

    },


  }
}
</script>

<style>
/* pre {
  background-color: whitesmoke;
  color: black;
} */
</style>
