import { React, M2Component } from '@lib/react-lib'
import { AppUtil, ChartData } from '@lib/com-lib'
import { Card, ReactEcharts } from '@lib/vendor-lib'
import { view_style_chart } from '@lib/static-lib' // eslint-disable-line

export default class BarChart extends M2Component {
  componentWillMount() {
    AppUtil.registerTheme()
  }

  render() {
    return (
      <div className="chart-container">
        <Card title="标准柱形图">
          <ReactEcharts {...ChartData.bar.basic}/>
        </Card>
        <Card title="图例柱形图">
          <ReactEcharts {...ChartData.bar.legend}/>
        </Card>
      </div>
    )
  }
}