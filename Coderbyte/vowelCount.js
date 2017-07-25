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

*  Steps for solution                                                                  *
*    1) Initialize variables                                                           *
*    2) Convert string to lowerCase, remove all punctuation and store in array         *
*    3) Loop through each word in array and count the occurance of each letter         *
*    4) Compare occurance of repeated letter to maxCt                                  *
*    5) If greater update maxCt to new value and store word in maxWord                 *
*    6) Return word with max repeated characters or -1                                 *
*                                                                                      *
***************************************************************************************/

function LetterCountI(str) {
    var ctObj, tempWord, maxWord, maxCt = 1;
    var arr = str.toLowerCase().replace(/[^a-zA-Z ]/g,"").split(" ");

    for(var i = 0; i < arr.length; i++){
        tempWord = arr[i];
        ctObj = {}

        for(var j = 0; j <tempWord.length; j++){
          ctObj[tempWord[j]] = ctObj[tempWord[j]] || 0;
          ctObj[tempWord[j]]++;
        }
        for (var key in ctObj) {
          if (ctObj.hasOwnProperty(key)) {
              if (ctObj[key] > maxCt) {
                  maxCt = ctObj[key];
                  maxWord = tempWord;
              }
          }
        }
    }
      
    if (maxCt === 1) {
        return -1;
    } else {
        return maxWord;
    }
}


