import { AppDict } from '@lib/com-lib'
import { DataUtil } from '@lib/vendor-lib'

const columns = [{
  title: '员工编号', dataIndex: 'id'
}, {
  title: '姓名', dataIndex: 'userName'
}, {
  title: '性别', dataIndex: 'gender', width: DataUtil.getColumnWidth('sm'), render(value) {
    return DataUtil.getDictValue(AppDict, 'gender', value)
  }
}, {
  title: '年龄', dataIndex: 'age', width: DataUtil.getColumnWidth('sm'), className: 'number'
}, {
  title: '最高学历', dataIndex: 'diploma', render(value) {
    return DataUtil.getDictValue(AppDict, 'diploma', value)
  }
}, {
  title: '兴趣爱好', dataIndex: 'hobby', width: DataUtil.getColumnWidth('xl'), render(value) {
    return DataUtil.getDictValue(AppDict, 'hobby', value)
  }
}, {
  title: '婚姻状况', dataIndex: 'isMarried', render(value) {
    return DataUtil.getDictValue(AppDict, 'isMarried', value)
  }
}, {
  title: '出生日期', dataIndex: 'birthday', width: DataUtil.getColumnWidth('lg')
}, {
  title: '家庭住址', dataIndex: 'address', width: DataUtil.getColumnWidth('xl')
}]

export default {
  columns,
  layout: {
    formItem: {
      labelCol: {
        xs: 24,
        sm: 6
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
          offset: 6
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
    diploma: [{
      required: true,
      message: '请选择最高学历'
    }]
  }
}