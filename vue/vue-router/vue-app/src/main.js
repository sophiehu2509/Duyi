import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import store from './store/index'

Vue.config.productionTip = false

//全局守卫
router.beforeEach((to, from, next) => {
  // if(to.name === 'name' || to.name === 'community'|| to.name ==='academic' || to.name ==='download' || to.name ==="personal"){
   
  // if(['student', 'community', 'academic', 'download', 'personal', 'name'].includes(to.name)){
  
  // }else{
  //   next();
  // }

  const needLogin = to.matched.some(route => route.meta && route.meta.login )
  if(needLogin){
    const isLogin = document.cookie.includes('login=true');
    if(isLogin){
      next();
      return;
    }

    const toLoginFlage = window.confirm('该页面需要登录号访问，是否登录？');
    if(toLoginFlage){
      next('/login');
    }

    return;

  }
  next();

})

//全部解析完之后
router.beforeResolve((to, from, next) => {
  next();
})

router.afterEach(() => {

})
//vue组件内的守卫网页 最下面有全部的守卫执行顺序

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
