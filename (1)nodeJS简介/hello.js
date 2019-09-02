const http=require('http');

var server=http.createServer(function(req,res){
    res.write("<h1>hello world</h1>");
    //响应结束
    res.end();
});

server.listen(8081);
console.log("server is listening 8081");

//编译node.js文件 node 文件名回车
//每次修改了js文件后，需要重新执行node+文件名
//shift+鼠标右键 点击打开power shell窗口
//WebStorm



//nodeServer.js
const http=require("http");

var server=new http.Server();

server.on("request",function(req,res){
    res.end("hello world");
})
//server监听端口
server.listen(8082);
console.log("server is listening 8082");
