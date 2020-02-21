import React from 'react'
import PropTypes from 'prop-types'
import { DataUtil } from 'm2-core'
import './index.less'

class OrderListItem extends React.Component {

  renderProducts(data = []) {
    return data.map(item => {
      return (
        <div key={DataUtil.randomString(5)} className="product-item">
          {item.product_name}<sub className="product-count">x{item.product_count}</sub>
        </div>
      )
    })
  }

  renderTotalInfo(item) {
    return (
      <div key="total-info" className="product-item">
        <span className="product-more">...</span>
        <div className="product-total">总计 {item.product_count} 个菜，实付<span className="total-price">￥{item.total}</span></div>
      </div>
    )
  }

  renderComments(item) {
    return (
      !item.is_comment && (
        <div className="item-comment clear-fix">
          <div className="comment-btn">评价</div>
        </div>
      )
    )
  }

  render() {
    const { item } = this.props
    return (
      <div className="mt-order-item">
        <div className="order-item-inner border-1px">
          <img className="item-img" src={item.poi_pic} alt=""/>
          <div className="item-right">
            <div className="item-top border-1px">
              <h3 className="item-name text-ellipsis">{item.poi_name}</h3>
              <div className="arrow-icon"/>
              <div className="item-status">{item.status_description}</div>
            </div>
            <div className="item-bottom">
              {this.renderProducts(item.product_list)}
              {this.renderTotalInfo(item)}
            </div>
          </div>
        </div>
        {this.renderComments(item)}
      </div>
    )
  }
}

OrderListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default OrderListItem
