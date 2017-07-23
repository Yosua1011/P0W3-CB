function ExOh(str) { 
    if (str.length % 2 === 1) {
        return false;
    }
    
    else {
        tot = 0;
        for (i = 0; i<str.length; i++) {
            if (str[i] === 'x') {
                tot++;
            }
        }
    }
    
    if (tot === (str.length/2)) {
        return true;
    }
    
    else {
        return false;
    }

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
ExOh(readline());