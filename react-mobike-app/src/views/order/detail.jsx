import { React, M2Component } from '@lib/react-lib'
import { OrderService } from '@lib/com-lib'
import { Card } from '@lib/vendor-lib' 
import { view_style_order_detail } from '@lib/static-lib' // eslint-disable-line

export default class OrderDetail extends M2Component {
  componentInitialState() {
    this.state = {
      orderItem: {}
    }
  }

  componentDidMount() {
    OrderService.getDetail(this)
  }

  render() {
    const { orderItem } = this.state
    return (
      <Card className="order-detail-container">
        <div id="order-map" className="order-detail-map"></div>
        {
          orderItem.detailItems && orderItem.detailItems.map(item => (
            <div className="order-detail-item" key={item.key}>
              <div className="item-title">{item.title}</div>
              <ul className="item-form">
              {
                item.cols.map(col => (
                  <li key={col.key} className="clearfix">
                    <div className="item-left">{col.name}</div>
                    <div className="item-right">{col.value}</div>
                  </li>
                ))
              }
              </ul>
            </div>
          ))
        }
      </Card>
    )
  }
}