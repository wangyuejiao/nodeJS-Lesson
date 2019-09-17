var username=process.argv[2];
var password=process.argv[3];
console.log("用户名："+username +"密码:"+password);

//将utr-8编码的字符串转换成buffer数据
var buf1=Buffer.from(username,"utf-8");
var buf2=Buffer.from(password,"utf-8");


//将buffer数据类型转换成base64类型
console.log("base64加密:"+buf1.toString("base64")+buf2.toString("base64"));


