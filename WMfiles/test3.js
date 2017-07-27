function alayer(str) {
	alpha = ['a', 'i', 'u', 'e', 'o']
	rev = '';
	
	for (i=0; i < str.length; i++) {
		flag = false;
		for (j=0; j < alpha.length; j++) {
		if (str[i] === alpha[j]) {
			rev += str[i].toUpperCase();
			flag = true;
		} 
	}
		if (flag == false) {
			rev += str[i].toLowerCase();
		}
	}
	return rev;
	
// 	var newStr = '';
// 	var panjang = str.length;
// 	for (i=0; i < panjang; i++) {
// 		if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o') {
// 			var gede = str[i].toUpperCase();
// 			newStr += gede;
// 		} else {
// 			var kecil = str[i].toLowerCase();
// 			newStr += kecil;
// 		}
// 	}
// 	return newStr;
// }

console.log(alayer('john doe'));


