import { React, M2Component } from '@lib/react-lib'
import { Card, Button, Radio } from '@lib/vendor-lib'
import { view_style_ui } from '@lib/static-lib' // eslint-disable-line

export default class UIButton extends M2Component {
  componentInitialState() {
    this.state = {
      loading: true,
      size: 'default'
    }
  }

  componentInitialMethods() {
    this.handleLoad = () => {
      this.setState({
        loading: !this.state.loading
      })
    }
    this.handleChange = (e) => {
      this.setState({
        size: e.target.value
      })
    }
  }

  render() {
    return (
      <div className="ui-container">
        <Card title="基础按钮">
          <Button type="primary">提交</Button>
          <Button type="dashed">新增</Button>
          <Button type="danger">删除</Button>
          <Button>取消</Button>
          <Button disabled>保存</Button>
        </Card>
        <Card title="图标按钮">
          <Button type="primary" icon="check">提交</Button>
          <Button type="dashed" icon="plus">新增</Button>
          <Button type="danger" icon="delete">删除</Button>
          <Button shape="circle" icon="search"/>
          <Button type="primary" icon="search">搜索</Button>
        </Card>
        <Card title="加载按钮">
          <Button type="primary" icon="check" loading={this.state.loading}>提交</Button>
          <Button type="dashed" icon="plus" loading={this.state.loading}>新增</Button>
          <Button type="primary" shape="circle" icon='search' loading={this.state.loading}/>
          <Button icon="search" shape="circle" loading={this.state.loading}/>
          <Button type="primary" icon="search" loading={this.state.loading}>搜索</Button>
          <Button onClick={this.handleLoad}>{this.state.loading?'加载完毕':'继续加载'}</Button>
        </Card>
        <Card title="分组按钮">
          <Button.Group>
            <Button type="primary" icon="check">确定</Button>
            <Button icon="undo">取消</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" icon="check" size={this.state.size}>提交</Button>
          <Button type="dashed" icon="plus" size={this.state.size}>新增</Button>
          <Button type="danger" icon="delete" size={this.state.size}>删除</Button>
        </Card>
      </div>
    )
  }
}