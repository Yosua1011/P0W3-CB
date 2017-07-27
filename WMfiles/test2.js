function reverser(str) {
	var len = str.length;
	var newStr = '';
	for (i=(len-1); i >=0 ; i--) {
		newStr += str[i];
	}

	return newStr;

}

console.log(reverser('john doe'));