//1.引入http原生模块
const http=require("http");
const fs=require("fs");  //进行文件操作的一个模块
//2.创建一个服务器
var server=http.createServer(function(req,res){
    //4.当客户端的http请求发起的时候，才会执行回调函数里的内容
    var sys=process.platform;
    console.log(sys);
    var htmlPath=__dirname+"\\view\\index.html";
    var htmlContent=fs.readFileSync(htmlPath);
    htmlContent=htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent)
    res.end();
    
});
//3.服务监听一个端口
server.listen(8081);
console.log("Server is listening 8081");