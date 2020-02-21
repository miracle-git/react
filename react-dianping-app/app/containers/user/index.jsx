import { React, PureRenderMixin, connect, hashHistory } from '@/imports/react-lib';
import { Header, UserInfo } from '@/imports/com-lib';
import OrderList from './widgets/order-list';

class User extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const userinfo = this.props.userinfo;

    return (
      <div id='user-center-container'>
        <Header title='用户中心' backRouter='/'/>
        <UserInfo userName={userinfo.userName} cityName={userinfo.cityName}/>
        <OrderList userName={userinfo.userName}/>
      </div>
    )
  }

  componentDidMount() {
    // 检查用户是否登录
    if(!this.props.userinfo.userName) {
      hashHistory.push('/login');
    }
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)