import { ReduxFactory } from 'm2-redux'
import config from '@/features/product/redux/config'

const params = { config, actionKey: 'tabsFilter', actionType: 'change' }

export const action = (data) => ReduxFactory.createAction(params, data)
export const reducer = (state, action) => ReduxFactory.createReducer(state, action, params, () => ({ ...state.tabsFilter, ...action.payload }))
