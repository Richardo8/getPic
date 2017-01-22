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
    const files = await readFiles(movieDir);
    ctx.state.movieFiles = files;
    await next();
    // console.log(files);
    ctx.response.type = 'text/html';
    ctx.response.body += '<h1>'+files+'</h1>'
})

app.use(async (ctx, next) => {
    const html  = await getPic(ctx.state.movieFiles);
    ctx.state.movieUrl = html;
    await next();
    // console.log(html);
    ctx.response.type = 'text/html';
    ctx.response.body += '<h1>'+html+'</h1>'
})

app.use(async (ctx, next) => {
    await savePoster(movieDir, ctx.state.movieFiles, ctx.state.movieUrl);
    await next();
})

app.listen(3000)
console.log('app started at port 3000')