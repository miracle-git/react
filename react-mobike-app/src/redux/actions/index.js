// 定义所有的action type
export const ACTION_TYPES = {
  SWITCH_MENU: 'SWITCH_MENU'
}

// 定义所有的action
export const switchMenu = (menuName) => {
  return {
    type: ACTION_TYPES.SWITCH_MENU,
    payload: menuName
  }
}