import { ReduxFactory } from 'm2-redux'
import config from '@/features/home/redux/config'
import { reducer as getCategoryListReducer } from '@/features/home/redux/controllers/getCategoryList'

const reducers = [
  getCategoryListReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
