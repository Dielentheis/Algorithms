// String Rotation: Assume you have a method isSubstring which checks if one
// word is a substring of another. Given two strings, s1 and s2, write code
// to check if s2 is a rotation of s1 using only one call to isSubstring.
// (ex; ‘waterbottle’ is a rotation of ‘erbottlewat’)

function stringRotation(str1, str2) {
	if (str1.length != str2.length) {
		return false;
	}
	str2 += str2;
	
	// checking if str2 contains str1
	if (isSubstring(str2, str1)) {
		return true;
	}
	else {
	 	return false;
	}
}

// wrote isSubstring for ease of testing
function isSubstring(str2, str1) {
	return str2.includes(str1);
}
