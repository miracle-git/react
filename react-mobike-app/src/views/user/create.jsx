import { React, M2Component } from '@lib/react-lib'
import { AppUtil, AppDict, UserData } from '@lib/com-lib'
import {
  DataUtil, Form, FormItem, Input, TextArea, Radio, RadioGroup, 
  Select, SelectOption, Switch, Message
} from '@lib/vendor-lib'

class UserCreate extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()

    this.formItemLayout = UserData.layout.formItem
    this.genderItems = DataUtil.getDictItems(AppDict, 'gender')
    this.diplomaItems = DataUtil.getDictItems(AppDict, 'diploma')
    this.hobbyItems = DataUtil.getDictItems(AppDict, 'hobby')
  }

  componentInitialMethods() {
    super.componentInitialMethods()

    this.handleSubmit = (e, modal) => {
      this.validateForm((values) => {
        Message.success(`用户【${values.userName}】，新增成功! `)
        AppUtil.hideModal(modal)
      }, e)
    }
  }

  componentFormValidate() {
    return UserData.rules
  }

  render() {
    return (
      <Form className="form-container">
        <FormItem label="姓名" {...this.formItemLayout}>
          {
            this.getFieldDecorator('userName')(
              <Input placeholder="请输入姓名" autoComplete="off"/>
            )
          }
        </FormItem>
        <FormItem label="性别" {...this.formItemLayout}>
          {
            this.getFieldDecorator('gender', {
              defaultValue: '1'
            })(
              <RadioGroup>
                {
                  this.genderItems.map((item, index) => (
                    <Radio value={item.key} key={index}>{item.value}</Radio>
                  ))
                }
              </RadioGroup>
            )
          }
        </FormItem>
        <FormItem label="最高学历" {...this.formItemLayout}>
          {
            this.getFieldDecorator('diploma')(
              <Select placeholder="请选择最高学历"
                      className={this.getSelectClass('diploma')}>
                {
                  this.diplomaItems.map((item, index) => (
                    <SelectOption value={item.key} key={index}>{item.value}</SelectOption>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem label="兴趣爱好" {...this.formItemLayout}>
          {
            this.getFieldDecorator('hobby', {
              defaultValue: []
            })(
              <Select mode="multiple"
                      placeholder="请选择兴趣爱好"
                      className={this.getSelectClass('hobby')}>
                {
                  this.hobbyItems.map((item, index) => (
                    <SelectOption value={item.key} key={index}>{item.value}</SelectOption>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem label="是否已婚" {...this.formItemLayout}>
          {
            this.getFieldDecorator('isMarried', {
              defaultValue: true,
              propName: 'checked'
            })(
              <Switch/>
            )
          }
        </FormItem>
        <FormItem label="家庭住址" {...this.formItemLayout}>
          {
            this.getFieldDecorator('address')(
              <TextArea placeholder="请填写家庭住址" autosize={{minRows: 2, maxRows: 6}}/>
            )
          }
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(UserCreate)