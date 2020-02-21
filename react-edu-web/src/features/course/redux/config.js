// Redux的配置项(用于构建action和initialState)
export default {
  feature: 'course',
  actionKeys: [
    { key: 'list', data: [] },
    { key: 'item', data: {} }, // async: true, emit: true }
  ]
}
