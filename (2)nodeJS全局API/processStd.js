// var user={
//     name:"",
//     email:'',
//     qq:'',
//     mobile:''
// }
// console.log("name:");
// var i=0;
//  process.stdin.on("data",function(data){
//         i++;
//         if(i==1){
//             //没有重新赋值这一步，user里面还是空值，user.属性=你输入的数据，你输入的数据就是Data,用toString()方法把它化成字符串
//             user.name=data.toString();
//             console.log("email:");
            
//         }
//         if(i==2){
//             user.email=data.toString();
//             console.log("qq:");
           
//         }
//         if(i==3){
//             user.qq=data.toString();
//             console.log("moblie:");
           
//         }
//         if(i==4){
//             user.mobile=data.toString();
//             console.log(user);
//              process.exit();
//         }
//     }
//  )




//输入完敲击回车时执行，把数据传送进去
var obj={};
var message=["Name","Email","QQ","Mobile"];
var i=1;
console.log(message[0]+":");
process.stdin.on("data",function(data){
    obj[message[i-1]]=data.toString("utf8");
    if(i==4){
         console.log(obj);
         process.exit();
    }
    else{
        console.log(message[i++]+":");
    }
})



