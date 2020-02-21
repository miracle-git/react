import { React } from '@lib/react-lib'
import { AppUtil, AppDict, DataService, UserData } from '@lib/com-lib'
import { UserCreate, UserUpdate, UserDetail } from '@lib/app-lib'
import { DataUtil, Button, Divider } from '@lib/vendor-lib'

const getList = (component) => {
  DataService.getList('/user/list', component, {
    itemsName: 'userList',
    params: {
      page: component.state.page,
      query: component.getFormValue(component.filterForm)
    }
  })
}

const getDictValue = (currentUser, dictType, fieldName = '') => {
  const dictValue = fieldName ? currentUser[fieldName] : currentUser[dictType]
  return DataUtil.getDictValue(AppDict, dictType, dictValue)
}

const getFixTable = (component) => {
  const columns = DataUtil.addActionColumn(UserData.columns, (_, item) => (
    <span className="action">
      <Button onClick={() => showModal('update', component, item)} className="link-button">编辑</Button>
      <Divider type="vertical"/>
      <Button onClick={() => showModal('detail', component, item)} className="link-button">详情</Button>
      <Divider type="vertical"/>
      <Button onClick={() => component.handleDelete(item.id)} className="link-button red">删除</Button>
    </span>
  ), {
    width: DataUtil.getColumnWidth('xl')
  })
  
  return DataUtil.getFixColumns(columns, {
    leftCols: ['id', 'userName'],
    rightCols: ['action']
  })
}

const showModal = (type, component, item = null) => {
  switch(type) {
    case 'create':
      AppUtil.showModal(component, {
        title: '新增员工',
        component: <UserCreate wrappedComponentRef={form => component.modalForm=form}/>
      })
      break
    case 'update':
      AppUtil.showModal(component, {
        title: '编辑员工',
        component: <UserUpdate item={item} 
                               wrappedComponentRef={form => component.modalForm=form}/>
        })
      break
    case 'detail':
      AppUtil.showModal(component, {
        title: '员工详情',
        component: <UserDetail item={item}/>,
        footer: false
      })
      break
    default:
      break
  } 
}

export default {
  getList,
  getDictValue,
  getFixTable,
  showModal
}