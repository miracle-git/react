import { React, M2Component } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { Card, Icon, Message, Tabs, TabPane } from '@lib/vendor-lib'
import { view_style_ui } from '@lib/static-lib' // eslint-disable-line

export default class UITab extends M2Component {
  componentInitialProps() {
    this.tabPanes = [{
      title: 'Tab 1',
      icon: <span className="tab-item"><Icon type="plus"/>Tab 1</span>,
      content: 'This is tab1 content',
      closable: false
    }, {
      title: 'Tab 2',
      icon: <span className="tab-item"><Icon type="edit"/>Tab 2</span>,
      content: 'This is tab2 content'
    }, {
      title: 'Tab 3',
      icon: <span className="tab-item"><Icon type="delete"/>Tab 3</span>,
      content: 'This is tab3 content'
    }]
    this.newTabIndex = 0
  }

  componentInitialMethods() {
    this.switchTab = (activeKey) => {
      Message.info(`当前选择了第${parseInt(activeKey) + 1}个页签`)
    }
    this.changeTab = (activeKey) => {
      this.setState({
        activeTabKey: activeKey
      })
    }
    this.editTab = (targetKey, action) => {
      this[`${action}Tab`](targetKey)
    }
    this.addTab = () => {
      const tabPanes = this.state.editablePanes
      const activeKey = `new-tab-${this.newTabIndex++}`
      tabPanes.push({ title: `New Tab ${this.newTabIndex}`, content: `This is new tab${this.newTabIndex} content`, key: activeKey })
      this.setState({
        activeTabKey: activeKey,
        editablePanes: tabPanes
      })
    }
    this.removeTab = (targetKey) => {
      AppUtil.removeTab(() => {
        let activeKey = this.state.activeTabKey
        let lastTabIndex = -1
        this.state.editablePanes.map((item, index) => {
          item.key = item.key || `${index}`
          if (item.key === targetKey) {
            lastTabIndex = index - 1
          }
          return item
        })
        const tabPanes = this.state.editablePanes.filter(item => item.key !== targetKey)
        if (lastTabIndex >= 0 && activeKey === targetKey) {
          activeKey = tabPanes[lastTabIndex].key
        }
        this.setState({
          activeTabKey: activeKey,
          editablePanes: tabPanes
        })
      })
    }
  }

  componentInitialState() {
    this.state = {
      activeTabKey: '0',
      editablePanes: [...this.tabPanes]
    }
  }

  render() {
    return (
      <div className="ui-container">
        <Card title="普通页签">
          <Tabs defaultActiveKey="0"
                onChange={this.switchTab}>
            {
              this.tabPanes.map((item, index) => {
                return index === 1 ? (
                  <TabPane tab={item.title} key={index} disabled>{item.content}</TabPane>
                ) : (
                  <TabPane tab={item.title} key={index}>{item.content}</TabPane>
                )
              })
            }
          </Tabs>
        </Card>
        <Card title="带图标的页签">
          <Tabs defaultActiveKey="0"
                onChange={this.switchTab}>
            {
              this.tabPanes.map((item, index) => (
                <TabPane tab={item.icon} key={index}>{item.content}</TabPane>
              ))
            }
          </Tabs>
        </Card>
        <Card title="可编辑的页签">
          <Tabs activeKey={this.state.activeTabKey}
                onChange={this.changeTab}
                onEdit={this.editTab}
                type="editable-card">
            {
              this.state.editablePanes.map((item, index) => (
                <TabPane tab={item.title} key={item.key || index} closable={item.closable}>{item.content}</TabPane>
              ))
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}