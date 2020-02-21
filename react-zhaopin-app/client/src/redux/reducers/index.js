import { ReduxFactory } from '@lib/react-lib'
import authReducer from '@/redux/features/auth/reducers'

const reducerMap = {
  auth: authReducer
}

export default (state, action) => ReduxFactory.createAppReducer(reducerMap, state, action);