import { React, M2Component } from '@lib/react-lib'
import { AppDict } from '@lib/com-lib'
import { DataUtil, Form, FormItem, Input, Button, Select, SelectOption } from '@lib/vendor-lib'

class UserFilter extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()
    this.diplomaItems = DataUtil.getDictItems(AppDict, 'diploma')
    this.hobbyItems = DataUtil.getDictItems(AppDict, 'hobby')
  }

  render() {
    return (
      <Form layout="inline" className="filter-form" onSubmit={this.props.query}>
        <FormItem label="员工编号或姓名" {...this.formItemLayout}>
          {
            this.getFieldDecorator('keyword')(
              <Input placeholder="请输入员工编号或姓名" autoComplete="off"/>
            )
          }
        </FormItem>
        <FormItem label="最高学历" {...this.formItemLayout}>
          {
            this.getFieldDecorator('diploma', {
              defaultValue: []
            })(
              <Select mode="multiple"
                      placeholder="请选择最高学历"
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
        <FormItem className="action">
          <Button type="primary" htmlType="submit">查询</Button>
          <Button onClick={()=>this.resetForm()}>重置</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(UserFilter)