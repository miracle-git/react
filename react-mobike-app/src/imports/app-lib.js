// 所有业务组件
export const App = require('@/views/app').default
export const Home = require('@/views/home').default
// ui
export const Button = require('@/views/ui/button').default
export const Modal = require('@/views/ui/modal').default
export const Loading = require('@/views/ui/loading').default
export const Notify = require('@/views/ui/notify').default
export const Message = require('@/views/ui/message').default
export const Tab = require('@/views/ui/tab').default
export const Gallery = require('@/views/ui/gallery').default
export const Carousel = require('@/views/ui/carousel').default
export const RichText = require('@/views/ui/rich-text').default
// form
export const Login = require('@/views/form/login').default
export const Register = require('@/views/form/register').default
// table
export const BasicTable = require('@/views/table/basic').default
export const BasicRadioTable = require('@/views/table/basic/radio').default
export const BasicCheckTable = require('@/views/table/basic/check').default
export const BasicPagerTable = require('@/views/table/basic/pager').default
export const AdvanceTable = require('@/views/table/advance').default
export const AdvanceSorterTable = require('@/views/table/advance/sorter').default
export const AdvanceBadgeTable = require('@/views/table/advance/badge').default
// city
export const CityList = require('@/views/city').default
export const CityFilter = require('@/views/city/filter').default
export const CityOpen = require('@/views/city/open').default
// user
export const UserList = require('@/views/user').default
export const UserFilter = require('@/views/user/filter').default
export const UserCreate = require('@/views/user/create').default
export const UserUpdate = require('@/views/user/update').default
export const UserDetail = require('@/views/user/detail').default
// order
export const OrderList = require('@/views/order').default
export const OrderFilter = require('@/views/order/filter').default
export const OrderDetail = require('@/views/order/detail').default
// map
export const BikeMap = require('@/views/map').default
export const BikeMapFilter = require('@/views/map/filter').default
// chart
export const BarChart = require('@/views/chart/bar').default
export const PieChart = require('@/views/chart/pie').default
export const LineChart = require('@/views/chart/line').default
// permission
export const PermList = require('@/views/perm').default
export const PermCreate = require('@/views/perm/create').default
export const PermConfig = require('@/views/perm/config').default
export const PermAuth = require('@/views/perm/auth').default