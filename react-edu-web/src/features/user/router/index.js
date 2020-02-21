import UserPage from '@/features/user/containers'

export default [{
  path: 'user',
  name: '用户模块',
  children: [
    { name: '默认页', component: UserPage, default: true }
  ]
}]
