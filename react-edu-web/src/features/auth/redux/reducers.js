import { ReduxFactory } from 'm2-redux'
import { reducer as userLoginReducer } from '@/features/auth/redux/controllers/userLogin'
import { reducer as userLogoutReducer } from '@/features/auth/redux/controllers/userLogout'
import config from '@/features/auth/redux/config'

const reducers = [
  userLoginReducer,
  userLogoutReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
