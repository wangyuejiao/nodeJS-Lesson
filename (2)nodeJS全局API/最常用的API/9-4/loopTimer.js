   //我把process.exit()写在了和两个函数并列的位置，因为一个是定时执行，一个是延迟执行，而直接退出没有时间花费，所以首先程序会退出，不会执行定时执行和延迟执行
   setInterval(function loop(){
        console.log("I will loop forever");
    },500)

   
//延迟执行
//程序退出
    setTimeout(function(){
        console.log("Game over");
        process.exit();
    },5000)
    

   
