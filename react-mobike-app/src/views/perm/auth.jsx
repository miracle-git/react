import { React, M2Component } from '@lib/react-lib'
import { AppUtil, PermData, PermService } from '@lib/com-lib'
import { Form, FormItem, Input, Transfer, Message } from '@lib/vendor-lib'

class PermAuth extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()

    this.formItemLayout = PermData.layout.formItem
  }

  componentInitialMethods() {
    super.componentInitialMethods()

    this.handleSubmit = (e, modal) => {
      this.validateForm((values) => {
        const { item } = this.props
        const { targetKeys } = this.state
        const data = {
          roleId: item.id,
          selectedUserIds: targetKeys
        }
        console.log(data)
        Message.success(`角色【${item.role_name}】，用户授权成功! `)
        AppUtil.hideModal(modal)
      }, e)
    }
  }

  componentInitialState() {
    this.state = {
      userList: [],
      targetKeys: []
    }
  }

  componentDidMount() {
    PermService.getRoleUsers(this)
  }

  render() {
    const { item } = this.props
    const { userList, targetKeys } = this.state

    return (
      <Form className="form-container detail-form auth-form">
        <FormItem label="角色名称" {...this.formItemLayout}>
          {
            <Input disabled value={item.role_name} className="role-input"/>
          }
        </FormItem>
        <FormItem label="选择用户" {...this.formItemLayout}>
          <Transfer dataSource={userList} 
                    targetKeys={targetKeys}
                    titles={['待选用户', '已选用户']}
                    showSearch
                    locale={{searchPlaceholder:'请输入用户名'}}
                    onChange={(targetKeys) => {this.setState({targetKeys})}}
                    filterOption={(inputValue, option) => option.title.indexOf(inputValue) > -1}
                    render={item => item.title}/>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(PermAuth)