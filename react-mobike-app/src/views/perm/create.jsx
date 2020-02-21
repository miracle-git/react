import { React, M2Component } from '@lib/react-lib'
import { AppUtil, AppDict, PermData } from '@lib/com-lib'
import { DataUtil, Form, FormItem, Input, Radio, RadioGroup, Message } from '@lib/vendor-lib'

class PermCreate extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()

    this.formItemLayout = PermData.layout.formItem
    this.statusItems = DataUtil.getDictItems(AppDict, 'perm_status')
  }

  componentInitialMethods() {
    super.componentInitialMethods()

    this.handleSubmit = (e, modal) => {
      this.validateForm((values) => {
        Message.success(`恭喜您，${values.role_name}，新增成功! `)
        AppUtil.hideModal(modal)
      }, e)
    }
  }

  componentFormValidate() {
    return PermData.rules
  }

  render() {
    return (
      <Form className="form-container">
        <FormItem label="角色名称" {...this.formItemLayout}>
          {
            this.getFieldDecorator('role_name')(
              <Input placeholder="请输入角色名称" autoComplete="off"/>
            )
          }
        </FormItem>
        <FormItem label="是否启用" {...this.formItemLayout}>
          {
            this.getFieldDecorator('status', {
              defaultValue: '0'
            })(
              <RadioGroup>
                {
                  this.statusItems.map((item, index) => (
                    <Radio value={item.key} key={index}>{item.value}</Radio>
                  ))
                }
              </RadioGroup>
            )
          }
        </FormItem>
        <FormItem label="授权人" {...this.formItemLayout}>
          {
            this.getFieldDecorator('auth_user')(
              <Input placeholder="请输入授权人" autoComplete="off"/>
            )
          }
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(PermCreate)