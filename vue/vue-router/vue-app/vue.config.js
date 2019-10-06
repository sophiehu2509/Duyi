const path = require('path');
module.exports={
    //是否打包sourcemap
    productionSourceMap:false,

    //设置输出目录
    outputDir:'./myDist',

    //给每一个引用文件加一个前缀
    publicPath:process.env.NODE_ENV === 'production'? 'http://www.duyiedu.com':'/',

    //把所有的静态资源放入到assets文件夹下面
    assetsDir:'assets',

    chainWebpack: config => {
        //config 给目录起别名
        config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views'))
    },

    configureWebpack:{
        // plugin:[],
        // module:{}
    },

    devServer:{
        proxy:{
            //可以用于跨域
            '/api/chat/sendMsg':{
                target:'http://api.duyiedu.com'
            }
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        //把 文件注入到全局中去 不需要再在某个文件用import 引用了
        patterns: [
            path.resolve(__dirname, 'src/assets/styles/variable.less')
        ]
      }
    }
}
