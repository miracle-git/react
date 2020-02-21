import NotFoundPage from '@/features/common/containers/not-found'

export default {
  path: 'common',
  name: '公共模块',
  layout: 'simple',
  children: [
    { path: '404', component: NotFoundPage, public: true }
  ]
}
