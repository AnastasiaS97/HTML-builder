const fs = require('fs');
const { stdin } = require('process');
const rl = require('readline');

var readLines = rl.createInterface(
    {
    input: stdin,
    output: "yourtext.txt",
    }
);

var outputFile = fs.createWriteStream('./02-write-file/yourtext.txt');

console.log('Вы можете начать запись в файл. Введите текст.');

readLines.on('line', (input) => {
    if(input === 'exit') {
        console.log('Запись в файл завершена.');
        readLines.close();
    }
        else {
            fs.appendFile('./02-write-file/yourtext.txt', input+'\n', (err) => {
                if(err) throw err
            })
        }
});

process.on('SIGINT', () =>
    {   
        console.log('Запись в файл завершена.');
        readLines.close()
    }
);

