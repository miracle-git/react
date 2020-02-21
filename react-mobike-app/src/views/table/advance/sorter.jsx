import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Table } from '@lib/vendor-lib'

export default class AdvanceSorterTable extends M2Component {
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
    this.handleChange = (pagination, filters, sorter) => {
      this.setState({
        sortInfo: sorter
      })
    }
  }

  componentInitialState() {
    this.state = {
      dataSource: [],
      sortInfo: {}
    }
  }

  componentDidMount() {
    this.getRequestData()
  }

  render() {
    const columns = AppUtil.getSorterColumns(this.state.sortInfo)
    return (
      <Table bordered
             dataSource={this.state.dataSource}
             columns={columns}
             onChange={this.handleChange}
             pagination={false}/>
    )
  }
}