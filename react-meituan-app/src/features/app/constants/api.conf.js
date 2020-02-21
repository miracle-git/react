import { DataApi } from 'm2-core'

export default DataApi({
  'getCategoryList': '/category/list',
  'getCategoryFilter': '/category/filter',
  'getRetailerList': '/retailer/list',
  'getRetailerParamsList': '/retailer/list/params',
  'getOrderList': '/order/list'
}, '/api')
