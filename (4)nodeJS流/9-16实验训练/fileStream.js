const fs=require("fs");
const path=require("path");
var filePath=path.join(__dirname,"/from.txt");
var writePath=path.join(__dirname,"/to.txt");
var readStream=fs.createReadStream(filePath);
var writeStream=fs.createWriteStream(writePath);
readStream.pipe(writeStream);