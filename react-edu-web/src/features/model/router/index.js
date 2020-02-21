import ModelListPage from '@/features/model/containers'

export default [{
  path: 'model',
  name: '建模模块',
  children: [
    { name: '默认页', component: ModelListPage, default: true }
  ]
}]
