import React from 'react'
import PropTypes from 'prop-types'
import { RatingStar } from '@/features/common/components'
import './index.less'

class RetailerListItem extends React.Component {

  renderBrand(type) {
    return type ? <sup className="item-brand brand-pin">品牌</sup> : <sup className="item-brand brand-new">新到</sup>
  }

  renderSaleNum(num) {
    return <span className="sale-count">月售 { num > 999 ? '999+' : num }</span>
  }

  renderInfo(discount) {
    return discount && discount.map(item => (
      <div key={item.id} className="item-info">
        <img className="item-info-icon" src={item.icon_url} alt=""/>
        <div className="item-info-content">{item.info}</div>
      </div>
    ))
  }

  render() {
    const { item } = this.props
    return (
      <div className="mt-list-item border-1px">
        <div className="item-left">
          <img className="item-img" src={item.pic_url} alt=""/>
          {this.renderBrand(item.brand_type)}
        </div>
        <div className="item-detail">
          <h3 className="item-name">{item.name}</h3>
          <div className="item-desc clear-fix">
            <div className="item-desc-left">
              <RatingStar star={item.wm_poi_score}/>
              {this.renderSaleNum(item.month_sale_num)}
            </div>
            <div className="item-desc-right">
              <span className="estimate-time">{item.mt_delivery_time}</span>
              <span className="divider">|</span>
              <span className="distance">{item.distance}</span>
            </div>
          </div>
          <div className="item-price clear-fix">
            <div className="item-pre-price">{item.min_price_tip}</div>
            {!!item.delivery_type && (<div className="item-mt-delivery">美团专送</div>)}
          </div>
          {this.renderInfo(item.discounts2)}
        </div>
      </div>
    )
  }
}

RetailerListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default RetailerListItem
