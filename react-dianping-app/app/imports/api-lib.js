// 所有api集合
const homeApi = require('@/api/home');
const searchApi = require('@/api/search');
const detailApi = require('@/api/detail');
const userApi = require('@/api/user');

export const [getAdvData, getFavData] = [homeApi.getAdvData, homeApi.getFavData];
export const [getSearchData] = [searchApi.getSearchData];
export const [getDetailData, getCommentData] = [detailApi.getDetailData, detailApi.getCommentData];
export const [getOrderData, submitOrderComment] = [userApi.getOrderData, userApi.submitOrderComment];