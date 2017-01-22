var koa = require('koa');
var fs = require('fs');
var getPic = require('./middle/getPic');
var app = new koa();

// app.use(async (ctx, next) => {
//     const html = await (new Promise(function (resolve, reject) {
//         fs.readFile('package.json', (err, data) => {
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data)
//             }
//         })
//     }))
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>'+html+'</h1>'
// })

app.use(async (ctx, next) => {
    const html  = await getPic();
    await next();
    console.log(html);
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>'+html+'</h1>'
})

app.listen(3000)
console.log('app started at port 3000')