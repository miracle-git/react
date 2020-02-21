import { get } from '../get';

// 获取搜索数据
export function getSearchData(cityName, category, keyword = '', page = 1) {
  const searchKeyword = keyword ? `/${encodeURIComponent(keyword)}` : '';
  return get(`/api/search/${encodeURIComponent(cityName)}/${encodeURIComponent(category)}${searchKeyword}/${page}`);
}