import { React } from '@lib/react-lib'
import { AppDict } from '@lib/com-lib'
import { DataUtil, Badge } from '@lib/vendor-lib'

const columns = [{
  title: '订单编号',
  dataIndex: 'order_no',
  width: DataUtil.getColumnWidth('lg')
}, {
  title: '车辆编号',
  dataIndex: 'bike_no',
  width: DataUtil.getColumnWidth('lg')
}, {
  title: '使用人',
  dataIndex: 'user_name'
}, {
  title: '手机号',
  dataIndex: 'mobile',
  width: DataUtil.getColumnWidth('lg')
}, {
  title: '骑行里程(公里)',
  dataIndex: 'mile',
  className: 'number'
}, {
  title: '骑行时长(分钟)',
  dataIndex: 'period',
  className: 'number'
}, {
  title: '骑行开始时间',
  dataIndex: 'start_time',
  width: DataUtil.getColumnWidth('xl')
}, {
  title: '骑行结束时间',
  dataIndex: 'end_time',
  width: DataUtil.getColumnWidth('xl')
}, {
  title: '状态',
  dataIndex: 'status',
  width: DataUtil.getColumnWidth('lg'),
  render: (value) => {
    const text = DataUtil.getDictValue(AppDict, 'order_status', value)
    switch (value) {
      case '1':
        return (<Badge status="processing" text={text}/>)
      case '2':
        return (<Badge status="warning" text={text}/>)
      case '3':
      default:
        return (<Badge status="success" text={text}/>)
    }
  }
}, {
  title: '订单金额(元)',
  dataIndex: 'total_amount',
  className: 'number'
}, {
  title: '实付金额(元)',
  dataIndex: 'pay_amount',
  className: 'number'
}]

const detailsMeta = [{
  title: '基础信息',
  key: 'basic',
  cols: [{
    key: 'park_mode',
    name: '用车模式',
    render: (value) => {
      return DataUtil.getDictValue(AppDict, 'park_mode', value)
    }
  },{
    key: 'order_no',
    name: '订单编号'
  },{
    key: 'bike_no',
    name: '车辆编号'
  },{
    key: 'user_name',
    name: '使用人'
  },{
    key: 'mobile',
    name: '手机号'
  }]
}, {
  title: '行驶轨迹',
  key: 'trace',
  cols: [{
    key: 'departure',
    name: '行程起点'
  },{
    key: 'destination',
    name: '行程终点'
  },{
    key: 'mile',
    name: '行驶里程',
    render: (value) => {
      return value + '公里'
    }
  }]
}]

export default {
  details: detailsMeta,
  columns
}