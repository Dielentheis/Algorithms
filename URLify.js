// Write a method to replace all spaces in a string with %20. You may assume that
// the string has sufficient space at the end to hold the additional characters,
// and that you are given the “true” length of the string.

function URLify(str) {
	str = str.trim().replace(/\s/g, '%20');
	return str;
}

// Solution: Trim the whitespace off the string and then replace every whitespace
// character with '%20'.