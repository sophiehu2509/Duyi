<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
//axios
import axios from 'axios';


export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted(){
    axios.get('/api/chat/sendMsg', {
      params: {
        msg: '你好啊',
        appkey: 'shan_1546508603194'
      }
    })
    .then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
// @import '../assets/styles/variable.less';

div {
  color: @color;
}
</style>