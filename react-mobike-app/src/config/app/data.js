import { AppDict } from '@lib/com-lib'
import { DataUtil } from '@lib/vendor-lib'

export default {
  dataSource: [{
    id: '535654', userName: 'Miracle', gender: '男', age: 32, diploma: '本科', hobby: '看书 旅游 桌球', isMarried: '已婚', birthday: '1984-08-10', 'address': '四川省成都市武侯区56号', key: DataUtil.randomString(10)
  }, {
    id: '782536', userName: 'Jack', gender: '男', age: 28, diploma: '硕士', hobby: '游泳 交友', isMarried: '未婚', birthday: '1986-05-20', 'address': '北京市海淀区国贸三街15号', key: DataUtil.randomString(10)
  }, {
    id: '976243', userName: 'Lisa', gender: '女', age: 30, diploma: '大专', hobby: '爬山 购物 运动', isMarried: '未婚', birthday: '1988-10-08', 'address': '广东省深圳市深蓝大道288号', key: DataUtil.randomString(10)
  }],
  columns: [{
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
}