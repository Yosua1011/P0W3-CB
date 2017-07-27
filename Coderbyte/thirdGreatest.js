function ThirdGreatest(strArr) { 

  strArr.sort(function(a, b){
      return b.length - a.length; 
    });
    
   return strArr[2];
         
}
   
// keep this function call here 
ThirdGreatest(readline());