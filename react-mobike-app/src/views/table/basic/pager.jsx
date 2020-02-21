import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Table } from '@lib/vendor-lib'

export default class BasicPagerTable extends M2Component {
  componentInitialProps() {
    this.columns = this.props.columns
  }

  componentInitialMethods() {
    super.componentInitialMethods()

    this.getRequestData = () => {
      AppUtil.getApiData('/table/pagelist', {
        params: {
          page: this.state.page
        },
        callback: res => {
          res.page_index = this.state.page
          this.setState({
            dataSource: res.list,
            pagination: this.pagination(res, current => {
              this.setState({
                page: current
              })
              this.getRequestData()
            })
          })
        }
      })
    }
  }

  componentInitialState() {
    this.state = {
      page: 1,
      dataSource: [],
      pagination: null
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
             pagination={this.state.pagination}/>
    )
  }
}