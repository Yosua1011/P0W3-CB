function AdditivePersistence(num) { 

    var sum, loop = 0;
    var val1 = num.toString(10).split("").map(Number);
   
    while (val1.length > 1) {
        sum = 0;
        val1.forEach( function(number) {
            sum = sum + number;
        });
        
        val1 = sum.toString(10).split("").map(Number);
        loop++;
    } 
    
    return loop;
         
}
   
// keep this function call here 
AdditivePersistence(readline());