function factorial(num) {
	if(num === 0) {
		return 1;
	} 

	return num * factorial(num-1);
}

console.log(factorial(5));

function factorial2(num1, num2) {
	if(num1 >= 1) {
		return num1 * factorial2((num1-num2),num2);
	} else {
		return 1;
	}
}

console.log(factorial2(12,5));