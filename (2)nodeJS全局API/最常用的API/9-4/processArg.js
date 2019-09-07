/*
1.传入命令行参数，是一个算术运算式1+
2.程序将算术运算式计算得到结果，并且在控制台输出
1+=
3.程序判断一下是否传入了命令行参数，如果没有传入，控制台输出，”命令行参数错误“
eval()如果传入是运算式，可以直接得到结果
*/
var arg1=process.argv[2];
if(arg1==undefined||arg1=='-h'){
    console.log("帮助：命令参数需为算术运算式");
}
else{
    var result=eval(arg1)
    console.log(arg1+"=%s",result);
}