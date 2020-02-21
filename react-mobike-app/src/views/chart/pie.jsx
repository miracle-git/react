import { React, M2Component } from '@lib/react-lib'
import { AppUtil, ChartData } from '@lib/com-lib'
import { Card, ReactEcharts } from '@lib/vendor-lib'
import { view_style_chart } from '@lib/static-lib' // eslint-disable-line

export default class PieChart extends M2Component {
  componentWillMount() {
    AppUtil.registerTheme('light')
  }

  render() {
    return (
      <div className="chart-container">
        <Card title="标准饼图">
          <ReactEcharts {...ChartData.pie.basic}/>
        </Card>
        <Card title="环形饼图">
          <ReactEcharts {...ChartData.pie.ring}/>
        </Card>
        <Card title="南丁格尔图">
          <ReactEcharts {...ChartData.pie.rose}/>
        </Card>
      </div>
    )
  }
}