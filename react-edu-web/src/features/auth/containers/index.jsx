import React from 'react'
import { DataType, DataSecurity, GraphicVerifyCode, SYMMETRIC_CRYPTO_TYPE/*, VERIFY_CODE_TYPE*/ } from 'm2-core'
import { connect } from 'm2-redux'
import { userLogin, userLogout } from '@/features/auth/redux/actions'
import './index.less'

@connect({ reducers: 'auth', actions: { userLogin, userLogout } })
class UserLoginPage extends React.Component {
  handleVerify() {
    const result = this.verifyCode.validate(this.$code.value);
    if (result) {
      alert('验证码正确');
    } else {
      alert('验证码错误');
    }
  }

  componentDidMount() {
    // 弱配置
    this.verifyCode = new GraphicVerifyCode('verify_code');
    // 强配置
    /*
    this.verifyCode = new GraphicVerifyCode('verify_code', {
      type: VERIFY_CODE_TYPE.letter_number, // 是否纯数字，纯字母，字母数字混合(默认)
      len: 5, // 验证码长度，默认4
      ignoreCase: true, // 是否忽略大小写, 默认true
      strokeLine: true, // 是否添加干扰线, 默认false
      strokePoint: true, // 是否添加干扰点, 默认false
      autoRefesh: false // 当比对错误时是否自动刷新产生新验证码，默认true
    });
    */
  }

  render() {
    const { auth, userLogin, userLogout } = this.props;
    const { loginUser } = auth
    const users = [{ id: 1, name: 'Miracle', age: 32 }, { id: 2, name: 'Jack', age: 35 }, { id: 3, name: 'Tom', age: 45 }]
    const userNames = DataType.pick(users, 'name', 'age');
    console.log(userNames)
    console.log(DataSecurity.encrypt('miracle', SYMMETRIC_CRYPTO_TYPE.DES ))

    return (
      <div className="body user-login-page">
        <div className="profile">
          {
            loginUser.authenticated ? (
              <>
                <span>您好，{loginUser.username}</span>
                <button className="btn btn-danger" onClick={()=>userLogout()}>注销</button>
              </>
            ) : (
              <button className="btn btn-info" onClick={()=>userLogin('Miracle')}>登录</button>
            )
          }
          <br/>
          <br/>
          <div id="verify_code" style={{width:100,height:30}}></div>
          <input type="text" ref={(el)=>this.$code=el} placeholder="请输入验证码"/>
          <button className="btn btn-link" onClick={()=>this.handleVerify()}>验证</button>
        </div>
      </div>
    )
  }
}

export default UserLoginPage
