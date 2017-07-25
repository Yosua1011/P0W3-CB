function ABCheck(str) {
    
    patt = /a...b|b...a/;

  // code goes here  
  return patt.test(str); 
         
}
   
// keep this function call here 
ABCheck(readline());