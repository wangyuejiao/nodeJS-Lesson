//1.引入模块
const http = require("http");
const fs = require("fs");
const path = require("path");


//2、创建一个服务器
 http.createServer(function(req, res) {
    res.end("hello world");
}).listen(8081);


console.log("server is listening 8081");
