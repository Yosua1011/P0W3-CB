function ArrayAdditionI(arr) {
	arr.sort(function(a,b){return a-b});
	var maxNum = arr.pop();
	var tot = 0;

	for (i = 0; i < arr.length; i++) {
		tot += arr[i];
		for (j = 0; j < arr.length; j++) {
			if (i !== j) {
				tot += arr[j];
				if (tot == maxNum) {
					return true;
				}
			}
		}
// Lintang was here Muahahahahahahahah
		for (k = 0; k < arr.length; k++) {
			if (i != k) { //Are you sure?
				tot -= arr[k];
				if (tot == maxNum) {
					return true;
				}
			}
		}
		tot = 0;
	}
	return false;
}

ArrayAdditionI(readline());