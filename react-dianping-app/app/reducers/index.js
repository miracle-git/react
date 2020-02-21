import { combineReducers } from '@/imports/react-lib';
import userinfo from './userinfo-reducer';
import favorite from './favorite-reducer';

export default combineReducers({
  userinfo,
  favorite
});