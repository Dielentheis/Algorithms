// Palindrome Permutation: Given a string, write a function to check if it is a
// permutation of a palindrome. (Ex: input Tact Coa, outpue: true (taco cat))

function palindromePermutation(str) {
	var letterArr = [];
	var uniqueCount = 0;
	var j = 0;
	for(var i = 0; i < str.length; i++) {
		letterArr.push(str[i]);
	}
	letterArr.sort();
	while (j < letterArr.length) {
		if (letterArr[j] == letterArr[j + 1]) {
			j += 2;
		}
		else {
			uniqueCount++;
			j += 1;
		}
	}
	if (uniqueCount > 1) {
		return false;
	}
	return true;
}

// Solution: Convert the string into an array of characters and then sort the array.
// Then, ensure that there is a maximum of one unique letter.