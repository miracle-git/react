import { get } from '../get';

// 查看当前项详情
export function getDetailData(id) {
  return get(`/api/detail/${id}`);
}

// 查看当前项评论列表
export function getCommentData(id, page = 1) {
  return get(`/api/detail/comment/${id}/${page}`);
}