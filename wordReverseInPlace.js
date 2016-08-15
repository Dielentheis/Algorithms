// Problem: reverse the words in an array in place

function reverseInPlace(str) {
	var lIndex = 0;
	var rIndex = str.length - 1;
	// reverses entire array
	str = reverseSegment(str, lIndex, rIndex);

	while (lIndex < str.length - 1) {
		// first 'if' statement handles the case of the first word
		if (lIndex == 0) {
			rIndex = lIndex + 1;
			while ((str[rIndex] != " ") && (rIndex < str.length)) {
				rIndex++;
			}
			reverseSegment(str, lIndex, rIndex - 1);
		}
		
		if (str[lIndex] == " ") {
			rIndex = lIndex + 1;
			while ((str[rIndex] != " ") && (rIndex < str.length)) {
				rIndex++;
			}
			reverseSegment(str, lIndex + 1, rIndex - 1);
		}
		lIndex++;
	}
	return (str.join(''));
}

function reverseSegment(str, lIndex, rIndex) {

	console.log(str, lIndex, rIndex);

	for (var i = lIndex; i < rIndex; i++) {
		var temp = str[i];
		str[i] = str[rIndex];
		str[rIndex] = temp;
		rIndex--;
	}
	return str;
}

var testArr = ['t', 'h', 'e', ' ', 'w', 'o', 'm', 'a', 'n', ' ', 'a', 't', 'e', ' ',
			   'l', 'o', 'v', 'e', 'l', 'y', ' ', 'p', 'i', 'g', 's'];
// result should be "pigs lovely ate woman the"

// Solution: Reverse the entire array, then reverse each word one at a time.