import CategoryPage from '@/features/product/containers'

// 多布局时，此处可导出数组，指定每种布局对应的页面
export default {
  path: 'product',
  name: '产品模块',
  children: [
    { name: '分类页', path: 'cate', component: CategoryPage }
  ]
}
