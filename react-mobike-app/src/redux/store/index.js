import { createStore } from '@lib/react-lib'
import { AppReducers } from '@lib/com-lib'

export const create = (initialState) => createStore(AppReducers.create, initialState)