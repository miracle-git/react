import { ReduxFactory } from '@lib/react-lib'
import config from '@/redux/features/auth/config'

const params = { config, actionKey: 'editable', actionType: 'add' }

export const action = () => ReduxFactory.createAction(params)

export const reducer = (state, action) => 
  ReduxFactory.createReducer(state, action, params, () => {
    return !state.editable
  })