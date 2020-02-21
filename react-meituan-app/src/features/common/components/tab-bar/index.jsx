import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { tab_bar_items } from '@/features/common/constants/tab-bar.conf'
import './index.less'

class TabBar extends React.Component {

  handleChangeTab(item) {
    this.props.history.replace(item.name)
  }

  renderItem(item) {
    const config = item.default ? { exact: true, to: '/' } : { to: `/${item.name}` }
    return (
      <NavLink key={item.name} replace={true} {...config}
               className={`tab-item tab-item-${item.name}`}
               activeClassName="tab-item-active"
               onClick={() => this.handleChangeTab(item)}>
        <div className="tab-item-icon"/>
        <div className="tab-item-text">{item.text}</div>
      </NavLink>
    )
  }

  render() {
    return (
      <div className="mt-tab-bar">
        {
          tab_bar_items.map(item => this.renderItem(item))
        }
      </div>
    )
  }
}

export default withRouter(TabBar)
