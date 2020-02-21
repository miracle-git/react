import * as actionTypes from '@/constants/userinfo-action-types';

const initialState = {};

export default function userinfo(state = initialState, action) {
  switch (action.type) {
      // 修改用户信息
    case actionTypes.UPDATE_USERINFO:
      return action.data;
    default:
      return state;
  }
}