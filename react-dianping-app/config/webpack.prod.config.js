const path = require('path');
const webpack = require('webpack');
const package = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const appPath = path.resolve(__dirname, '../app');
const buildPath = path.resolve(__dirname, '../build');

module.exports = {
  entry: {
    app: path.join(appPath, 'index.jsx'),
    vendor: Object.keys(package.dependencies) // 将第三方依赖（node_modules中的）单独打包
  },
  output: {
    path: buildPath,
    filename: '/js/[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      '@': appPath
    }
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader') },
      { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },
      { test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000&name=img/[name].[ext]' }, //限制大小为5kb
      { test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000&font/[name].[chunkhash:8].[ext]' } //限制大小为5kb
    ]
  },
  postcss: [
    require('autoprefixer') //调用autoprefixer插件自动添加浏览器前缀标识，如display: flex
  ],
  plugins: [
    // webpack内置的banner-plugin
    new webpack.BannerPlugin('Copyright (c) mirhe@microsoft.com, Microsoft, Inc.'),
    // html模板插件
    new HtmlWebpackPlugin({
      template: path.join(appPath, 'index.html')
    }),
    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // 压缩JS时去掉所有的警告消息
        warnings: false
      }
    }),
    // 分离CSS和JS文件
    new ExtractTextPlugin('/css/[name].[contenthash:8].css'),
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/js/[name].[chunkhash:8].js'
    }),
    // 可在业务JS中使用__DEV__全局变量判断是否处于开发模式（用于提示错误，测试报告等，prod模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV == 'development' || false))
    })
  ]
};