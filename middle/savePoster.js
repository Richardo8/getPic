var fs = require('fs'),
    path = require('path'),
    request = require('request');

var savePoster = function (movieDir, movieNames, urls) {
    for(var movieNum in movieNames){
        let thisName = path.parse(movieNames[movieNum]).name;
        request.get(urls[movieNum]).pipe(fs.createWriteStream(path.join(movieDir, thisName + '.jpg')))
    }
}

module.exports = savePoster;