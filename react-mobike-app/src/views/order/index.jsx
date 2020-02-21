import { React, M2Component } from '@lib/react-lib'
import { DataService, OrderService } from '@lib/com-lib'
import { OrderFilter } from '@lib/app-lib'
import { Card, Table } from '@lib/vendor-lib'
import { app_style_list } from '@lib/static-lib' // eslint-disable-line

export default class OrderList extends M2Component {
  componentInitialProps() {
    super.componentInitialProps()
    this.table = OrderService.getFixTable()
  }

  componentInitialState() {
    this.state = {
      cityList: [],
      orderList: [],
      page: 1,
      pagination: null
    }
  }

  componentDidMount() {
    DataService.getCityList(this)
    OrderService.getList(this)
  }

  render() {
    const { cityList, orderList, pagination } = this.state
    const { columns, width } = this.table

    return (
      <div className="list-container">
        <Card className="query-filter">
          <OrderFilter cities={cityList}
                       query={()=>OrderService.getList(this)}
                       wrappedComponentRef={form=>this.filterForm=form}/>
        </Card>
        <div className="query-result">
          <Table bordered
                 columns={columns}
                 dataSource={orderList}
                 pagination={pagination}
                 scroll={{x:width}}/>
        </div>
      </div>
    )
  }
}