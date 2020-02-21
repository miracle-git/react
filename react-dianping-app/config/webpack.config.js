const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const appPath = path.resolve(__dirname, '../app');

module.exports = {
  entry: path.join(appPath, 'index.jsx'),
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      '@': appPath
    }
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader!less-loader'},
      {test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader'},
      {test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000'},  // 限制大小5kb
      {test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000'} // 限制大小小于5kb
    ]
  },
  postcss: [
    require('autoprefixer') // 调用autoprefixer插件自动添加浏览器前缀标识，如display: flex
  ],
  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      template: path.join(appPath, 'index.html')
    }),
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),
    // 自动打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),
    // 可在业务JS中使用__DEV__全局变量判断是否处于开发模式（用于提示错误，测试报告等，prod模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'development') || 'false'))
    })
  ],
  devServer: {
    proxy: {
      '/api': {
        // 凡以/api开头的http请求都会代理到http://localhost:3000下，需启动npm run mock命令
        target: 'http://localhost:3000',
        secure: false
      }
    },
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    colors: true, // 终端中输出结果为彩色
    historyApiFallback: true, // 不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true, // 实时刷新
    hot: true  // 使用热加载插件HotModuleReplacementPlugin
  }
}
