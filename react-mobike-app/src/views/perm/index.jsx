import { React, M2Component } from '@lib/react-lib'
import { AppUtil, PermService, PermData } from '@lib/com-lib'
import { Button, Table, Modal } from '@lib/vendor-lib'
import { app_style_list, view_style_perm } from '@lib/static-lib' // eslint-disable-line

export default class PermList extends M2Component {
  componentInitialState() {
    this.state = {
      roleList: [],
      selectedRowKeys: [],
      selectedItem: null,
      modal: {
        visible: false,
        title: '',
        width: '',
        component: null,
        footer: true
      }
    }
  }

  componentDidMount() {
    PermService.getList(this)
  }

  render() {
    const { roleList, modal } = this.state
    const { columns } = PermData

    return (
      <div className="list-container">
        <div className="table-operations">
          <Button type="primary" 
                  onClick={() => PermService.showModal('create', this)}>
            新增角色
          </Button>
          <Button type="primary" 
                  disabled={!this.getSelectedId()} 
                  onClick={() => PermService.showModal('config', this)}>
            设置权限
          </Button>
          <Button type="primary" 
                  disabled={!this.getSelectedId()} 
                  onClick={() => PermService.showModal('auth', this)}>
            用户授权
          </Button>
        </div>
        <div className="query-result">
          <Table bordered
                 columns={columns}
                 dataSource={roleList}
                 rowSelection={this.getSelectedRow()}
                 onRow={this.handleSelectedRow}
                 pagination={false} />
        </div>
        <Modal title={modal.title}
               visible={modal.visible}
               width={modal.width}
               maskClosable={false}
               wrapClassName="vertical-center-modal scroll-modal perm-info-modal"
               {...modal.footer ? '' : { footer: false }}
               onOk={(e) => this.modalForm.handleSubmit(e, this)}
               onCancel={() => AppUtil.hideModal(this)}>
          {modal.component}
        </Modal>
      </div>
    )
  }
}