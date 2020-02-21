// Redux的配置项(用于构建action和initialState)
import { tab_filter_items } from '@/features/product/constants/tab-filter.conf'

export default {
  feature: 'product',
  actionKeys: [
    {
      key: 'tabsFilter',
      data: {
        activeKey: '',
        showPanel: false,
        params: null,
        items: {
          [tab_filter_items.cate]: { key: tab_filter_items.cate, text: '全部品类', current: '', data: [] },
          [tab_filter_items.sort]: { key: tab_filter_items.sort, text: '综合排序', current: '', data: [] },
          [tab_filter_items.filter]: { key: tab_filter_items.filter, text: '筛选', current: '', data: [] }
        }
      }
    }
  ]
}
