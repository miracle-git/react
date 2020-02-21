# react-dianping-app

React-Dianping-App应用，详情参考[这里](./docs/README.md)

# npm install 安装项目的所有依赖包
# npm start 启动开发环境(搭配热更新，http://localhost:8080)
# npm run build 部署生产环境(项目被打包到build目录)
# npm run server 搭建React本地服务器(基于koa)运行项目(http://localhost:8088)
# npm run mock 搭建mock api本地服务器(基于koa)模拟接口(http://localhost:3000)

在现有脚手架上搭建依赖包
# mpm install --save react react-dom react-router 配置React依赖
# npm install --save redux react-redux 配置Redux依赖
# npm install --save whatwg-fetch es6-promise 通过fetch实现api交互的依赖
# mpm install --save-dev koa koa-body koa-better-router 通过koa完成mock api数据接口的依赖
# npm install --save react-addons-perf react-addons-pure-render-mixin 完成性能检测和调优

App搭建依赖包
# npm install --save react-swipe swipe-js-iso 配置轮播图依赖

项目目录介绍
# app 所有的源代码，包含静态资源，工具以及组件
  -> actions 定义所有的操作函数(可按类型来划分)
  -> api 定义所有与后端交互的api(可按类型来划分)
  -> components 所有的公共组件(每个组件建立独立文件夹，默认配置index.jsx)
  -> containers 所有页面级组件(直接独立页面，每个页面建立独立文件夹，默认配置index.jsx)
  -> constants 定义所有的操作类型常量(可按类型来划分)
  -> imports 定义所有React库以及App库引用(可单独依赖快捷引用)
  -> reducers 定义所有的计算规则(包含合并规则index.jsx以及按类型划分的子规则)
  -> router 所有页面路由配置映射(默认配置index.jsx)
  -> static 存放所有的静态资源文件
  -> util 存放所有的工具类函数
  -> index.js 应用程序的入口组件
  -> index.html 应用程序入口页面
# build 为生产环境准备的项目打包文件（自动生成）
# config 所有的项目配置文件，包含webpack, server-ssr
  -> server-ssr.config.js 搭建Koa Server用于服务端渲染测试
  -> webpack.config.js.bk 开发环境的打包配置文件
  -> webpack.prod.config.js 生产环境的打包配置文件
# docs 项目相关的技术文档
# mock 模拟后端api接口(使用koa,需在webpack.config.js->devServer完成反向代理配置)
# node_modules 所有依赖包安装的位置
# .babelrc babel相关的配置文件
# package.json 项目依赖包配置文件