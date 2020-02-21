import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Table } from '@lib/vendor-lib'

export default class AdvanceBadgeTable extends M2Component {
  componentInitialProps() {
    this.columns = AppUtil.getBadgeColumns()
  }

  componentInitialMethods() {
    this.getRequestData = () => {
      AppUtil.getApiData('/table/list', {
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
      <Table bordered
             dataSource={this.state.dataSource}
             columns={this.columns}
             pagination={false}/>
    )
  }
}