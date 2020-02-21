
import { get } from '@/features/app/utils/fetch'
import api from '@/features/app/constants/api.conf'

export const service = {
  getDictList: () => get(api.getDictList, { loading: false }),
  getRetailerList: (params) => get(api.getRetailerList, { params, key: true, itemsName: 'poilist' }),
  getRetailerParamsList:  (params) => get(api.getRetailerParamsList, { params, key: true, itemsName: 'poilist' })
};
