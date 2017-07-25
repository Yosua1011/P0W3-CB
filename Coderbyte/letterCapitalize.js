function LetterCapitalize(str) {
    var arr = str.split(' ');
    for (i=0; i<arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    
    return arr.join(' ');
}
   
// keep this function call here 
LetterCapitalize(readline());