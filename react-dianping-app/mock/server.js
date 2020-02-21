const koa = require('koa');
const router = require('koa-better-router')().loadMethods();
const koaBody = require('koa-body')();
const app = new koa();

router.get('/', function *(next) {
  this.body = 'Hello Koa!';
});

router.get('/api', function *(next) {
  this.body = 'Koa mock api has been starting...';
});

// 首页 - 广告
router.get('/api/home/adv', function *(next) {
  this.body = require('./home/adv-data');
});

// 首页 - 列表
router.get('/api/home/fav/:city/:page', function *(next) {
  console.log(`当前城市：${this.params.city}`);
  console.log(`当前页码：${this.params.page}`);

  this.body = require('./home/fav-data');
});

// 搜索 - 搜索结果(按类别)
router.get('/api/search/:city/:category/:page', function *(next) {
  console.log(`当前城市：${this.params.city}`);
  console.log(`当前类别：${this.params.category}`);
  console.log(`当前页码：${this.params.page}`);

  this.body = require('./search/search-data');
});

// 搜索 - 搜索结果(按关键字)
router.get('/api/search/:city/all/:keyword/:page', function *(next) {
  console.log(`当前城市：${this.params.city}`);
  console.log(`搜索关键字：${this.params.keyword}`);
  console.log(`当前页码：${this.params.page}`);

  this.body = require('./search/search-data');
});

// 详情 - 查看详情(按Id)
router.get('/api/detail/:id', function *(next) {
  console.log(`当前项：${this.params.id}`);

  this.body = require('./detail/info-data');
});

// 详情 - 评论列表
router.get('/api/detail/comment/:id/:page', function *(next) {
  console.log(`当前项：${this.params.id}`);
  console.log(`当前页码：${this.params.page}`);

  this.body = require('./detail/comment-data');
});

// 用户 - 订单列表
router.get('/api/user/order/:user', function *(next) {
  console.log(`当前用户：${this.params.user}`);

  this.body = require('./user/order-data');
});

// 用户 - 提交评价
router.post('/api/user/submitcomment', function *(next) {
  console.log('提交评价');

  this.body = {
    error: 0,
    message: 'ok'
  };
});

app.use(router.middleware());

app.listen(3000, () => console.log('Koa mock api is listening on 3000...'));