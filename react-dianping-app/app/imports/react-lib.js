// 重要React库引入
const router = require('react-router');
const redux = require('redux');
const react_redux = require('react-redux');

// 导出常用的模块集合
export const React = require('react');
export const PureRenderMixin = require('react-addons-pure-render-mixin');
export const [bindActionCreators, combineReducers, createStore] = [redux.bindActionCreators, redux.combineReducers, redux.createStore];
export const [connect, Provider] = [react_redux.connect, react_redux.Provider];
export const [hashHistory, Link, Router, Route, IndexRoute] = [router.hashHistory, router.Link, router.Router, router.Route, router.IndexRoute ];
export const render = require('react-dom').render;
export const Perf = require('react-addons-perf');
export const ReactSwipe = require('react-swipe');
export const uuid = require('uuid');