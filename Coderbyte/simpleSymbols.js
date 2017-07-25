function SimpleSymbols(str) {
    var arr = str.toLowerCase().split('');
    for (i=0; i<arr.length; i++) {
        if (arr[i] >= 'a' && arr[i] <= 'z') {
            if (i === 0 || i === arr.length-1) {
                return false;
            }
        }
        
        if (arr[i-1] !== '+' || arr[i+1] !== '+') {
            return false;
        }
    }
    return true;     
}
   
// keep this function call here 
SimpleSymbols(readline());