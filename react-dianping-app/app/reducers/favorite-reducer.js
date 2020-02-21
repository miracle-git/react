import * as actionTypes from '@/constants/favorite-action-types';

const initialState = [];

export default function favorite(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_FAVORITE:
      return action.data;
    case actionTypes.ADD_FAVORITE:
      state.unshift(action.data);
      return state;
    case actionTypes.REMOVE_FAVORITE:
      return state.filter(item => item.id !== action.data.id);
    default:
      return state;
  }
}