import { get } from '@/features/app/utils/fetch'
import api from '@/features/app/constants/api.conf'

export const service = {
  getOrderList: (params) => get(api.getOrderList, { params, key: true, itemsName: 'digestlist' })
};
