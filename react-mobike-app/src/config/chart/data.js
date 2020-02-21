import { AppConstant } from '@lib/com-lib'

const config = {
  theme: AppConstant.APP_THEME.echarts,
  style: {
    height: 400
  }
}

export default {
  bar: {
    basic: {
      option: {
        title: {
          text: '用户骑行订单量'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '订单量',
          type: 'bar',
          data: [1800, 1500, 3500, 4200, 7200, 1600, 5500]
        }]
      },
      ...config
    },
    legend: {
      option: {
        title: {
          text: '用户骑行对比图'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          data: ['ofo', '摩拜', '小蓝']
        },
        series: [{
          name: 'ofo',
          type: 'bar',
          data: [2800, 3500, 6400, 9500, 12000, 9800, 13500]
        }, {
          name: '摩拜',
          type: 'bar',
          data: [2500, 3200, 4500, 7200, 9000, 7500, 12000]
        }, {
          name: '小蓝',
          type: 'bar',
          data: [1200, 1500, 3200, 4000, 5500, 2400, 1800]
        }]
      },
      ...config
    }
  },
  pie: {
    basic: {
      option: {
        title: {
          text: '用户骑行订单量',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}：{c}（{d}%）'
        },
        legend: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          orient: 'vertical',
          top: 20,
          right: 10
        },
        series: [{
          name: '订单量',
          type: 'pie',
          data: [{
            name: '周一',
            value: 2800
          }, {
            name: '周二',
            value: 3200
          }, {
            name: '周三',
            value: 4800
          }, {
            name: '周四',
            value: 1800
          }, {
            name: '周五',
            value: 5500
          }, {
            name: '周六',
            value: 2400
          }, {
            name: '周日',
            value: 1600
          }]
        }]
      },
      ...config
    },
    ring: {
      option: {
        title: {
          text: '用户骑行订单量',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}：{c}（{d}%）'
        },
        legend: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          orient: 'vertical',
          top: 20,
          right: 10
        },
        series: [{
          name: '订单量',
          type: 'pie',
          radius: ['40%', '60%'],
          data: [{
            name: '周一',
            value: 2800
          }, {
            name: '周二',
            value: 3200
          }, {
            name: '周三',
            value: 4800
          }, {
            name: '周四',
            value: 1800
          }, {
            name: '周五',
            value: 5500
          }, {
            name: '周六',
            value: 2400
          }, {
            name: '周日',
            value: 1600
          }]
        }]
      },
      ...config
    },
    rose: {
      option: {
        title: {
          text: '用户骑行订单量',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}：{c}（{d}%）'
        },
        legend: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          orient: 'vertical',
          top: 20,
          right: 10
        },
        series: [{
          name: '订单量',
          type: 'pie',
          roseType: 'radius',
          data: [{
            name: '周一',
            value: 2800
          }, {
            name: '周二',
            value: 3200
          }, {
            name: '周三',
            value: 4800
          }, {
            name: '周四',
            value: 1800
          }, {
            name: '周五',
            value: 5500
          }, {
            name: '周六',
            value: 2400
          }, {
            name: '周日',
            value: 1600
          }].sort((a, b) => a.value - b.value) 
        }]
      },
      ...config
    }
  },
  line: {
    basic: {
      option: {
        title: {
          text: '用户骑行订单量'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '订单量',
          type: 'line',
          data: [1800, 1500, 3500, 4200, 7200, 1600, 5500]
        }]
      },
      ...config
    },
    compare: {
      option: {
        title: {
          text: '用户骑行订单量'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          data: ['ofo', '摩拜', '小蓝']
        },
        series: [{
          name: 'ofo',
          type: 'line',
          data: [2800, 3500, 6400, 9500, 12000, 9800, 13500]
        }, {
          name: '摩拜',
          type: 'line',
          data: [2500, 3200, 4500, 7200, 9000, 7500, 12000]
        }, {
          name: '小蓝',
          type: 'line',
          data: [1200, 1500, 3200, 4000, 5500, 2400, 1800]
        }]
      },
      ...config
    },
    area: {
      option: {
        title: {
          text: '用户骑行订单量'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '订单量',
          type: 'line',
          areaStyle: {},
          data: [1800, 1500, 3500, 4200, 7200, 1600, 5500]
        }]
      },
      ...config
    }
  }
}