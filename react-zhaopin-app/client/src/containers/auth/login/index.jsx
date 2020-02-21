import { React, M2Component, m2connect } from '@lib/react-lib'
import { Button, InputItem, List, WingBlank, WhiteSpace } from '@lib/vendor-lib'
import { userLogin } from '@/redux/features/auth/actions'

@m2connect({ actions: { userLogin } })
class Login extends M2Component {
  componentDidMount() {
    this.props.userLogin('Miracle', 'primesoft')
  }

  render() {
    return (
      <WingBlank className="login-container">
        <List>
          <InputItem>用户名</InputItem>
          <InputItem>密码</InputItem>
        </List>
        <WhiteSpace size="lg"/>
        <Button type="primary">登录</Button>
        <WhiteSpace/>
        <Button type="primary" onClick={() => this.props.history.push('/auth/register')}>注册</Button>
      </WingBlank>
    )
  }
}
export default Login