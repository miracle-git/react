import { ReduxFactory, ReduxThunk } from '@lib/react-lib'
import { AppReducer as rootReducer } from '@lib/com-lib'

export default () => ReduxFactory.createStore(rootReducer, ReduxThunk)