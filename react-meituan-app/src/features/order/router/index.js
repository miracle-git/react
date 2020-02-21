import OrderPage from '@/features/order/containers'

// 多布局时，此处可导出数组，指定每种布局对应的页面
export default {
  path: 'order',
  name: '订单模块',
  children: [
    { name: '默认页', component: OrderPage, default: true }
  ]
}
