<template>
  <div class="about" v-html="data">
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      data: {},
    }
  },
  mounted(){
    this.initData();
  },
  
  methods: {
    initData() {
      this.$http({
          method: 'get',
          url:'/markdown',
      }).then((res)=> {
        this.data = res.data;
      }).catch(()=> {
      });
    }
  }
}
</script>>
