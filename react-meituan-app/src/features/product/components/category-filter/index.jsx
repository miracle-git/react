import React from 'react'
import { connect } from 'm2-redux'
import { productService } from '@/features/app/service'
import { changeTabFilter, saveFilterData, getFilterData } from '@/features/product/redux/actions'
import { tab_filter_items } from '@/features/product/constants/tab-filter.conf'
import './index.less'

@connect({ reducers: 'product', actions: { changeTabFilter, saveFilterData, getFilterData } })
class CategoryFilter extends React.Component {

  async componentDidMount() {
    const result = await productService.getCategoryFilter()
    if (result) {
      this.props.saveFilterData(result)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleChangeTab(tabKey) {
    const { product, changeTabFilter } = this.props
    const { activeKey, showPanel } = product.tabsFilter

    let _showPanel = true
    if (activeKey === tabKey && showPanel) {
      _showPanel = false
    }

    changeTabFilter({ activeKey: tabKey, showPanel: _showPanel })
  }

  handleFilterData(item, tabKey, tabFilter, fields = null) {
    const { getFilterData } = this.props
    getFilterData({ item, tabKey, tabFilter, fields })
  }

  renderTabsFilter() {
    const { tabsFilter } = this.props.product
    return Object.values(tabsFilter.items).map(item => (
      <div key={item.key}
           className={`tab-filter-item tab-filter-${item.key} ${item.key === tabsFilter.activeKey && tabsFilter.showPanel ? 'current' : ''}`}
           onClick={() => this.handleChangeTab(item.key)}>
        <span className="tab-filter-title text-ellipsis">{ item.current || item.text }</span>
      </div>
    ))
  }

  renerTabsContent() {
    const { tabsFilter } = this.props.product
    return (
      <div className="cate-filter-inner">
        {
          Object.values(tabsFilter.items).map(item => (
            <ul key={item.key}
                 className={`tab-pane-item tab-pane-${item.key} ${item.key === tabsFilter.activeKey ? 'current' : ''}`}>
              { this.renderTabsPane(item) }
            </ul>
          ))
        }
      </div>
    )
  }

  renderTabsPane(tab) {
    switch (tab.key) {
      case tab_filter_items.cate:
        return tab.data.map(item => (
          <li key={item.code} className="sub-item-cate">
            <p className="sub-item-title">{item.name}<span className="sub-item-quantity">{item.quantity}</span></p>
            <div className="sub-item-content clear-fix">
              { this.renderCateboxContent(tab.key, item, { tab: 'code', sub: 'sub_category_list' }) }
            </div>
          </li>
        ))
      case tab_filter_items.sort:
        return tab.data.map(item => (
          <li key={item.code}
              className={`sub-item-sort border-1px ${item.active ? 'active' : ''}`}
              onClick={() => this.handleFilterData(item, tab.key, tab.data)}>
            <span className="sub-item-title">{ item.name }</span>
          </li>
        ))
      case tab_filter_items.filter:
        return tab.data.map(item => (
          <li key={item.group_title} className="sub-item-filter">
            {
              item.group_title && <p className="sub-item-title">{item.group_title}</p>
            }
            <div className="sub-item-content clear-fix">
              { this.renderCateboxContent(tab.key, item, { tab: 'group_title', sub: 'items' }) }
            </div>
          </li>
        ))
      default:
        break;
    }
  }

  renderCateboxContent(tabKey, tabFilter, fields) {
    return (tabFilter[fields.sub] || []).map(item =>(
      <div key={item.code} className="cate-box"
           onClick={() => this.handleFilterData(item, tabKey, tabFilter, fields)}>
        {
          tabKey === tab_filter_items.cate ? (
            <div className={`cate-box-inner ${item.active ? 'active' : ''}`}>
              <span className="cate-box-text text-ellipsis">{ item.name }({item.quantity})</span>
            </div>
          ) : (
            <div className={`cate-box-inner ${item.icon ? 'icon' : ''} ${item.active ? 'active' : ''}`}>
              {item.icon && <img src={item.icon} alt=""/>} <span className="cate-box-text text-ellipsis">{ item.name }</span>
            </div>
          )
        }
      </div>
    ))
  }

  render() {
    const { tabsFilter } = this.props.product

    return (
      <div className="mt-category-filter">
        <div className="cate-filter-header">
          { this.renderTabsFilter() }
        </div>
        {
          tabsFilter.showPanel && (
            <div className="cate-filter-content">
              { this.renerTabsContent() }
            </div>
          )
        }
      </div>
    )
  }
}

export default CategoryFilter
