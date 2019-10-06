# 导航守卫

## 全局守卫
- beforeEach
- beforeResolve
- afterEach

## 路由独享守卫
- beforeEnter

## 组件内守卫
- beforeRouteLeave 当离开这个路径时执行
- beforeRouteEnter 
- beforeRouteUpdate mounted
- to from next 


### 进入某一个路径时，执行顺序
- beforeEach -> beforeEnter -> beforeRouteEnter -> beforeResolve -> afterEach 


# 动态路由
- /question/:id
- this.$route.params.xxx  
- this.$route.query.xxx  




# vue-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



