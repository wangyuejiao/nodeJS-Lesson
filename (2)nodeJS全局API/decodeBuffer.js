var base64Str = "emhhbmdzYW46MTIzNDU2";

//重新解密，先到buffer类型，再到utf-8编码
var buf2=Buffer.from(base64Str,"base64");
var buf3=buf2.toString("utf-8");
var buf4=buf3.slice(0,8);
var buf5=buf3.slice(8);
console.log("用户名："+buf4+'密码'+buf5);
