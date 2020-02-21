import { React, M2Component, Link } from '@lib/react-lib'
import { AppDict, FormData } from '@lib/com-lib'
import {
  DataUtil, DateFormatter, Card, Button, Form, FormItem, Icon, Input, InputNumber, TextArea,
  Checkbox, Radio, RadioGroup, Select, SelectOption, Switch, DatePicker,
  DateRangePicker, TimePicker, Upload, Message, moment
} from '@lib/vendor-lib'
import { view_style_form } from '@lib/static-lib' // eslint-disable-line

class FormRegister extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()

    this.formItemLayout = FormData.layout.formItem
    this.offsetLayout = FormData.layout.offset
    this.genderItems = DataUtil.getDictItems(AppDict, 'gender')
    this.diplomaItems = DataUtil.getDictItems(AppDict, 'diploma')
    this.hobbyItems = DataUtil.getDictItems(AppDict, 'hobby')
  }

  componentInitialMethods() {
    super.componentInitialMethods()

    this.getBase64 = (img, callback) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => callback(reader.result))
      reader.readAsDataURL(img)
    }
    this.checkBeforeUpload = (file) => {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        Message.error('只能上传JPG格式的图片')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        Message.error('上传的图片大小不能超过2MB')
      }
      return isJPG && isLt2M
    }
    this.handleAvatarUpload = (info) => {
      if (info.file.status === 'uploading') {
        this.setState({loading: true})
        return
      }
      if (info.file.status === 'done') {
        this.getBase64(info.file.originFileObj,
          imageUrl => this.setState({
            avatar: imageUrl,
            loading: false,
          }))
      }
    }
    this.handleSubmit = (e) => {
      this.validateForm((values) => {
        Message.success(`恭喜您，${values.userName}! 你已经掌握React表单技能了。`)
      }, e)
    }
  }

  componentInitialState() {
    this.state = {
      avatar: '',
      loading: false
    }
  }

  componentFormValidate() {
    return FormData.rules
  }

  render() {
    return (
      <div className="form-container">
        <Card title="注册表单">
          <Form onSubmit={this.handleSubmit}>
            <FormItem label="用户名" {...this.formItemLayout}>
              {
                this.getFieldDecorator('userName')(
                  <Input placeholder="请输入用户名" autoComplete="off"/>
                )
              }
            </FormItem>
            <FormItem label="密码" {...this.formItemLayout}>
              {
                this.getFieldDecorator('password')(
                  <Input placeholder="请输入密码" type="password"/>
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
            <FormItem label="年龄" {...this.formItemLayout}>
              {
                this.getFieldDecorator('age', {
                  defaultValue: 18
                })(
                  <InputNumber min={1} max={100}/>
                )
              }
            </FormItem>
            <FormItem label="最高学历" {...this.formItemLayout}>
              {
                this.getFieldDecorator('diploma', {
                  defaultValue: '1'
                })(
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
                  defaultValue: ['1', '3', '6']
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
            <FormItem label="出生日期" {...this.formItemLayout}>
              {
                this.getFieldDecorator('birthday', {
                  defaultValue: moment('2018-08-08')
                })(
                  <DatePicker className="calendar-date-picker"/>
                )
              }
            </FormItem>
            <FormItem label="计划休假起始日期" {...this.formItemLayout}>
              {
                this.getFieldDecorator('vacationPeriod', {
                  defaultValue: [moment('2018-08-01'), moment('2018-08-08')]
                })(
                  <DateRangePicker className="calendar-daterange-picker"/>
                )
              }
            </FormItem>
            <FormItem label="注册日期" {...this.formItemLayout}>
              {
                this.getFieldDecorator('registerDate', {
                  datetime: true
                })(
                  <DatePicker showTime format={DateFormatter.datetime}/>
                )
              }
            </FormItem>
            <FormItem label="上班时间" {...this.formItemLayout}>
              {
                this.getFieldDecorator('workTime', {
                  datetime: true
                })(
                  <TimePicker/>
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
            <FormItem label="头像" {...this.formItemLayout}>
              {
                this.getFieldDecorator('avatar')(
                  <Upload name="avatar"
                          listType="picture-card"
                          className="avatar-uploader"
                          showUploadList={false}
                          action="//jsonplaceholder.typicode.com/posts/"
                          beforeUpload={this.checkBeforeUpload}
                          onChange={this.handleAvatarUpload}>
                    {
                      this.state.avatar ? (<img src={this.state.avatar} alt=""/>) :
                        (<Icon type={this.state.loading ? "loading" : "plus"}/>)
                    }
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...this.offsetLayout}>
              {
                this.getFieldDecorator('isReadTerm', {
                  defaultValue: false,
                  propName: 'checked'
                })(
                  <Checkbox>我已阅读<Link to="/term" className="term">共享单车App协议</Link></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...this.offsetLayout}>
              <Button type="primary" htmlType="submit">注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormRegister)