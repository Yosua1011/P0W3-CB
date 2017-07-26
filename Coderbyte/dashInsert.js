function DashInsert(str) { 
    var i = 0;
    while (i < str.length-1) {
        if (Number(str[i]) % 2 === 1 && Number(str[i+1]) % 2 === 1) {
            str = str.slice(0, i + 1) + '-' + str.slice(i+1);
            i = i + 2;
        }
        else {
            i++;
        }
    }

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
DashInsert(readline());