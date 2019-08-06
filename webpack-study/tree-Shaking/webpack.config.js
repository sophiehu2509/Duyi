const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //单独抽离出CSS文件
const path = require('path');
const glob = require('glob-all');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');//老版本用这个，webpack新版本用的时候要注释掉，不然报错
const PurifyCSSPlugin = require('purifycss-webpack');

// 单独抽离css插件，打包抽离 'style-loader', 'css-loader'
module.exports = {
  module:{
    rules:[
      {
        test:/\.css$/,
        // use:['style-loader', 'css-loader']
        use:[MiniCssExtractPlugin.loader, 'css-loader']
        //style-loader 和 MiniCssExtractPlugin不可以同时用
      }
    ]
  },
  plugins: [
    
    new WebpackDeepScopeAnalysisPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      // chunkFilename: '[id].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync([path.join(__dirname, './*.html'),
      path.join(__dirname, './src/*.js')]),
    })
  ]
}