const fs=require('fs');

// const { ReadStream } = require("fs");

const readStream= fs.createReadStream('./blog/blog2.txt',{encoding: 'utf8'});
const writeStream=fs.createWriteStream('./blog/blog3.txt');


// readStream.on('data',(chunk)=>{
//     // console.log('-----------NEW CHUNK-------');
//     // console.log(chunk);
//     writeStream.write(chunk);

// });


//piping
readStream.pipe(writeStream);
