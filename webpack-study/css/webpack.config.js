var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');//单独抽离css打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:{
        // index:'./index.js'
        pageA:'./src/pageA.js',
        pageB:'./src/pageB.js'
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name][hash:5].bundle.js',
        chunkFilename:'[name][hash:5].js' //公共的新的包
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                common:{
                    name:'common',//新生成代码的名字
                    chunks:'all',//那些js范围内寻找公共的模块
                    minSize:1, //默认生成的体积
                    minChunks:2,  //认为公共模块最少出现的次数，就是要引用2次以上才算是公共模块
                    priority:1
                },
                vendor:{
                    name:'vender', //抽离公共的第三方库
                    test:/[\\/]node_modules[\\]/, //在哪里找公共的部分
                    priority:10, //数字越大 优先级越高
                    chunks:'all' //范围
                }
            }
        }
    },
    module:{
        rules:[{
            // test:/\.css$/,
            // use:[
                // {
                //     loader:MiniCssExtractPlugin.loader
                // },
                // // {
                // //     loader:'style-loader',
                // // },
                // {
                //     loader:'css-loader'
                // }
            // ]
          
                test:/\.less$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:[
                                require('postcss-cssnext'),
                                require("autoprefixer"),
                                require('cssnano')
                            ]
                        }
                    },
                    {
                        loader:'less-loader'
                    },


                ]
            }

        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html',
          
            // 指定文件插入页面中
            // chunks:[],
            minify:{
                // 去掉空格
                // collapseWhitespace:true,
                // 清理注释
                removeComments:true
            }
        }),
        // 每次清除上一次的打包文件
        new CleanWebpackPlugin(),
        // new Webpack.HotModuleReplacementPlugin()
    ],
    mode:'development'

}