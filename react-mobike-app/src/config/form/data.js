export default {
  layout: {
    formItem: {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    },
    offset: {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
  },
  rules: {
    userName: [{
      required: true,
      message: '请填写用户名'
    }, {
      min: 3,
      max: 10,
      message: '用户名必须至少3个字符，不超过10个字符'
    }, {
      pattern: /^\w+/g,
      message: '用户名只能包含数字和字母开头'
    }],
    password: [{
      required: true,
      message: '请填写密码'
    }],
    age: [{
      required: true,
      message: '请选择年龄'
    }],
    diploma: [{
      required: true,
      message: '请选择最高学历'
    }]
  }
}