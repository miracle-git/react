import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { BasicRadioTable, BasicCheckTable, BasicPagerTable } from '@lib/app-lib'
import { DataUtil, Card, Table, Button, Divider, Modal, Message } from '@lib/vendor-lib'
import { view_style_table } from '@lib/static-lib' // eslint-disable-line

export default class BasicTable extends M2Component {
  componentInitialProps() {
    this.data = AppUtil.getTableData()
    this.columns = DataUtil.addActionColumn(this.data.columns, (_, item) => (
      <span className="action">
        <Button onClick={() => this.handleEdit(item.id)} className="link-button">编辑</Button>
        <Divider type="vertical"/>
        <Button onClick={() => this.handleDelete(item.id)} className="link-button red">删除</Button>
      </span>
    ))
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
    this.handleEdit = (id) => {
      Modal.warning({
        title: '修改记录',
        content: `正在修改当前项: 【${id}】`,
        okText: '确定',
        onOk() {
          Message.success('修改成功')
        }
      })
    }
    this.handleDelete = (id) => {
      Modal.confirm({
        title: '删除记录',
        content: `你确定删除当前项:【${id}】吗？`,
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
      dataSource: []
    }
  }

  componentDidMount() {
    this.getRequestData()
  }

  render() {
    return (
      <div className="table-container">
        <Card title="基础表格">
          <Table bordered
                 dataSource={this.data.dataSource}
                 columns={this.columns}
                 pagination={false}/>
        </Card>
        <Card title="动态表格-单选">
          <BasicRadioTable columns={this.columns}/>
        </Card>
        <Card title="动态表格-多选">
          <BasicCheckTable columns={this.columns}/>
        </Card>
        <Card title="动态表格-分页">
          <BasicPagerTable columns={this.columns}/>
        </Card>
      </div>
    )
  }
}