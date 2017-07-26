function SwapCase(str) {
    var result = '';
    for (i = 0; i < str.length; i++) {
        var c = str[i];
        var u = c.toUpperCase();
        
        result += u === c ? c.toLowerCase() : u;
    }

  // code goes here  
  return result; 
         
}
   
// keep this function call here 
SwapCase(readline());