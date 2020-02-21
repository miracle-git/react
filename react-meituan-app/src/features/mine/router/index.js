import MinePage from '@/features/mine/containers'

// 多布局时，此处可导出数组，指定每种布局对应的页面
export default {
  path: 'mine',
  name: '我的模块',
  children: [
    { name: '默认页', component: MinePage, default: true }
  ]
}
