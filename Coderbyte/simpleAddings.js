function SimpleAdding(num) { 
    tot = 0;
    for (i=1; i<=num; i++) {
        tot += i;
    }
    return tot;
}
   
// keep this function call here 
SimpleAdding(readline());