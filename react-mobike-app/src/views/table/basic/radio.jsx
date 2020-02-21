import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Table } from '@lib/vendor-lib'

export default class BasicRadioTable extends M2Component {
  componentInitialProps() {
    this.columns = this.props.columns
  }

  componentInitialMethods() {
    super.componentInitialMethods()
    this.getRequestData = () => {
      AppUtil.getApiData('/table/list', {
        callback: res => {
          this.setState({
            dataSource: res,
            selectedRowKeys: [],
            selectedItem: null
          })
        }
      })
    }
  }

  componentInitialState() {
    this.state = {
      dataSource: [],
      selectedRowKeys: [],
      selectedItem: null
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
             rowSelection={this.getSelectedRow()}
             onRow={this.handleSelectedRow}
             pagination={false}/>
    )
  }
}