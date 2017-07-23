function Palindrome(str) { 
    var reverse = [];
    for (i=0; i < str.length; i++) {
        reverse.unshift(str[i]);
    }
    
    return str[0] === reverse[0] && str[(str.length)-1] === reverse[(str.length)-1]
}
   
// keep this function call here 
Palindrome(readline());