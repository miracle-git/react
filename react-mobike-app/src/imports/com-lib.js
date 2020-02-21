// 所有公共组件
export const AppHeader = require('@/components/header').default
export const AppSimpleHeader = require('@/components/simple-header').default
export const AppFooter = require('@/components/footer').default
export const AppSidebar = require('@/components/sidebar').default
// 所有布局组件
export const AppAdminLayout = require('@/layouts/admin').default
export const AppSimpleLayout = require('@/layouts/simple').default
// 所有路由配置
export const AppRouter = require('@/router').default
// 所有Redux相关配置
export const AppActions = require('@/redux/actions')
export const AppReducers = require('@/redux/reducers')
export const AppStore = require('@/redux/store')
// 所有公共数据配置
export const AppMenu = require('@/config/app/menu').default
export const AppDict = require('@/config/app/dict').default
export const AppData = require('@/config/app/data').default
export const AppUtil = require('@/config/app/util')
export const AppConstant = require('@/config/app/constant')
// 所有服务配置
export const DataService = require('@/services/data-service').default
export const CityService = require('@/services/city-service').default
export const OrderService = require('@/services/order-service').default
export const UserService = require('@/services/user-service').default
export const MapService = require('@/services/map-service').default
export const PermService = require('@/services/perm-service').default
// 所有业务数据配置
export const FormData = require('@/config/form/data').default
export const CityData = require('@/config/city/data').default
export const OrderData = require('@/config/order/data').default
export const UserData = require('@/config/user/data').default
export const ChartData = require('@/config/chart/data').default
export const ChartTheme = require('@/config/chart/theme').default
export const PermData = require('@/config/perm/data').default