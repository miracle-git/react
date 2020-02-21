import { React, M2Component } from '@lib/react-lib'
import { AppDict } from '@lib/com-lib'
import { DataUtil, Form, FormItem, Button, Select, SelectOption } from '@lib/vendor-lib'

class CityFilter extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()

    this.parkModes = DataUtil.getDictItems(AppDict, 'park_mode')
    this.operationModes = DataUtil.getDictItems(AppDict, 'operation_mode')
    this.statuses = DataUtil.getDictItems(AppDict, 'status')
  }

  render() {
    return (
      <Form layout="inline" className="filter-form" onSubmit={this.props.query}>
        <FormItem label="开通城市">
          {
            this.getFieldDecorator('city_id')(
              <Select placeholder="全部"
                      className={this.getSelectClass('city_id')}>
                <SelectOption value="">全部</SelectOption>
                {
                  this.props.cities.map((item, index) => (
                    <SelectOption value={item.city_id} key={index}>{item.city_name}</SelectOption>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式">
          {
            this.getFieldDecorator('park_mode')(
              <Select placeholder="全部"
                      className={this.getSelectClass('park_mode')}>
                <SelectOption value="">全部</SelectOption>
                {
                  this.parkModes.map((item, index) => (
                    <SelectOption value={item.key} key={index}>{item.value}</SelectOption>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式">
          {
            this.getFieldDecorator('operation_mode')(
              <Select placeholder="全部"
                      className={this.getSelectClass('operation_mode')}>
                <SelectOption value="">全部</SelectOption>
                {
                  this.operationModes.map((item, index) => (
                    <SelectOption value={item.key} key={index}>{item.value}</SelectOption>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem label="加盟商授权状态">
          {
            this.getFieldDecorator('status')(
              <Select placeholder="全部"
                      className={this.getSelectClass('status')}>
                <SelectOption value="">全部</SelectOption>
                {
                  this.statuses.map((item, index) => (
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

export default Form.create()(CityFilter)