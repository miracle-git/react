import { AppActions } from '@lib/com-lib'

const initialState = {
  menuName: '首页'
}

// 定义所有的Reducers
export const create = (state = initialState, action) => {
  switch(action.type) {
    case AppActions.ACTION_TYPES.SWITCH_MENU: 
      return {
        ...state,
        menuName: action.payload
      }
    default:
      return state
  }
}