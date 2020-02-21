import { React, M2Component } from '@lib/react-lib'
import { AppUtil, AppDict, AppMenu, PermData, PermService } from '@lib/com-lib'
import { DataUtil, Form, FormItem, Input, Radio, RadioGroup, Tree, TreeNode, Message } from '@lib/vendor-lib'

class PermConfig extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()

    this.formItemLayout = PermData.layout.formItem
    this.statusItems = DataUtil.getDictItems(AppDict, 'perm_status')
  }

  componentInitialMethods() {
    super.componentInitialMethods()

    this.handleSubmit = (e, modal) => {
      this.validateForm((values) => {
        const item = {...this.props.item, status: values.status}
        Message.success(`角色【${item.role_name}】，设置权限成功! `)
        AppUtil.hideModal(modal)
      }, e)
    }
  }

  render() {
    const { item, patched } = this.props

    return (
      <Form className="form-container detail-form">
        <FormItem label="角色名称" {...this.formItemLayout}>
          {
            <Input disabled value={item.role_name}/>
          }
        </FormItem>
        <FormItem label="是否启用" {...this.formItemLayout}>
          {
            this.getFieldDecorator('status', {
              defaultValue: item.status ? '1' : '0'
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
        <FormItem label="应用权限" {...this.formItemLayout} className="tree-form-item">
          <Tree checkable 
                defaultExpandedKeys={['app-perm']}
                checkedKeys={item.menus}
                onCheck={(checkedKeys)=>patched(checkedKeys, this)}>
            <TreeNode title="共享单车App" key="app-perm">
             {PermService.getTreeNodes(AppMenu)}
            </TreeNode>
          </Tree>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(PermConfig)