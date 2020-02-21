import { DataEvent } from 'm2-core'

const _event = {
  scroll: (component,  {
    load = () => {},
    threshold = 50,
    dispose = false
  } = {}) => {
    const _load_data = () => {
      DataEvent.scroll(() => {
        let { loading, page } = component.state
        let { mounted } = component.fields
        if (loading) return
        if (page >= 3) {
          mounted && component.setState({ loading: false, hasMore: false })
          // 停止加载
        } else {
          page = page + 1
          mounted && component.setState({ loading: true, hasMore: true, page }, () => load && load())
        }
      }, { threshold });
    }

    if (dispose) {
      component.fields.mounted = false
      window.removeEventListener('scroll', _load_data)
    } else {
      window.addEventListener('scroll', _load_data)
    }
  }
}

export const event = {
  add: (name, component, options = {}) => _event[name.toLowerCase()](component, options),
  remove: (name, component, options = {}) => _event[name.toLowerCase()](component, { ...options, dispose: true })
}
