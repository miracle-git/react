import React from 'react'
import { DataBus } from 'm2-core'
import { getComponentRef } from 'm2-react'
import { connect } from 'm2-redux'
import { commonService } from '@/features/app/service'
import { ScrollView, RetailerListItem } from '@/features/common/components'

@connect({ reducers: 'product' })
class RetailerList extends React.Component {
  state = {
    items: []
  }

  updateItems(result, callback) {
    this.setState({
      items: [...this.state.items, ...result['poilist']]
    }, callback && callback())
  }

  componentDidMount() {
    DataBus.on('load_retailer_data', (params) => getComponentRef('scroll', this).getItemsData(params))
  }

  componentWillUnmount() {
    DataBus.off('load_retailer_data', (params) => getComponentRef('scroll', this).getItemsData(params))
  }

  render() {
    const { items } = this.state
    const { tabsFilter } = this.props.product
    const { params } = tabsFilter

    return (
      <div className="mt-retailer-list">
        <ScrollView loadData={params ? commonService.getRetailerParamsList : commonService.getRetailerList}
                    updateItems={this.updateItems.bind(this)}
                    ref={el=>this.scroll=el}>
          {
            items && items.map(item => <RetailerListItem key={item._key} item={item}/>)
          }
        </ScrollView>
      </div>
    )
  }
}

export default RetailerList
