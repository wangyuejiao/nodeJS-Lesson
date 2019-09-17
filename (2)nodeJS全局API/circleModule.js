function circleFun(r){
   function circumference(){
       return 2*r*Math.PI
   }
   function area(){
       return Math.PI*r*r;
   }
  return {circumference:circumference,area:area};
}


module.exports={
    circleFun:circleFun,
}

