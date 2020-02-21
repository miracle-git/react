import { ReduxFactory } from 'm2-redux'
import { reducer as getDataListReducer } from '@/features/setting/redux/controllers/getDataList'
import { reducer as getDataItemReducer } from '@/features/setting/redux/controllers/getDataItem'
import config from '@/features/setting/redux/config'

const reducers = [
  getDataListReducer,
  getDataItemReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
