const path = require('path');
const fs = require('fs');
const koa = require('koa');
const router = require('koa-better-router')().loadMethods();
const server = require('koa-static-server');
const cheerio = require('cheerio');
const promise = require('bluebird');
const buildPath = path.resolve(__dirname, '../build');
const app = new koa();

/**
 * 读取HTML模版，返回cheerio实例
 * @param path
 * @return {Promise.<*>}
 */
async function loadHtmlTemplate(path) {
  try {
    let content = await promise.promisify(fs.readFile)(path);
    return cheerio.load(content);
  } catch(e) {
    console.error(e);
    return false;
  }
}

router.get('/', async(ctx, next) => {
  let $ = await loadHtmlTemplate(path.join(buildPath, 'index.html'));
  if(!$) {
    return ctx.body = null;
  }

  return ctx.body = $.html();
});

app.use(router.middleware());
app.use(server({ rootDir: buildPath }));

app.listen(8088, () => console.log('Server is listening on 8088...'));