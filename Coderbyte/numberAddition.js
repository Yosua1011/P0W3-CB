function NumberAddition(str) { 

    var tot = 0;
    
    str = str.replace(/[^0-9\.]+/g," ").split(" ");
    for (var i = 0; i < str.length; i++) {
        tot += Number(str[i]);
    }
  
  return tot;
         
}
   
// keep this function call here 
NumberAddition(readline());