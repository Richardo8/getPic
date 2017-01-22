var fs = require('fs'),
    path = require('path'),
    request = require('request');

var savePoster = function (movieDir, movieName, url) {
    request.get(url).pipe(fs.createWriteStream(path.join(movieDir, movieName + '.jpg')))
}

module.exports = savePoster;