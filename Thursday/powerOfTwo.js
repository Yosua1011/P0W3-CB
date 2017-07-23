function PowersofTwo(num) { 
    for (i=1; i <= num; i*=2) {
        if (i===num) {
            return true;
        }
    }
    return false;
         
}
   
// keep this function call here 
PowersofTwo(readline());