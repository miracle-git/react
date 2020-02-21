import { ReduxFactory } from 'm2-redux'
import commonReducer from '@/features/common/redux/reducers'
import authReducer from '@/features/auth/redux/reducers'
import homeReducer from '@/features/home/redux/reducers'
import orderReducer from '@/features/order/redux/reducers'
import mineReducer from '@/features/mine/redux/reducers'
import productReducer from '@/features/product/redux/reducers'

const reducerMap = {
  common: commonReducer,
  auth: authReducer,
  home: homeReducer,
  order: orderReducer,
  mine: mineReducer,
  product: productReducer
}

export default (state, action) => ReduxFactory.createAppReducer(reducerMap, state, action);
