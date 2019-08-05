var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'my-first-webpack.bundle.js'
    
    },
    module:{
        rules:[
            {test:/\.less$/, use:['style-loader','css-loader', 'less-loader']}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development'
}

//_dirname 当前webpack.config.js 所在的目录
//chunk 代码块 共同的代码抽离出来 成一个代码块