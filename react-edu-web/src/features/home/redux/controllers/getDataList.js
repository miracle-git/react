import { ReduxFactory } from 'm2-redux'
import config from '@/features/home/redux/config'

const params = { config, actionKey: 'list' }

export const action = () => ReduxFactory.createAction(params)
export const reducer = (state, action) => ReduxFactory.createReducer(state, action, params, () => action.payload);
