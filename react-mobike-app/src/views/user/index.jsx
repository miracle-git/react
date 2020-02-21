import { React, M2Component } from '@lib/react-lib'
import { AppUtil, UserService } from '@lib/com-lib'
import { UserFilter } from '@lib/app-lib'
import { Card, Button, Modal, Table, Message } from '@lib/vendor-lib'
import { app_style_list, view_style_user } from '@lib/static-lib' // eslint-disable-line

export default class UserList extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()
    this.table = UserService.getFixTable(this)
  }

  componentInitialMethods() {
    super.componentInitialMethods()
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
      userList: [],
      page: 1,
      pagination: null,
      modal: {
        visible: false,
        title: '',
        component: null,
        footer: true
      }
    }
  }

  componentDidMount() {
    UserService.getList(this)
  }

  render() {
    const { modal, userList, pagination } = this.state
    const { columns, width } = this.table

    return (
      <div className="list-container user-list-container">
        <Card className="query-filter">
          <UserFilter query={() => UserService.getList(this)}
                      wrappedComponentRef={form => this.filterForm=form}/>
        </Card>
        <div className="query-result">
          <div className="table-operations">
            <Button type="primary" icon="plus" 
                    onClick={() => UserService.showModal('create', this)}>新增</Button>
          </div>
          <Table bordered
                 columns={columns}
                 dataSource={userList}
                 pagination={pagination}
                 scroll={{x:width}}/>
        </div>
        <Modal title={modal.title}
               visible={modal.visible}
               maskClosable={false}
               wrapClassName="vertical-center-modal scroll-modal"
               width={800}
               {...modal.footer ? '' : { footer: false }}
               onOk={(e) => this.modalForm.handleSubmit(e, this)}
               onCancel={() => AppUtil.hideModal(this)}>
          {modal.component}
        </Modal>
      </div>
    )
  }
}