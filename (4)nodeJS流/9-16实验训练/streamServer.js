//先创建服务端端口
const fs=require("fs");
const http=require("http");
const path=require("path");


http.createServer(function(req,res){
   //streamReader用到fs模块上的一个方法 
    var filePath=path.join(__dirname,"/data.txt");
//streamReader是一个可读流对象source （数据来源）
    var streamReader=fs.createReadStream(filePath);
//pipe()管道
//res是http的响应对象，res是一个可写流对象
//destination(数据目标)
    streamReader.pipe(res);
}).listen(8081);

console.log("server is listening 8081");