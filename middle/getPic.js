var request = require('request');

//既然return的promise中不能就直接写for循环 那就单独写一个获取图片的方法，最后再循环中再组合数据并返回一个promise对象

var fromURLGet = function (url) {
    return new Promise(function (resolve, reject) {
            request({
                url: url,
                json: true
            }, function (err, response, body) {
                if(err){
                    reject(err);
                }else{
                    resolve(body.subjects[0].images.large)
                }
            })
    })
}

var getPic = async function (movieFiles) {
    var result = [];
    for(var file of movieFiles){
        var url = `https://api.douban.com/v2/movie/search?q=${encodeURI(file)}`;
        result.push(await fromURLGet(url));
    }
    console.log(result);
    return new Promise(function (resolve, reject) {
        resolve(result);
    })
}

module.exports = getPic;