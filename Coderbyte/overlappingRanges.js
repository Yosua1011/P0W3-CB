function OverlappingRanges(arr) { 
    var list = [];
    for (i=arr[0]; i <= arr[1]; i++) {
        list.push(i);
    }
    
    var list2 = [];
    for (j=arr[2]; j <= arr[3]; j++) {
        list.push(j);
    }
    
    var len = Math.max(list.length, list2.length);
    var similar = [];
    for (k = 0; i < len; i++) {
        for (l = 0; l < len; l++) { 
            if (list[k] === list2[l]) {
                push(list[i]);
            }
        }
    }
    
    if (similar.length === arr[4]) {
        return true;
    } else {
        return false;
    }
         
}
   
// keep this function call here 
OverlappingRanges(readline());