function ChangingSequence(arr) {
    for (i=0; i < arr.length; i++)  {
        if ((arr[i] < arr[i+1]) && (arr[i+1] > arr[i+2])) {
            return (i+1);
        } else if ((arr[i] > arr[i+1]) && (arr[i+1] < arr[i+2])) {
            return (i+1);
        } else {}
    }
    return -1;
}

// keep this function call here 
ChangingSequence(readline());