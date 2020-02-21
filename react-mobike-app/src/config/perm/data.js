import { React } from '@lib/react-lib'
import { AppDict } from '@lib/com-lib'
import { DataUtil, Badge } from '@lib/vendor-lib'

const columns = [{
  title: '角色名称', dataIndex: 'role_name'
}, {
  title: '创建时间', dataIndex: 'create_time'
}, {
  title: '角色状态', dataIndex: 'status', render(value) {
    const text = DataUtil.getDictValue(AppDict, 'perm_status', value)
    const status = value ? 'success': 'default'
    return <Badge status={status} text={text}/>
  }
}, {
  title: '授权人', dataIndex: 'auth_user'
}, {
  title: '授权时间', dataIndex: 'auth_time'
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
    }
  },
  rules: {
    role_name: [{
      required: true,
      message: '请填写角色名称'
    }, {
      min: 3,
      max: 10,
      message: '角色名称必须至少3个字符，不超过10个字符'
    }, {
      pattern: /^\w+/g,
      message: '角色名称只能包含数字和字母开头'
    }],
    auth_user: [{
      required: true,
      message: '请填写授权人'
    }]
  }
}