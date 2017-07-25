function VowelCount(str) { 
    var vowel = ['a', 'i', 'u', 'e', 'o'];
    var tot = 0;
    
    for (i=0; i<vowel.length; i++) {
        for (j=0; j<str.length; j++) {
            if (str[j] === vowel[i]) {
                tot ++;
            }    
        }
    }
    return tot;
}
   
// keep this function call here 
VowelCount(readline());

