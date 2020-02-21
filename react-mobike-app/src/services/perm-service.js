import { React } from '@lib/react-lib'
import { AppUtil } from '@lib/com-lib'
import { PermCreate, PermConfig, PermAuth } from '@lib/app-lib'
import { TreeNode } from '@lib/vendor-lib'

const getList = (component) => {
  AppUtil.getApiData('/role/list', {
    callback: res => {
      component.setState({
        roleList: res,
        selectedRowKeys: [],
        selectedItem: null
      })
    }
  })
}

const getTreeNodes = (data) => {
  return data.map(item => {
    const { title, key } = item
    const treeItem = { title, key }
    if (item.children) {
      return (
        <TreeNode {...treeItem}>
          {getTreeNodes(item.children)}
        </TreeNode>
      )
    } 
    return <TreeNode {...treeItem}/>
  })
}

const getRoleUsers = (component) => {
  AppUtil.getApiData('/role/userlist', {
    params: {
      roleId: component.props.item.id
    },
    callback: res => {
      if (res && res.length) {
        const userList = res.map(item => {
          return {
            key: item.user_id,
            title: item.user_name,
            status: item.status
          }
        })
        const targetKeys = userList.filter(item => item.status === 1).map(item => item.key)
        component.setState({
          userList,
          targetKeys
        })
      }
    }
  })
}

const patchedNodes = (checkedKeys, modal, component) => {
  const selectedItem = component.getSelectedItem()
  selectedItem.menus = checkedKeys
  component.setState({
    selectedItem
  })
  modal.forceUpdate()
}

const showModal = (type, component) => {
  switch(type) {
    case 'create':
      AppUtil.showModal(component, { 
        title: '新增角色',
        component: <PermCreate wrappedComponentRef={form => component.modalForm=form}/>
      })
      break
    case 'config':
      AppUtil.showModal(component, {
        title: '设置权限',
        component: <PermConfig item={component.getSelectedItem()} 
                               patched={(checkedKeys, modal) => patchedNodes(checkedKeys, modal, component)} 
                               wrappedComponentRef={form => component.modalForm=form}/>
      })
      break
    case 'auth':
      AppUtil.showModal(component, {
        title: '用户授权',
        width: 720,
        component: <PermAuth item={component.getSelectedItem()} 
                             wrappedComponentRef={form => component.modalForm=form}/>
      })
      break
    default:
      break
  } 
}

export default {
  getList,
  getTreeNodes,
  getRoleUsers,
  showModal
}