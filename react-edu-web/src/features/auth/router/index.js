import UserLoginPage from '@/features/auth/containers'

export default [{
  path: 'auth',
  name: '认证模块',
  layout: 'simple',
  children: [
    { name: '默认页', component: UserLoginPage, public: true, default: true }
  ]
}]
