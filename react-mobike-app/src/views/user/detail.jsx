import { React, M2Component } from '@lib/react-lib'
import { UserService, UserData } from '@lib/com-lib'
import { Form, FormItem } from '@lib/vendor-lib'

export default class UserDetail extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()
    this.formItemLayout = UserData.layout.formItem
  }

  render() {
    const currentUser = this.props.item

    return (
      <Form className="form-container detail-form">
        <FormItem label="姓名" {...this.formItemLayout}>
          {currentUser.userName}
        </FormItem>
        <FormItem label="性别" {...this.formItemLayout}>
          {UserService.getDictValue(currentUser, 'gender')}
        </FormItem>
        <FormItem label="最高学历" {...this.formItemLayout}>
          {UserService.getDictValue(currentUser, 'diploma')}
        </FormItem>
        <FormItem label="兴趣爱好" {...this.formItemLayout}>
          {UserService.getDictValue(currentUser, 'hobby')}
        </FormItem>
        <FormItem label="是否已婚" {...this.formItemLayout}>
          {UserService.getDictValue(currentUser, 'isMarried')}
        </FormItem>
        <FormItem label="家庭住址" {...this.formItemLayout}>
          {currentUser.address}
        </FormItem>
      </Form>
    )
  }
}