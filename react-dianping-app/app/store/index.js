import { createStore } from '@/imports/react-lib';
import rootReducer from '@/reducers';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
  return store;
}