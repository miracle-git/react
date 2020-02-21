import { React, M2Component } from '@lib/react-lib'
import { AppUtil, ChartData } from '@lib/com-lib'
import { Card, ReactEcharts } from '@lib/vendor-lib'
import { view_style_chart } from '@lib/static-lib' // eslint-disable-line

export default class LineChart extends M2Component {
  componentWillMount() {
    AppUtil.registerTheme()
  }

  render() {
    return (
      <div className="chart-container">
        <Card title="标准折线图">
          <ReactEcharts {...ChartData.line.basic}/>
        </Card>
        <Card title="对比折线图">
          <ReactEcharts {...ChartData.line.compare}/>
        </Card>
        <Card title="面积折线图">
          <ReactEcharts {...ChartData.line.area}/>
        </Card>
      </div>
    )
  }
}