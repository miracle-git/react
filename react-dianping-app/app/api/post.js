import 'whatwg-fetch';
import 'es6-promise';

// 把对象参数拼装为字符串形式(如key1=val1&key2=val2)
function obj2Params(obj) {
  let result = '';

  for(let prop in obj) {
    result += `&${prop}=${encodeURIComponent(obj[prop])}`;
  }

  if(result) {
    result = result.slice(1);
  }

  return result;
}

export function post(url, params) {
  const result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: obj2Params(params)
  });

  return result;
}