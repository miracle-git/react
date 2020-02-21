import { React, Provider, Perf, render, hashHistory } from '@/imports/react-lib';
import { RouteMap, store } from '@/imports/app-lib';

// 开发模式下启用
if(__DEV__) {
  window.Perf = Perf;
}

render(
  <Provider store={store}>
    <RouteMap history={hashHistory} />
  </Provider>,
  document.getElementById('root')
)