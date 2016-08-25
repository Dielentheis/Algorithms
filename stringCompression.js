// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3. If the compressed string would not
// become smaller than the original string, your method should return the original string.
// You can assume the string had only upper and lowercase letters.

function stringCompression(str) {
	var newStr = compressor(str);
	if (newStr.length < str.length) {
		return newStr;
	}
	else {
		return str;
	}
}

function compressor(str) {
	newStr = '';
	for (var i = 0; i < str.length; i++) {
		var numCount = 1;
		var letter = str[i];
		while (str[i] == str[i + 1]) {
			numCount++;
			i++;
		}
		newStr += letter + numCount;
	}
	return newStr;
}
