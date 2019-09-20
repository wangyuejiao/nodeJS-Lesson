var Radio=require("./Radio.js");
var radio=new Radio('"music radio"','FM 106.7');

radio.on("open",radio.play);
radio.emit("open");
setTimeout(function(){
        console.log('lalala...');
        radio.on("stop",radio.stop);
        radio.emit("stop");
},2000)
//  radio.on("stop",radio.stop);
//  radio.emit("stop");



