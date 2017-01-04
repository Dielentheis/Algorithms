// Write a function that takes an unsigned integer and returns the number of 1 bits it has.

// Example:

// The 32-bit integer 11 has binary representation

// 00000000000000000000000000001011
// so the function should return 3.

function findNum1Bits(num) {
	var highestPow = Math.floor(Math.log2(num));
	var num1Bits = 0;

	for (var i = highestPow; i >= 0; i--) {
		if (num >= Math.pow(2, i)) {
			num -= Math.pow(2, i);
			num1Bits++;
		}
	}

	return num1Bits;
}
