import { React, M2Component, Link } from '@lib/react-lib'
import { Card, Form, FormItem, Button, Checkbox, Input, Icon, Message } from '@lib/vendor-lib'
import { view_style_form } from '@lib/static-lib' // eslint-disable-line

class FormLogin extends M2Component {
  componentInitialMethods() {
    super.componentInitialMethods()

    this.handleSubmit = (e) => {
      this.validateForm((values) => {
        Message.success(`恭喜您，${values.userName}! 你已经掌握React表单技能了。`)
      }, e)
    }
  }

  componentFormValidate() {
    return {
      userName: [{
        required: true,
        message: '请填写用户名'
      }, {
        min: 3,
        max: 10,
        message: '用户名必须至少3个字符，不超过10个字符'
      }, {
        pattern: /^\w+/g,
        // pattern: new RegExp('^\\w+', 'g'),
        message: '用户名只能包含数字和字母开头'
      }],
      password: [{
        required: true,
        message: '请填写密码'
      }]
    }
  }

  render() {
    return (
      <div className="form-container">
        <Card title="行内登录表单">
          <Form layout="inline">
            <FormItem>
              <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"autoComplete="off"/>
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock"/>} placeholder="请输入密码" type="password"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="水平登录表单">
          <Form onSubmit={this.handleSubmit} className="horizontal-login-form">
            <FormItem>
              {
                this.getFieldDecorator('userName')(
                  <Input prefix={<Icon type="user"/>} placeholder="请输入用户名" autoComplete="off"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                this.getFieldDecorator('password')(
                  <Input prefix={<Icon type="lock"/>} placeholder="请输入密码" type="password"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                this.getFieldDecorator('remember', {
                  defaultValue: true,
                  propName: 'checked'
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <Link to="/forgot" className="forgot">忘记密码</Link>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormLogin)