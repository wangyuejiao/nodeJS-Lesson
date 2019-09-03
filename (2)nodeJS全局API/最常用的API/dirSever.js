//1、引入http原生模块
const http = require("http");//环境自带的http原生模块
const fs = require("fs");//进行文件操作的原生模块
const url = require("url");
const path = require("path");//引入path模块
//2、创建一个服务器，只要有http请求，访问端口
//就会执行回调函数里面的内容
var server = http.createServer(function(req,res){//回调函数，两个参数：请求对象、响应对象
    //res.end("接收到客户端请求");
    //找到网页文件在哪儿no
    //req.url表示url地址中，端口以后的内容
    //使用了url.parse将req.url转化为了对象。对象提取pathname
    var urlObj = url.parse(req.url);
    var urlPathName = urlObj.pathname;

    //根据资源路径，可以执行哪一段代码
    if(urlPathName =="/favicon.ico"){
        res.end();
    }
    else if(urlPathName=="/"){ //直接响应页面
     // console.log(urlObj);
     //console.log(urlPathName);
     var htmlPath = __dirname+"/view/index.html";//字符串拼接 绝对路径斜杠\ 需要前面加\进行转译 mac系统/ window系统\
     //console.log(htmlPath);
     //读文件中的代码nod
     var htmlContent = fs.readFileSync(htmlPath);//参数：路径
     // console.log(htmlContent);
     htmlContent = htmlContent.toString("utf8");
     //响应到客户端
     res.writeHead(200,{"Content-Type":"text/html"});
     res.write(htmlContent);
     res.end();}
     else if(urlPathName=="/js/index.js"){
        var jsPath = path.join(__dirname,"/js/index.js");//进行操作系统的判断 根据平台的不同选择不同的分隔符
        var jsContent = fs.readFileSync(jsPath);//读取路径下的文件内容
        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.write(jsContent);
        res.end();
        console.log(jsContent);

     }
   
});
//3、服务监听一个端口
server.listen(8081);
//4、输出提示信息
console.log("server is listening 8081");
