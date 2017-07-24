function ArithGeo(arr) {
// 	for (i=0; i<arr.length; i++) {
// 	    if ((arr[i+1]%i[i]) === (i[i+2]%i[i+1])) {
// 	        return "Geometric";
// 	    } else if ((arr[i+1]-i[i]) === (i[i+2]-i[i+1])) {
// 	        return "Arithmetic";
// 	    } else {
// 	        return -1;
// 	    }
// 	}
// }
   
function ArithGeo(arr) { 
var len = arr.length;
var arit = arr[1]-arr[0];
var geo = arr[1]/arr[0];

    for (i=0; i<len; i++) {
        if (arr[i+1]-arr[i] !== arit) {
            break;
        } else if (i === (len-2)) {
            return "Arithmetic"
        }
    }
    
    for (i=0; i<len; i++) {
        if (arr[i+1]/arr[i] !== geo) {
            break;
        } else if (i === (len-2)) {
            return "Geometric"
        }
    }
    
    return -1;
    
    
}
   
// keep this function call here 
ArithGeo(readline());