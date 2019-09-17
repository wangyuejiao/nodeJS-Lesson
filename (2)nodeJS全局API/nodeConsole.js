//定义一个对象
/*var 对象名字={
    属性1：   ，
    属性2：   ，
    属性3；   
}最后一个不写,*/
//输出数据
/*
%s输出字符串，用对象.属性去代替%s
%d输出整型
%j，表示输出是数组，是json类型
*/
var user={
    name:"wangyuejiao",
    age:21,
    qq:"1954896440"
}
console.log("name:%s",user.name);
console.log("age:%d",user.age);
console.log("user:%j",user);