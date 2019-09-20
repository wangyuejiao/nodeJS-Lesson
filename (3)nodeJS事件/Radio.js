
/*
三种实现继承的方式
1.Parent.call(this) Child.prototype.__proto__=Parent.prototype
2.Child extends Parent{}
3.util.inherits(Child,Parent)
*/
const util=require("util");
const EventEmitter=require("events");

function Radio(name,speed){
    EventEmitter.call(this);
    this.play=function(){
        console.log(this.name+" "+this.speed+" "+'opened');
        
   }
   
   this.stop=function(){
    console.log(this.name+" "+this.speed+" "+'closed');
}

    this.name=name;
    this.speed=speed;
} 

util.inherits(Radio,EventEmitter);
module.exports=Radio;