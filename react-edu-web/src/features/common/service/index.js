
import { get } from '@/features/app/utils/fetch'
import api from '@/features/app/constants/api.conf'
import $ from 'jquery'

export const service = {
  getDictList: () => get(api.getDictList, { loading: false }),
  openSubMenu: () => {
    $('.navs ul').prev('a').on('click', function () {
      $(this).next().slideToggle()
    })
  }
};
