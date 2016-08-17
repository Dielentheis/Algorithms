// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function isUnique(str) {
	for (var i = 0; i < str.length; i++) {
		var isAnother = str.indexOf(str[i], i + 1);
		if (isAnother != -1) {
			return false;
		}
	}
	return true;
}

// Solution: For each character in the string, see if there is another
// using indexOf. If there is another, you know that the string is not
// unique.
