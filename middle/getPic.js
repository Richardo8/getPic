var request = require('request');

var getPic = function (movieName) {
    var url = `https://api.douban.com/v2/movie/search?q=${encodeURI(movieName)}`;
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

module.exports = getPic;