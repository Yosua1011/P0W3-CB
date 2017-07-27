function calculateMedian(arr) {
	len = arr.length;
	// if (len % 2 === 1) {
	// 	medpos = len / 2;
	// 	medposbul = Math.floor(medpos);
	// 	median = arr[medposbul];
	// } else if (len % 2 === 0) {
	// 	medpos = len / 2;
	// 	medposbul = Math.floor(medpos);
	// 	median = (arr[medposbul] + arr[medposbul-1])/2;
	if (len % 2 === 1) {
		return arr[((len-1)/2)];
	} else if (len % 2 === 0) {
		return ((arr[len/2]+arr[(len/2)-1])/2);
	}	
	return median;
}

console.log(calculateMedian([1,3,5]));
console.log(calculateMedian([1,3,5,7]));