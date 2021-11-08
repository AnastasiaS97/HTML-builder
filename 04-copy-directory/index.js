const fsP = require('fs/promises');
const path = require('path');

const dirSrc = path.join(__dirname,'files');
const dirDst = path.join(__dirname,'files-copy');

async function copyDir(dirSrc,dirDst) {

    const filesToCopy = await fsP.readdir(dirSrc);

    await fsP.rm(dirDst, {recursive: true, force: true}, err => {if (err) throw err;});

    await fsP.mkdir(dirDst, {recursive:true, force:true}, err => {if (err) throw err;});

    await fsP.readdir(dirSrc, (files, err) => {if (err) throw err;});

    for (const file of filesToCopy) {
        var fileSrc = path.join(dirSrc, file);
        var fileCopy = path.join(dirDst, file);
        await fsP.copyFile(fileSrc, fileCopy);
    }
}
copyDir(dirSrc,dirDst);
    
