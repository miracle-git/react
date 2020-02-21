import { React, Router, Route, IndexRoute } from "@/imports/react-lib";
import { App, Home, City, Search, User, Login, Detail, NotFound } from '@/imports/com-lib';

// 如果是大型项目，路由配置更复杂，可参见https://github.com/echenley/react-router-huge-apps-refactor
export default class RouteMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='city' component={City} />
          <Route path='user' component={User} />
          <Route path='login(/:router)' component={Login} />
          <Route path='search/:category(/:keyword)' component={Search} />
          <Route path='detail/:id' component={Detail} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}