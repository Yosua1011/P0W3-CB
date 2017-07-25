function FirstFactorial(num) { 
    if (num === 0) {
        return 1;
    }
    return num*FirstFactorial(num-1);

}
   
// keep this function call here 
FirstFactorial(readline());

// 1. For the input "this is some sort of sentence" your output was incorrect. The correct answer is sentence.
// 2. For the input "coderbyte" your output was incorrect. The correct answer is coderbyte.
// 3. For the input "a b c dee" your output was incorrect. The correct answer is dee.