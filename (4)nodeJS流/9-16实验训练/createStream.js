//用到数据传输，用引入stream'模块
const stream=require("stream");

//
function MyReadable(){
    stream.Readable.call(this);
}
MyReadable.prototype.__proto__=stream.Readable.prototype;

var reader=new MyReadable();
for(var i=97;i<=122;i++){
    reader.push(String.fromCharCode(i));
}
reader.push(null);
reader.pipe(process.stdout);

