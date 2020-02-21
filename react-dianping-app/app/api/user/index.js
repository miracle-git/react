import { get } from '../get';
import { post } from '../post';

// 查看当前用户订单列表
export function getOrderData(user) {
  return get(`/api/user/order/${user}`);
}

// 提交评价
export function submitOrderComment(orderId, comment, star) {
  return post(`/api/user/submitcomment`, {
    orderId,
    comment,
    star
  });
}