var koa = require('koa');
var fs = require('fs');
var getPic = require('./middle/getPic'),
    readFiles = require('./middle/readFiles'),
    savePoster = require('./middle/savePoster'),
    movieDir = __dirname + '/movies';
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
    const name = await readFiles(movieDir);
    await next();
    console.log(name);
    ctx.response.type = 'text/html';
    ctx.response.body += '<h1>'+name+'</h1>'
})

app.use(async (ctx, next) => {
    const html  = await getPic('盗梦空间');
    await next();
    console.log(html);
    ctx.response.type = 'text/html';
    ctx.response.body += '<h1>'+html+'</h1>'
})

app.use(async (ctx, next) => {
    await savePoster(movieDir, '盗梦空间','https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p513344864.jpg');
    await next();
})

app.listen(3000)
console.log('app started at port 3000')