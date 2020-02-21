import React from 'react'
import { commonService } from '@/features/app/service'
import { ScrollView, RetailerListItem } from '@/features/common/components'
import './index.less'

class RetailerList extends React.Component {
  state = {
    items: []
  }

  updateItems(result, callback) {
    this.setState({
      items: [...this.state.items, ...result['poilist']]
    }, callback && callback())
  }

  render() {
    const { items } = this.state

    return (
      <div className="mt-retailer-list">
        <div className="list-header border-1px">
          <h4 className="retailer-title">
            <span>附近商家</span>
          </h4>
        </div>
        <ScrollView loadData={commonService.getRetailerList}
                    updateItems={this.updateItems.bind(this)}>
          {
            items && items.map(item => <RetailerListItem key={item._key} item={item}/>)
          }
        </ScrollView>
      </div>
    )
  }
}

export default RetailerList
