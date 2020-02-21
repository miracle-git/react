import { ReduxFactory } from 'm2-redux'
import config from '@/features/product/redux/config'
import { tab_filter_items } from '@/features/product/constants/tab-filter.conf'

const params = { config, actionKey: 'tabsFilter', actionType: 'save' }

export const action = (data) => ReduxFactory.createAction(params, data)
export const reducer = (state, action) => ReduxFactory.createReducer(state, action, params, () => {
  const { items } = state.tabsFilter
  const { cate, sort, filter } = tab_filter_items
  const { category_filter_list, sort_type_list, activity_filter_list } = action.payload

  items[cate].data = category_filter_list
  items[sort].data = sort_type_list
  items[filter].data = activity_filter_list

  return state.tabsFilter
})
