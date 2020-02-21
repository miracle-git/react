import { ReduxFactory } from 'm2-redux'
import config from '@/features/home/redux/config'
import { homeService } from '@/features/app/service'

const params = { config, actionKey: 'categories' }
const promise = () => homeService.getCategoryList()

export const action = () => ReduxFactory.createAsyncAction(promise, params, (res) => {
  return res && res.primary_filter ? res.primary_filter.slice(0, 8) : []
})
export const reducer = (state, action) => ReduxFactory.createAsyncReducer(state, action, params)
