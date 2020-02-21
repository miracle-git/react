import { AppDict } from '@lib/com-lib'
import { DataSeparator, DataUtil } from '@lib/vendor-lib'

export default {
  columns: [{
    title: '城市名称',
    dataIndex: 'name',
    render: (value) => {
      return value.city_name
    }
  }, {
    title: '用车模式',
    dataIndex: 'park_mode',
    render: (value) => {
      return DataUtil.getDictValue(AppDict, 'park_mode', value)
    }
  }, {
    title: '营运模式',
    dataIndex: 'operation_mode',
    render: (value) => {
      return DataUtil.getDictValue(AppDict, 'operation_mode', value)
    }
  }, {
    title: '授权加盟商',
    dataIndex: 'alliance_name'
  }, {
    title: '城市管理员',
    dataIndex: 'admins',
    render: (value) => {
      return value.map(item => item.user_name).join(DataSeparator.comma)
    }
  }, {
    title: '开通时间',
    dataIndex: 'open_time'
  }, {
    title: '操作时间',
    dataIndex: 'update_time'
  }, {
    title: '操作人',
    dataIndex: 'update_user'
  }]
}