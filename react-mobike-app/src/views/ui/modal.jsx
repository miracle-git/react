import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Card, Button, Modal } from '@lib/vendor-lib'
import { view_style_ui } from '@lib/static-lib' // eslint-disable-line

export default class UIModal extends M2Component {
  componentInitialState() {
    this.state = {
      simple: false,
      footer: false,
      top: false,
      center: false
    }
  }

  componentInitialMethods() {
    this.handleAlert = (type) => {
      this.setState({
        [type]: true
      })
    }

    this.handleConfirm = (type) => {
      Modal[type]({
        ...AppUtil.getModalData(),
        okText: '我会了',
        onOk() {
          console.log('我无师自通，无敌手了')
        },
        cancelText: '没学会',
        onCancel() {
          console.log('还是个菜鸟，多多指教')
        }
      })
    }
  }

  render() {
    return (
      <div className="ui-container">
        <Card title="基础模态框">
          <Button onClick={() => this.handleAlert('simple')}>简单</Button>
          <Button onClick={() => this.handleAlert('footer')}>自定义页脚</Button>
          <Button onClick={() => this.handleAlert('top')}>距离顶部20px</Button>
          <Button onClick={() => this.handleAlert('center')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框">
          <Button onClick={() => this.handleConfirm(this.messageType.Confirm)}>确认信息</Button>
          <Button onClick={() => this.handleConfirm(this.messageType.Warning)}>警告信息</Button>
          <Button onClick={() => this.handleConfirm(this.messageType.Error)}>错误信息</Button>
          <Button onClick={() => this.handleConfirm(this.messageType.Info)}>提示信息</Button>
          <Button onClick={() => this.handleConfirm(this.messageType.Success)}>成功信息</Button>
        </Card>
        <Modal title={AppUtil.getModalData().title}
               visible={this.state.simple}
               maskClosable={false}
               onCancel={() => this.setState({ simple:false })}>
          <p>{AppUtil.getModalData().content}</p>
        </Modal>
        <Modal title={AppUtil.getModalData().title}
               visible={this.state.footer}
               maskClosable={false}
               okText="确定"
               cancelText="取消"
               onCancel={() => this.setState({ footer:false })}>
          <p>{AppUtil.getModalData().content}</p>
        </Modal>
        <Modal title={AppUtil.getModalData().title}
               visible={this.state.top}
               maskClosable={false}
               style={{ top:20 }}
               onCancel={() => this.setState({ top:false })}>
          <p>{AppUtil.getModalData().content}</p>
        </Modal>
        <Modal title={AppUtil.getModalData().title}
               visible={this.state.center}
               maskClosable={false}
               wrapClassName="vertical-center-modal"
               onCancel={() => this.setState({ center:false })}>
          <p>{AppUtil.getModalData().content}</p>
        </Modal>
      </div>
    )
  }
}