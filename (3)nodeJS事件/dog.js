//原生模块，核心模块
const events=require("events");
var EventEmitter=events.EventEmitter;

function Dog(name,energy){
    //1.执行一遍父构造函数，并且this指向是子构造函数的
    //把EventEmitter执行一遍，只不过this是我给的
    EventEmitter.call(this);
    this.name=name;
    this.energy=energy;
    var that=this;
    setInterval(function() {
        that.emit("back");

    }, 1000);
}


//2.子构造函数继承父构造函数prototype上面的相关方法
//讲继承，把原来函数原型上的构造函数都继承过来
Dog.prototype.__proto__=EventEmitter.prototype;
module.exports=Dog;
