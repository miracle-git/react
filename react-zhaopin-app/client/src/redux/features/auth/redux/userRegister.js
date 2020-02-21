import { ReduxFactory } from '@lib/react-lib'
import config from '@/redux/features/auth/config'

const params = { config, actionKey: 'register' }

export const action = (promise) => 
  ReduxFactory.createAsyncAction(promise, params)

export const reducer = (state, action) => 
  ReduxFactory.createAsyncReducer(state, action, params)
