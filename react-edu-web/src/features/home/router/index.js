import HomePage from '@/features/home/containers'

export default [{
  path: '',
  name: '首页模块',
  children: [
    { name: '默认页', component: HomePage, default: true }
  ]
}]
