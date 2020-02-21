import { ReduxFactory } from 'm2-redux'
import { reducer as getDictListReducer } from '@/features/common/redux/controllers/getDictList'
import config from '@/features/common/redux/config'

const reducers = [
  getDictListReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
