// 导出常用的模块集合
export const React = require('react')
export const ReactRedux = require('react-redux')
export const ReactRouter = require('react-router-dom')
export const Redux = require('redux')
export const M2React = require('@/shared/m2-react')

// 常用React组件模块
export const [
  HashRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
] = [
  ReactRouter.HashRouter,
  ReactRouter.Route,
  ReactRouter.Switch,
  ReactRouter.NavLink,
  ReactRouter.Link,
  ReactRouter.Redirect
]
export const [
  applyMiddleware,
  bindActionCreators,
  createStore
] = [
  Redux.applyMiddleware,
  Redux.bindActionCreators,
  Redux.createStore
]
export const [
  connect,
  Provider
] = [
  ReactRedux.connect,
  ReactRedux.Provider
]
export const [
  boot,
  mapStateToProps,
  mapDispatchToProps,
  M2Component
] = [
  M2React.boot,
  M2React.mapStateToProps,
  M2React.mapDispatchToProps,
  M2React.M2Component
]