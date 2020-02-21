import { ReduxFactory } from '@lib/react-lib'
import { reducer as userLoginReducer } from '@/redux/features/auth/redux/userLogin'
import { reducer as userRegisterReducer } from '@/redux/features/auth/redux/userRegister'
import { reducer as userEditReducer } from '@/redux/features/auth/redux/userEdit'
import config from '@/redux/features/auth/config'

const reducers = [
  userLoginReducer,
  userRegisterReducer,
  userEditReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => 
  ReduxFactory.createFeatureReducer(reducers, state, action)