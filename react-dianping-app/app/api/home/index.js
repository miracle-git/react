import { get } from '../get';

// 获取广告数据
export function getAdvData() {
  return get('/api/home/adv');
}

// 获取列表数据
export function getFavData(cityName, page = 1) {
  return get(`/api/home/fav/${encodeURIComponent(cityName)}/${page}`);
}