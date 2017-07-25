function MeanMode(arr) {
    var sum = 0;
    var mode = 0;
    for(i = 0; i < arr.length; i ++) {
        sum += arr[i];
        if(!MeanMode[arr[i]])MeanMode[arr[i]] = 1;
        else {
            MeanMode[arr[i]]++;
            if(MeanMode[arr[i]] > mode) mode = arr[i];
        }
    }
    if(mode === sum/arr.length) return 1;
    return 0;
}
   
// keep this function call here 
MeanMode(readline());