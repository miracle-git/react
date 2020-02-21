import * as actionTypes from '@/constants/favorite-action-types';

export function update(data) {
  return {
    type: actionTypes.UPDATE_FAVORITE,
    data
  }
}

export function add(item) {
  return {
    type: actionTypes.ADD_FAVORITE,
    data: item
  }
}

export function remove(item) {
  return {
    type: actionTypes.REMOVE_FAVORITE,
    data: item
  }
}