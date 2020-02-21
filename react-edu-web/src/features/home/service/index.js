import $ from 'jquery'
import echarts from 'echarts'

export const service = {
  renderBar() {
    const bar = echarts.init($('#order-bar-chart')[0])
    if (bar) {
      bar.setOption({
        title: {
          text: '订单统计'
        },
        tooltip: {},
        legend: {
          data: ['购买数量']
        },
        xAxis: {
          data: ['Web全栈', 'JavaEE', 'Python', 'React实战', 'Vue实战', 'Node实战']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [45, 10, 26, 29, 23, 33]
        }]
      })
    }
  },
  renderPie() {
    const pie = echarts.init($('#order-pie-chart')[0])
    if (pie) {
      pie.setOption({
        title: {
          text: '付费订单统计',
          subtext: '最近7天',
          x: 'right',
          y: 'bottom'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['Chrome', 'Firefox', 'Safari', 'IE9+', 'IE8-']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        calculable: false,
        series: (function () {
          let series = [];
          for (let i = 0; i < 30; i++) {
            series.push({
              name: '付费订单统计',
              type: 'pie',
              itemStyle: {
                normal: {
                  label: {
                    show: i > 28
                  },
                  labelLine: {
                    show: i > 28,
                    length: 20
                  }
                }
              },
              radius: [i * 4 + 40, i * 4 + 43],
              data: [{
                value: i * 128 + 80,
                name: 'Java'
              },
                {
                  value: i * 64 + 160,
                  name: 'Web'
                },
                {
                  value: i * 32 + 320,
                  name: 'Python'
                },
                {
                  value: i * 16 + 640,
                  name: 'Node'
                },
                {
                  value: i * 8 + 1280,
                  name: '大数据'
                }]
            });
          }
          series[0].markPoint = {
            symbol: 'emptyCircle',
            symbolSize: series[0].radius[0],
            effect: {
              show: true,
              scaleSize: 12,
              color: 'rgba(250,225,50,0.8)',
              shadowBlur: 10,
              period: 30
            },
            data: [{
              x: '50%',
              y: '50%'
            }]
          };
          return series;
        })()
      })
    }
  }
};
