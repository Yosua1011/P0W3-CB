function MultiplicativePersistence(num) { 
  
  function numprep(num) {
    var strnum = num.toString();
    var arr = strnum.split('');
    var numarr = arr.map(function(val) {
      return parseInt(val)});
    return numarr 
  }
  
  function multnums(arr) {
    var newnum = arr.reduce(function(a, b) {
      return a * b})
        return newnum
  }
  // code goes here  

  
  var count = 0;
  
  while (num > 9) {
    num = multnums(numprep(num));
    count++
      }
  return count         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());