import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Card, Button, Message } from '@lib/vendor-lib'
import { view_style_ui } from '@lib/static-lib' // eslint-disable-line

export default class UIMessage extends M2Component {
  componentInitialMethods() {
    this.handleMessage = (type) => {
      Message[type](AppUtil.getMessageContent())
    }
  }

  render() {
    return (
      <div className="ui-container">
        <Card title="消息提示框">
          <Button onClick={() => this.handleMessage(this.messageType.Loading)}>加载消息</Button>
          <Button onClick={() => this.handleMessage(this.messageType.Warning)}>警告消息</Button>
          <Button onClick={() => this.handleMessage(this.messageType.Error)}>错误消息</Button>
          <Button onClick={() => this.handleMessage(this.messageType.Info)}>提示消息</Button>
          <Button onClick={() => this.handleMessage(this.messageType.Success)}>成功消息</Button>
        </Card>
      </div>
    )
  }
}