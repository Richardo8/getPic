var fs = require('fs'),
    path = require('path'),
    exts = ['.txt'];

var readFiles = function (movieDir) {
    return new Promise(function (resolve, reject) {
        fs.readdir(movieDir, function (err, files) {
            if(err){
                reject(err);
            }else{
                resolve(
                    files.filter((v) => exts.includes(path.parse(v).ext))
                )
            }
        })
    })
}

module.exports = readFiles;