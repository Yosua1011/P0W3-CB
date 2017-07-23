function OtherProducts(arr) { 
    var result = [];
    var total = arr.reduce(function(a,b){return a*b});
    for(i=0; i<arr.length; i++) {
        result.push(total/arr[i]);
    }
    return result.join("-");
}
   
// keep this function call here 
OtherProducts(readline());

// function OtherProducts(arr) { 
//     var result = [];
//     var total = arr.reduce((a,b) => a * b});
//     for(i=0; i<arr.length; i++) {
//         result.push(total/arr[i]);
//     }
//     return result.join("-");
// }
   
// // keep this function call here 
// OtherProducts(readline());