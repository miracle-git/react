import { React, M2Component, NavLink, connect, mapStateToProps, bindActionCreators } from '@lib/react-lib'
import { AppUtil, AppMenu, AppActions } from '@lib/com-lib'
import { UrlUtil, Menu, SubMenu } from '@lib/vendor-lib'
import { app_style_sidebar } from '@lib/static-lib' // eslint-disable-line

class Sidebar extends M2Component {
  componentInitialState() {
    this.state = {
      currentMenuKey: '',
      menuTreeNodes: null
    }
  }

  componentInitialMethods() {
    this.clickMenu = (item) => {
      const { actions } = this.props
      actions.switchMenu(AppUtil.getMenuName(item))
      this.setState({
        currentMenuKey: item.key
      })
    }
    this.renderMenu = (data) => {
      return data.map((item, index) => {
        if (item.children) {
          return (
            <SubMenu title={item.title} key={item.key || index}>
              {this.renderMenu(item.children)}
            </SubMenu>
          )
        }
        return (
          <Menu.Item key={item.key} 
                     onClick={() => this.clickMenu(item)}>
            <NavLink to={item.key}>{item.title}</NavLink>
          </Menu.Item>
        )
      })
    }
  }

  componentDidMount() {
    this.setState({
      currentMenuKey: UrlUtil.getHashValue(),
      menuTreeNodes: this.renderMenu(AppMenu)
    })
  }

  render() {
    const { currentMenuKey, menuTreeNodes } = this.state

    return (
      <div className="sidebar">
        <div className="logo">
          <img src="/assets/logo.svg" alt=""/>
          <h1 className="logo-text">共享单车App</h1>
        </div>
        <Menu selectedKeys={[currentMenuKey]}
              theme="dark">
          {menuTreeNodes}
        </Menu>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)