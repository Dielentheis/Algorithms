// Given two strings, a and b, that may or may not be of the same length, determine the minimum
// number of character deletions required to make a and b anagrams. Any characters can be deleted
// from either of the strings. Strings will be made up of lowercase letters, a-z. 

function findNumDeletions(str1, str2) {
	var str1Freqs = Array(26).fill(0);
	var str2Freqs = Array(26).fill(0);
	var numDeletions = 0;

	for (var i = 0; i < str1.length; i++) {
		var index1 = str1[i].charCodeAt(0) - 97;
		str1Freqs[index1]++;
	}

	for (var j = 0; j < str2.length; j++) {
		var index2 = str2[j].charCodeAt(0) - 97;
		str2Freqs[index2]++;
	}

	for (var k = 0; k < 26; k++) {
		var diff = Math.abs(str1Freqs[k] - str2Freqs[k]);
		numDeletions += diff;
	}

	return numDeletions;
}
