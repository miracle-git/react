import React from 'react'
import { NavBar, TabBar }  from '@/features/common/components'
import { OrderList } from '@/features/order/components'
import './index.less'

export default () => (
  <div className="order-page">
    <NavBar title="订单" back={false}/>
    <OrderList/>
    <TabBar/>
  </div>
)
