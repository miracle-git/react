import { React, PureRenderMixin } from '@/imports/react-lib';

import './style.less';

export default class UserLogin extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      username: ''
    };
  }

  render() {
    return (
      <div id='login-info-container'>
        <div className='login-item username-container'>
          <i className='icon-phone'></i>
          <input type='text' placeholder='输入手机号' value={this.state.username} onChange={this.changeHandler.bind(this)} />
        </div>
        <div className='login-item password-container'>
          <i className='icon-key'></i>
          <button>发送验证码</button>
          <input type='text' placeholder='输入验证码'/>
        </div>
        <button className='btn-login' onClick={this.loginHandler.bind(this)}>登录</button>
      </div>
    )
  }

  changeHandler(event) {
    this.setState({
      username: event.target.value
    });
  }

  loginHandler() {
    this.props.onLoginSuccess(this.state.username);
  }
}