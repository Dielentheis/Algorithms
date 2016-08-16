// Every positive integer can be uniquely represented as a sum of
// different powers of two. Given a number n, return a sorted array
// of different powers of two that add up to n.
//
// Constraints: 4 < n < 6000

function powersOfTwo(n) {
	var powerArr = [];
	for (var i = 12; i >= 0; i--) {
		if (n >= Math.pow(2, i)) {
			n = n - Math.pow(2, i);
			powerArr.unshift(Math.pow(2, i));
		}
	}
	return powerArr;
}

// Solution: Find the power of 2 that is closest to the highest possible value of n
// without going over (in this case, it's 2^12). Start at 2^12 and iterate downwards; for
// each power of two, check if n is greater than it. If it is, push that 2^x into beginning
// of the result array and subtract that 2^x from n. 