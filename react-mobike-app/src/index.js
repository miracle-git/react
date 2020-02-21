import { React, Provider, boot } from '@lib/react-lib'
import { AppRouter, AppStore } from '@lib/com-lib'

boot(
  <Provider store={AppStore.create()}>
    <AppRouter/>
  </Provider>
)