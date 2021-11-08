const fs = require('fs');
const path = require('path');

const secretDir = path.join(__dirname,'secret-folder');


fs.readdir(secretDir, (err, files) => {
    if(err) throw err;
    files.forEach(file => 
        {
            var fileFull = path.join(secretDir, file);
            var fileExt = path.extname(file).slice(1);
            var fileNameLength = file.lastIndexOf(".");         // на случай, если в названии файла есть точки
            var fileName = file.substring(0,fileNameLength);
            fs.stat(fileFull, (err, stats) => 
                {
                    if(err) throw err;
                    if(stats.isFile()) {
                        var fileSize = `${(stats.size/1024).toFixed(2)}kb`;     // перевод в килобайты с точностью до двух знаков
                        console.log(`${fileName} - ${fileExt} - ${fileSize}`);
                    }
                })
        }
    );
});

