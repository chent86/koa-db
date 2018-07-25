const router = require('koa-router')()

const prepare = require('./lib/prepare');
const RestQL = require('koa-restql');
const models = prepare.sequelize.models;
const restql = new RestQL(models);


function setRoute(app) {
  router.all('/auth', async function (ctx, next) {
    ctx.body = 'auth!';
  })
  router.all('/*', async function (ctx, next) {
    auth=true;
    if(auth) {
      console.log('auth')
      await next()
    }
  })
  app.use(router.routes())
  app.use(restql.routes())
}

module.exports = setRoute