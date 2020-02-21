import { React, M2Component, m2connect } from '@lib/react-lib'
import { Button, InputItem, List, RadioItem, WingBlank, WhiteSpace } from '@lib/vendor-lib'
import { USER_TYPES } from '@/redux/features/auth/constant'

@m2connect({ reducers: 'auth' })
class Register extends M2Component {
  componentInitialState() {
    this.state = {
      selectedType: 'genius'
    }
  }

  render() {
    const { selectedType } = this.state
    return (
      <WingBlank className="register-container">
        <List>
          <InputItem>用户名</InputItem>
          <InputItem>密码</InputItem>
          <InputItem>确认密码</InputItem>
          {
            USER_TYPES.map((item, index) => (
              <RadioItem checked={item.key===selectedType} key={index}>{item.value}</RadioItem>
            ))
          }
        </List>
        <WhiteSpace size="lg"/>
        <Button type="primary">注册</Button>
      </WingBlank>
    )
  }
}
export default Register