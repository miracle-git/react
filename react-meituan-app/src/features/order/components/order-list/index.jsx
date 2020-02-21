import React from 'react'
import { orderService } from '@/features/app/service'
import { ScrollView } from '@/features/common/components'
import { OrderListItem } from '@/features/order/components'
import './index.less'

class OrderList extends React.Component {
  state = {
    items: []
  }

  updateItems(result) {
    this.setState({
      items: [...this.state.items, ...result['digestlist']]
    })
  }

  render() {
    const { items } = this.state

    return (
      <div className="mt-order-list">
        <ScrollView loadData={orderService.getOrderList}
                    updateItems={this.updateItems.bind(this)}>
          {
            items && items.map(item => <OrderListItem key={item._key} item={item}/>)
          }
        </ScrollView>
      </div>
    )
  }
}

export default OrderList
