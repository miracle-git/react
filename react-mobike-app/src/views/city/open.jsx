import { React, M2Component } from '@lib/react-lib'
import { AppDict } from '@lib/com-lib'
import { DataUtil, Form, FormItem, Select, SelectOption } from '@lib/vendor-lib'

class CityOpen extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()

    this.formItemLayout = {
      labelCol: { xs: 24, sm: 6 },
      wrapperCol: { xs: 24, sm: 12 }
    }
    this.parkModes = DataUtil.getDictItems(AppDict, 'park_mode')
    this.operationModes = DataUtil.getDictItems(AppDict, 'operation_mode')
  }

  componentFormValidate() {
    return {
      city_id: [{
        required: true,
        message: '请选择开通城市'
      }]
    }
  }

  render() {
    return (
      <Form layaout="horizontal">
        <FormItem label="开通城市" {...this.formItemLayout}>
          {
            this.getFieldDecorator('city_id')(
              <Select placeholder="选择开通城市"
                      className={this.getSelectClass('city_id')}>
                {
                  this.props.cities.map((item, index) => (
                    <SelectOption value={item.city_id} key={index}>{item.city_name}</SelectOption>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式" {...this.formItemLayout}>
          {
            this.getFieldDecorator('park_mode', {
              defaultValue: '1'
            })(
              <Select placeholder="选择用车模式"
                      className={this.getSelectClass('park_mode')}>
                {
                  this.parkModes.map((item, index) => (
                    <SelectOption value={item.key} key={index}>{item.value}</SelectOption>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式" {...this.formItemLayout}>
          {
            this.getFieldDecorator('operation_mode', {
              defaultValue: '1'
            })(
              <Select placeholder="选择营运模式"
                      className={this.getSelectClass('operation_mode')}>
                {
                  this.operationModes.map((item, index) => (
                    <SelectOption value={item.key} key={index}>{item.value}</SelectOption>
                  ))
                }
              </Select>
            )
          }
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(CityOpen)