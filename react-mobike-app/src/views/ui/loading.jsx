import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Card, Alert, Icon, Spin } from '@lib/vendor-lib'
import { view_style_ui } from '@lib/static-lib' // eslint-disable-line

export default class UILoading extends M2Component {
  render() {
    const icon = <Icon type="loading" style={{fontSize:24}}/>
    return (
      <div className="ui-container">
        <Card title="基础Spin">
          <Spin size="small"/>
          <Spin/>
          <Spin size="large"/>
          <Spin indicator={icon}/>
          <Spin indicator={icon} tip="加载中..."/>
        </Card>
        <Card title="带内容遮罩的Spin">
          <Spin>
            <Alert {...AppUtil.getMessageData()} type={this.messageType.Success}/>
          </Spin>
          <Spin indicator={icon}>
            <Alert {...AppUtil.getMessageData()} type={this.messageType.Info}/>
          </Spin>
          <Spin indicator={icon} tip="加载中...">
            <Alert {...AppUtil.getMessageData()} type={this.messageType.Warning}/>
          </Spin>
        </Card>
      </div>
    )
  }
}