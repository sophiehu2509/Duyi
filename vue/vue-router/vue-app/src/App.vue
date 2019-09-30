<template>
  <div id="app">
    <div class="header">
      <div class="logo" @click="handleClick">渡一教育</div>
      <!-- <router-link tag="div" class="logo" to="/home">渡一教育</router-link> -->
      <ul class="nav">
      <router-link tag="li" to="/home">首页</router-link>
      <router-link tag="li" to="/learn">课程展示</router-link>
      <router-link tag="li" to="/student">学员展示</router-link>
      <router-link tag="li" to="/about">关于</router-link>
      <router-link tag="li" to="/community">社区</router-link>
      </ul>
    </div>
   
    <router-view class="view"/> 
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(){
      //在页面点击返回的时候 返回的步骤不一样

      //[a, b, c, d] => [a, b, c, d, e]
      // this.$router.push('/home');

      //[a, b, c, d] => [a, b, c, e]
      this.$router.replace('/home');

      //0 表示当前页
      // this.$router.go(0); 
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  background-color: #38f;
  line-height: 70px;
  padding-bottom: 2px;
  color: #fff;
}

.logo {
  cursor: pointer;
}

.nav {
  display: flex;
}

.nav li {
  margin: 0 20px;
  cursor: pointer;
}

.view {
  padding: 50px 200px;
}

.active {
  font-weight: bold;
}

.active{
  font-weight: bold;
}
</style>
