// Redux的配置项(用于构建action和initialState)
export default {
  feature: 'auth',
  actionKeys: [
    { key: 'login', state: {} }, // 登录
    { key: 'register', state: {} }, // 注册
    { key: 'editable', state: true } // 编辑
  ]
}