export default {
  local: {
    api: 'https://easy-mock.com/mock/5d20d6ef28516133c85081ca/meituanapi'
  },
  dev: {
    api: 'https://easy-mock.com/mock/5d20d6ef28516133c85081ca/meituanapi',
    // 支持多api的形式(请求时配置apiKey, 如：'mock', 'app'等)
    // api: {
    //   mock: 'https://easy-mock.com/mock/5cd97b7ceebf633b5de54c25/billingapi',
    //   app: 'https://m2-app.server.com/service_api'
    // }
  },
  st: {
    api: 'https://easy-mock.com/mock/5cd97b7ceebf633b5de54c25/billingapi'
  },
  uat: {
    api: 'https://easy-mock.com/mock/5cd97b7ceebf633b5de54c25/billingapi'
  },
  prod: {
    api: 'https://easy-mock.com/mock/5cd97b7ceebf633b5de54c25/billingapi'
  }
}
