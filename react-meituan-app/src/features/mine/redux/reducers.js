import { ReduxFactory } from 'm2-redux'
import config from '@/features/mine/redux/config'

const reducers = [
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
