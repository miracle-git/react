import { get } from './get';
import { post } from './post';

export function getData() {
  // '/api/1'获取字符串
  const textResult = get('/api/1');
  textResult.then(res => console.log(res.text())).then(text => console.log(text));

  // '/api/2'获取json
  const jsonResult = get('/api/2');
  jsonResult.then(res => console.log(res.json())).then(json => console.log(json));
}

export function postData() {
  const result = post('/api/post', { a: 100, b: 200 });
  result.then(res => console.log(res.json())).then(json => console.log(json));
}