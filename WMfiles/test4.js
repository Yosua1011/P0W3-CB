// function vowelFirst(str) {
// 	var pisah = str.split('');
// 	var vowel = '';
// 	var consonant = '';
// 	for (i=0; i < pisah.length; i++) {
// 		if (pisah[i] === 'a' || pisah[i] === 'i' || pisah[i] === 'u' || pisah[i] === 'e' || pisah[i] === 'o') {
// 			vowel += pisah[i];
// 		} else if (pisah[i] ===  ' ') {
			
// 		} 
// 		else {
// 			consonant += pisah[i];
// 		}
// 	}
// 	return vowel + consonant;
// }
function vowelFirst(str) {
	var pisah = str.split('');
	var vowel = '';
	var consonant = '';
	for (i=0; i < pisah.length; i++) {
		if (pisah[i] === 'a' || pisah[i] === 'i' || pisah[i] === 'u' || pisah[i] === 'e' || pisah[i] === 'o') {
			vowel += pisah[i];
		} else if (pisah[i] !==  ' ') {
			consonant += pisah[i];
		} 
	}
	return vowel + consonant;
}

console.log(vowelFirst('john doe'));