import UserSettingPage from '@/features/setting/containers/user-setting'

export default [{
  path: 'setting',
  name: '设置模块',
  children: [
    { path: 'user', name: '个人中心页面', component: UserSettingPage  }
  ]
}]
