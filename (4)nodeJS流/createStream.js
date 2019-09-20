//用到数据传输，用引入stream'模块
const stream=require("stream");

//构造函数就是function 名字(){},构造函数里去继承，用call
function MyReadable(){
    stream.Readable.call(this);
}

MyReadable.prototype.__proto__=stream.Readable.prototype;

//构造函数只是模板，写完构造函数需要实例化
var reader=new MyReadable();
for(var i=97;i<=122;i++){
    reader.push(String.fromCharCode(i));
}
reader.push(null);
reader.pipe(process.stdout);

