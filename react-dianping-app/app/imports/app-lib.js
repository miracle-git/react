export const store = require('@/store').default();
export const RouteMap = require('@/router').default;
export const LocalStore = require('@/util/localStore').default;
export const CacheKeys = require('@/constants/cache-key');
// 集中收集Actions
export const userinfoActions = require('@/actions/userinfo-actions');
export const favoriteActions = require('@/actions/favorite-actions');