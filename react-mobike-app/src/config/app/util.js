import { React } from '@lib/react-lib'
import { AppConstant, AppData, AppDict, ChartTheme } from '@lib/com-lib'
import { DataFetch, DataStorage, DataType, DataUtil, StorageType, echarts, Modal, Badge } from '@lib/vendor-lib'

export function getModalData() {
  const [
    title,
    content
  ] = [
    AppConstant.MESSAGE_DATA.message,
    AppConstant.MESSAGE_DATA.description
  ]

  return { title, content }
}

export function getMessageData() {
  return AppConstant.MESSAGE_DATA
}

export function getMessageContent() {
  return AppConstant.MESSAGE_DATA.description
}

export function getGalleryData() {
  const [
    title,
    description
  ] = [
    AppConstant.MESSAGE_DATA.message,
    AppConstant.MESSAGE_DATA.description
  ]
  return { title, description }
}

export function getTableData() {
  const { dataSource, columns } = AppData
  columns.map(item => item.key = DataUtil.randomString(10))
  return { dataSource, columns }
}

export function getFixColumns() {
  const { columns } = getTableData()
  // 添加多余的测试列
  const fixColumns = []
  columns.forEach(item => {
    if (item.dataIndex === 'birthday') {
      for (let i = 0; i < 10; i++) {
        fixColumns.push({...item, key: `birthday${i}`})
      }
    } else {
      fixColumns.push(item)
    }
  })
  return DataUtil.getFixColumns(fixColumns, {
    leftCols: ['id', 'userName'],
    rightCols: ['address']
  })
}

export function getSorterColumns(sortInfo) {
  const { columns } = getTableData()
  return columns.map(item => {
    if (item.dataIndex === 'age') {
      item = {...item,
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortInfo.field === 'age' && sortInfo.order
      }
    }
    return item
  })
}

export function getBadgeColumns() {
  const { columns } = getTableData()
  return columns.map(item => {
    if (item.dataIndex === 'diploma') {
      item = {...item,
        render(value) {
          const text = DataUtil.getDictValue(AppDict, 'diploma', value)
          switch (value) {
            case '1':
              return (<Badge status="default" text={text}/>)
            case '2':
              return (<Badge status="success" text={text}/>)
            case '3':
            default:
              return (<Badge status="processing" text={text}/>)
            case '4':
              return (<Badge status="warning" text={text}/>)
            case '5':
              return (<Badge status="error" text={text}/>)
          }
        }
      }
    }

    return item
  })
}

export function removeTab(callback, options = {}) {
  if (!DataType.isFunction(callback)) return

  Modal.confirm({
    title: options.title || '删除确认',
    content: options.content || '确定删除当前页签？',
    okText: options.ok || '确定',
    cancelText: options.cancel || '取消',
    onOk: callback
  })
}

export function getApiData(url, options = {}) {
  const loading = document.getElementById('ajaxLoading')
  options.loading = DataType.defaultVal(options.loading, true)
  options.addKey = DataType.defaultVal(options.addKey, true)
  options.keyLen = DataType.defaultVal(options.keyLen, 10)
  if (options.loading) {
    loading.style.display = 'block'
  }
  return DataFetch.request(url, {
    baseUrl: AppConstant.API_URLS.app_data_api,
    ...options
  }).then(res => {
    loading.style.display = 'none'
    if (res.code === 0) {
      if (DataType.isFunction(options.callback)) {
        if (res.result) {
          if (options.addKey) {
            if (DataType.isArray(res.result)) {
              res.result.map(item => item.key = DataUtil.randomString(options.keyLen))
            } else if (DataType.isArray(res.result.list)) {
              res.result.list.map(item => item.key = DataUtil.randomString(options.keyLen))
            }
          }
          options.callback(res.result)
        } else {
          options.callback(res)
        }
      }
    } else {
      Modal.error({
        title: `接口:[${url}]调用失败`,
        content: res.msg
      })
    }
  })
}

export function showModal(parent, {title, component, width=500, footer=true}) {
  parent.setState({
    modal: {
      visible: true,
      title,
      component,
      width,
      footer
    }
  })
}

export function hideModal(parent) {
  parent.setState({
    modal: {
      visible: false
    }
  })
}

export function registerTheme(type = 'default') {
  echarts.registerTheme(AppConstant.APP_THEME.echarts, ChartTheme[type])
}

export function getMenuName(menuItem) {
  const menuName = menuItem && menuItem.title.split(' ')[0]
  const cacheKey = AppConstant.CACHE_KEY.current_menu_name
  DataStorage.set(cacheKey, menuName, StorageType.Session)
  return menuName
}