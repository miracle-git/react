import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Card, Button, Notification } from '@lib/vendor-lib'
import { view_style_ui } from '@lib/static-lib' // eslint-disable-line

export default class UINotify extends M2Component {
  componentInitialMethods() {
    this.handleNotification = (type, position) => {
      if (position) {
        Notification.config({
          placement: position
        })
      }
      Notification[type](AppUtil.getMessageData())
    }
  }

  render() {
    return (
      <div className="ui-container">
        <Card title="通知提醒框">
          <Button onClick={() => this.handleNotification(this.messageType.Warning)}>警告通知</Button>
          <Button onClick={() => this.handleNotification(this.messageType.Error)}>错误通知</Button>
          <Button onClick={() => this.handleNotification(this.messageType.Info)}>提示通知</Button>
          <Button onClick={() => this.handleNotification(this.messageType.Success)}>成功通知</Button>
        </Card>
        <Card title="可改变方位的通知提醒框">
          <Button onClick={() => this.handleNotification(this.messageType.Info, this.messagePosition.TopLeft)}>通知提醒(左上)</Button>
          <Button onClick={() => this.handleNotification(this.messageType.Info, this.messagePosition.TopRight)}>通知提醒(右上)</Button>
          <Button onClick={() => this.handleNotification(this.messageType.Info, this.messagePosition.BottomLeft)}>通知提醒(左下)</Button>
          <Button onClick={() => this.handleNotification(this.messageType.Info, this.messagePosition.BottomRight)}>通知提醒(右下)</Button>
        </Card>
      </div>
    )
  }
}