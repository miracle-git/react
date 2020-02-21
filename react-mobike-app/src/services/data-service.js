import { AppUtil } from '@lib/com-lib'
import { DataType } from '@lib/vendor-lib'

const reload = (component) => {
  component.setState({
    page: 1
  })
}

const getList = (url, component, options = {}) => {
  const defaultOptions = { reload: true, params: {}, itemsName: 'items', callback: () => {} }
  options = {...defaultOptions, ...options}
  options.reload && reload(component)
  AppUtil.getApiData(url, {
    params: options.params,
    callback: res => {
      res.page_index = component.state.page
      component.setState({
        [options.itemsName]: res.list,
        pagination: component.pagination(res, current => {
          component.setState({
            page: current
          })
          getList(url, component, { ...options, reload: false })
        })
      })
      DataType.isFunction(options.callback) && options.callback(res)
    }
  })
}

export default {
  reload,
  getList,
  getCityList: (component) => AppUtil.getApiData('/city/list', {
    callback: res => {
      component.setState({cityList: res})
    }
  })
}