import { React, PureRenderMixin, bindActionCreators, connect, hashHistory } from '@/imports/react-lib';
import { userinfoActions } from "@/imports/app-lib";
import { Header, Loading, UserLogin } from '@/imports/com-lib';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      checking: true // 检查是否处于"登录"中
    };
  }

  render() {
    return (
      <div id='login-container'>
        <Header title='用户登录'/>
        {
          this.state.checking ?
              <Loading message='正在校验用户信息...'/> :
              <UserLogin onLoginSuccess={this.loginSuccessHandler.bind(this)}/>
        }
      </div>
    )
  }

  componentDidMount() {
    this.checkUserInfo();
  }

  checkUserInfo() {
    const userinfo = this.props.userinfo;
    if(userinfo.userName) {
      // 已经登录
      this.goUserPage();
    } else {
      // 尚未登录
      this.setState({
        checking: false
      });
    }
  }

  // 登录成功之后处理逻辑
  loginSuccessHandler(userName) {
    // 将当前用户保存到Redux中
    let userinfo = this.props.userinfo;
    userinfo.userName = userName;
    this.props.userinfoActions.update(userinfo);

    // 执行页面跳转
    const router = this.props.params.router;
    if(router) {
      // 跳转到指定页面
      hashHistory.push(router);
    } else {
      // 跳转到默认页面(用户中心页)
      this.goUserPage();
    }
  }

  goUserPage() {
    hashHistory.push('/user');
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
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
)(Login)