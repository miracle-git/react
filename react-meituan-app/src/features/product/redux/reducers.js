import { ReduxFactory } from 'm2-redux'
import config from '@/features/product/redux/config'
import { reducer as changeTabFilterReducer } from '@/features/product/redux/controllers/changeTabFilter'
import { reducer as saveFilterDataReducer } from '@/features/product/redux/controllers/saveFilterData'
import { reducer as getFilterDataReducer } from '@/features/product/redux/controllers/getFilterData'

const reducers = [
  changeTabFilterReducer,
  saveFilterDataReducer,
  getFilterDataReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
