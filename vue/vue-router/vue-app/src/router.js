import Vue from 'vue';
import  Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  mode:'history',
  linkExactActiveClass:'active-exact',
  linkActiveClass:'active',
  routes:[
    // {
    //   path:'/',
    //   redirect:'/home'
    // },
    {
      path:'/Home',
      name:'home',
      component:Home
    },
    {
      path:'/learn',
      name:'learn',
      component:() => import('./views/Learn')
    },
    {
      path:'/student',
      name:'student',
      component:() => import('./views/Student')
    },
    {
      path:'/about',
      name:'about',
      component:() => import('./views/About')
    },
    {
      path:'/community',
      name:'community',
      component:() => import('./views/Community'),
      //重定向 转到这个页时的 默认选项
      redirect:'/community/academic',  
      children:[
        {
          path:'academic', //没有斜杠才会向上找path 然后拼接在一起
          name:'academic',
          component:() => import('./views/Academic')
        },
        {
          path:'download',
          name:'download',
          component:() => import('./views/Download')

        },
        {
          path:'personal',
          name:'personal',
          component:() => import('./views/Personal')
        }
      ]
    },
    {
      path:'/question/:id',
      name:'question',
      component:() => import('./views/Question')
    },
    {
      path:'/NotFound',
      component:() => import('./views/NotFound')
    },
    {
      // * 表示上面的路径都没有匹配的
      path:'*',  
      redirect(to){
        if(to.path === '/'){
          return '/home'
        }else{
          return '/NotFound'
        }

      }
    }

  ]
})




















// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router)  //$router $rout 添加

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
