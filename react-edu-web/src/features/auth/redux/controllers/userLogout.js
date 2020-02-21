import { ReduxFactory } from 'm2-redux'
import config from '@/features/auth/redux/config'

const params = { config, actionKey: 'loginUser', actionType: 'logout' }

export const action = () => ReduxFactory.createAction(params)
export const reducer = (state, action) => ReduxFactory.createReducer(state, action, params, () => ({ username: '', authenticated: false }));
