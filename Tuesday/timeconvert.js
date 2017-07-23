function TimeConvert(num) { 

  // code goes here  
  var menit = Math.floor(num/60);
  var detik = num % 60;
  num = menit + ":" + detik;
  return num ; 
         
}
   
// keep this function call here 
TimeConvert(readline());