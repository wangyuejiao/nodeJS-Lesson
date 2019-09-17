//1.引入http原生模块
const http = require("http");
const fs = require("fs"); //文件操作的模块，读文件内容，然后去写路径
const path = require("path"); //自动识别平台，不需要换系统路径
//2.创建一个服务器
var sever = http.createServer(function(req, res) {
    //4.当客户端的http请求发起的时候，才会执行回调函数里面的内容
    var htmlPath = path.join(__dirname, "/views/view.html");
    console.log(htmlPath);
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");

    res.writeHead(200, { "content-Type": "text/html" });
    //res.write(htmlContent);
    res.end();
});

//3.服务器监听一个端口
sever.listen(8080);
console.log("sever is listening 8080");


