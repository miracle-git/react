import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Table, Button, Modal, Message } from '@lib/vendor-lib'

export default class BasicCheckTable extends M2Component {
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
            selectedItems: []
          })
        }
      })
    }
    this.handleBatchDelete = (ids) => {
      Modal.confirm({
        title: '批量删除',
        content: `你确定删除当前选中项:【${ids}】吗？`,
        okText: '确定',
        cancelText: '取消',
        onOk() {
          Message.success('删除成功')
        }
      })
    }
  }

  componentInitialState() {
    this.state = {
      dataSource: [],
      selectedRowKeys: [],
      selectedItems: []
    }
  }

  componentDidMount() {
    this.getRequestData()
  }

  render() {
    return [
      <div className="table-operations" key="operations">
        <Button type="primary">新增</Button>
        <Button type="danger"
                disabled={!this.getSelectedIds().length}
                onClick={() => this.handleBatchDelete(this.getSelectedIds().join(','))}>
          批量删除
        </Button>
      </div>,
      <Table bordered
             key="table"
             dataSource={this.state.dataSource}
             columns={this.columns}
             rowSelection={this.getSelectedRows()}
             pagination={false}/>
    ]
  }
}