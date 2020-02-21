import { ReduxFactory } from '@lib/react-lib'
import config from '@/redux/features/auth/config'

const params = { config, actionKey: 'login' }

export const action = (userName, password) => 
  ReduxFactory.createAction(params, { userName, password })

export const reducer = (state, action) => 
  ReduxFactory.createReducer(state, action, params, () => {
    return action.payload
  })
