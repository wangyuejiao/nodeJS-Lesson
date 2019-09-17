var circle=require("./circleModule1.js");
var r=process.argv[2];
circle.circumference();
circle.area();
//构造函数里面是形参，代表有几个参数，还需要在调用的时候传进去一个实参
console.log(circle.circumference(r));
console.log(circle.area(r));