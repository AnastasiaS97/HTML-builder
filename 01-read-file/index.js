const fs = require('fs');
const path = require('path');
	
var readStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf8');

readStream.on("data", (data) => console.log(data));

readStream.on('error', (err) => console.log(`Err: ${err}`));
