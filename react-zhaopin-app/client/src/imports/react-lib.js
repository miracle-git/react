// 导出常用的模块集合
export const React = require('react')
export const ReactRedux = require('react-redux')
export const ReactRouter = require('react-router-dom')
export const Redux = require('redux')
export const ReduxThunk = require('redux-thunk').default
export const M2React = require('@/m2/m2-react')
export const M2Redux = require('@/m2/m2-redux')

// 常用React组件模块
export const [
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
] = [
  ReactRouter.BrowserRouter,
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
  combineReducers,
  compose,
  createStore
] = [
  Redux.applyMiddleware,
  Redux.bindActionCreators,
  Redux.combineReducers,
  Redux.compose,
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
  getComponentRef,
  M2Component
] = [
  M2React.boot,
  M2React.mapStateToProps,
  M2React.mapDispatchToProps,
  M2React.getComponentRef,
  M2React.M2Component
]
export const [
  m2connect,
  ReduxFactory
] = [
  M2Redux.m2connect,
  M2Redux.ReduxFactory
]