// Given two strings, write a method to decide if one is a permutation
// of the other.

function checkPermutations(str1, str2) {
	var arr1 = [];
	var arr2 = [];

	if (str1.length !== str2.length) {
		return false;
	}

	for (var i = 0; i < str1.length; i++) {
		arr1.push(str1[i]);
	}
	for (var j = 0; j < str2.length; j++) {
		arr2.push(str2[j]);
	}

	arr1.sort();
	arr2.sort();

	for (var k = 0; k < arr1.length; k++) {
		if (arr1[k] !== arr2[k]) {
			return false;
		}
	}
	return true;
}

// Solution: Ensure the strings are the same length. Then convert each string into
// an array. Sort both arrays and compare elements one at a time. If any elements of
// x index in each array do not match, return false.