import { get } from '@/features/app/utils/fetch'
import api from '@/features/app/constants/api.conf'

export const service = {
  getCategoryFilter: (params) => get(api.getCategoryFilter, { params })
};
