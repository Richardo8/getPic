var fs = require('fs'),
    path = require('path'),
    request = require('request');

var savePoster = function (movieDir, movieNames, urls) {
    for(var movieNum in movieNames){
        request.get(urls[movieNum]).pipe(fs.createWriteStream(path.join(movieDir, movieNames[movieNum] + '.jpg')))
    }
    // request.get(url).pipe(fs.createWriteStream(path.join(movieDir, movieName + '.jpg')))
}

module.exports = savePoster;