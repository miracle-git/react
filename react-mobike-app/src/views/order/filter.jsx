import { React, M2Component } from '@lib/react-lib'
import { AppDict } from '@lib/com-lib'
import { DataUtil, Form, FormItem, Button, Select, SelectOption, DateRangePicker } from '@lib/vendor-lib'

class OrderFilter extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()

    this.statusItems = DataUtil.getDictItems(AppDict, 'order_status')
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
        <FormItem label="骑行时间">
          {
            this.getFieldDecorator('ridePeriod')(
              <DateRangePicker className="calendar-daterange-picker"/>
            )
          }
        </FormItem>
        <FormItem label="状态">
          {
            this.getFieldDecorator('status')(
              <Select placeholder="全部"
                      className={this.getSelectClass('status')}>
                <SelectOption value="">全部</SelectOption>
                {
                  this.statusItems.map((item, index) => (
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

export default Form.create()(OrderFilter)