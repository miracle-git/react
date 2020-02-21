import * as actionTypes from '@/constants/userinfo-action-types';

export function update(data) {
  return {
    type: actionTypes.UPDATE_USERINFO,
    data
  }
}