import { ReduxFactory } from 'm2-redux'
import commonReducer from '@/features/common/redux/reducers'
import homeReducer from '@/features/home/redux/reducers'
import userReducer from '@/features/user/redux/reducers'
import authReducer from '@/features/auth/redux/reducers'
import courseReducer from '@/features/course/redux/reducers'
import modelReducer from '@/features/model/redux/reducers'
import settingReducer from '@/features/setting/redux/reducers'

const reducerMap = {
  common: commonReducer,
  home: homeReducer,
  user: userReducer,
  auth: authReducer,
  course: courseReducer,
  model: modelReducer,
  setting: settingReducer
}

export default (state, action) => ReduxFactory.createAppReducer(reducerMap, state, action)
