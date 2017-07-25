function SecondGreatLow(arr) { 
    if (arr.length === 2) {
        arr.sort(function(a,b) {return a - b});
        return arr[1] + ' ' + arr[0];
    }
    
    var uniqueArray = arr.filter(function(item, pos) {
        return arr.indexOf(item) == pos;
    });
    
    if (uniqueArray.length > 2) {
        uniqueArray.sort(function(a, b) {return a-b});
        return uniqueArray[1] + ' ' + uniqueArray[uniqueArray.length - 2];
    }
}
   
// keep this function call here 
SecondGreatLow(readline());