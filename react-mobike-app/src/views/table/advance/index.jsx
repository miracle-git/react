import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { AdvanceSorterTable, AdvanceBadgeTable } from '@lib/app-lib'
import { Card, Table } from '@lib/vendor-lib'
import { view_style_ui } from '@lib/static-lib' // eslint-disable-line

export default class AdvanceTable extends M2Component {
  componentInitialProps() {
    this.fixColumns = AppUtil.getFixColumns()
  }

  componentInitialMethods() {
    this.getRequestData = () => {
      AppUtil.getApiData('/table/morelist', {
        callback: res => {
          this.setState({
            dataSource: res
          })
        }
      })
    }
  }

  componentInitialState() {
    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {
    this.getRequestData()
  }

  render() {
    return (
      <div className="table-container">
        <Card title="表头两侧固定">
          <Table bordered
                 dataSource={this.state.dataSource}
                 columns={this.fixColumns.columns}
                 scroll={{x:this.fixColumns.width,y:300}}
                 pagination={false}/>
        </Card>
        <Card title="表头排序">
          <AdvanceSorterTable/>
        </Card>
        <Card title="渲染不同状态">
          <AdvanceBadgeTable/>
        </Card>
      </div>
    )
  }
}