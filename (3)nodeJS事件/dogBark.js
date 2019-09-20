var Dog=require("./dog.js");
var dog1=new Dog("taidi",5);
var dog2=new Dog("zangao",2);

function barkFun(){
    console.log(this.name+'barked!'+"energy:"+this.energy);
}

function barkFunc(){
    console.log(this.name+'barked!'+"energy:"+this.energy);
}


//on什么都是继承event事件
dog1.on("bark",barkFun);
var intervalId=setInterval(function(){
    if(dog1.energy>=0){
        dog1.emit("bark");
    }
    else{
        intervalId.unref();
        //clearInterval(intervalId);
    }
    dog1.energy=dog1.energy-1;
},1000);

dog2.on("bark",barkFunc);
var intervalId=setInterval(function(){
    if(dog2.energy>=0){
        dog2.emit("bark");
    }
    else{
        intervalId.unref();
        //clearInterval(intervalId);
    }
    dog2.energy=dog2.energy-1;
},1000);

 