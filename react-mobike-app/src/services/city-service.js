import { DataService, AppUtil } from '@lib/com-lib'
import { Message } from '@lib/vendor-lib'

const getList = (component) => {
  DataService.getList('/city/openlist', component, {
    params: {
      page: component.state.page,
      query: component.getFormValue(component.filterForm)
    }
  })
}

export default {
  getList,
  confirm: (component, e) => {
    const formValue = component.getFormValue(component.cityOpenForm)
    const currentCity = component.state.cityList.find(item => item.city_id === formValue.city_id)
    component.validateForm({
      form: component.cityOpenForm,
      callback: () => {
        AppUtil.getApiData('/city/open', {
          params: formValue,
          callback: () => {
            Message.success(`已成功开通【${currentCity.city_name}】`)
            component.resetForm(component.cityOpenForm)
            component.setState({
              showOpenCityModal: false
            })
            getList(component)
          }
        })
      }
    }, e)
  }
}