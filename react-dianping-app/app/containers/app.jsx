import { React, PureRenderMixin, connect, bindActionCreators } from '@/imports/react-lib';
import { LocalStore, CacheKeys, userinfoActions } from '@/imports/app-lib';

import '@/static/css/common.less';
import '@/static/css/font.css';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      ready: false
    };
  }

  render() {
    return (
      <div>
        {
          this.state.ready ? this.props.children : <div>正在加载...</div>
        }
      </div>
    )
  }

  componentDidMount() {
    // 从localStore中获取当前城市
    let cityName = LocalStore.getItem(CacheKeys.CURRENT_CITY_NAME) || '北京';

    // 将当前城市存储在Redux中
    this.props.userinfoActions.update({
      cityName
    });

    // 页面准备完毕，开始正常渲染
    this.setState({ ready: true });
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)