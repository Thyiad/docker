const Koa = require('koa');
const app = new Koa();
const puppeteer = require('puppeteer');

app.use(async (ctx, next) => {
    if(ctx.URL.pathname ='/headless'){
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('https://www.baidu.com', { waitUntil: 'networkidle0' })
        ctx.body = 'headless请求成功'
        return
    }
    await next()
});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(8080);