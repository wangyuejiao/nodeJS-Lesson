//定义构造函数，就是function 加名字(){}
//构造函数原型上有方法，方法就是一个函数，所以是this.方法=function(){}
//构造函数上有属性，就是this.属性=啥
//记住构造函数只是一个模板，你还需要实例化才能去用
function Bomb(){
    this.message="bomb!!!",
    this.explode=function(){
         console.log(this.message);
    }
}
var bomb=new Bomb();
setTimeout(() => {
    bomb.explode();
}, 2000);

