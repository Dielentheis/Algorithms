// An Arithmetic Progression is defined as one in which there is a constant 
// difference between the consecutive terms of a given series of numbers. You are 
// provided with consecutive elements of an Arithmetic Progression. There is 
// however one hitch: Exactly one term from the original series is missing from 
// the set of numbers which have been given to you. The rest of the given series 
// is the same as the original AP. Find the missing term.

// You have to write the function findMissing; the list will always be at least
// 3 numbers. The missing term will never be the first or last one.

function findMissing(arr) {
	var step = (arr[arr.length - 1]) - arr[0] / (arr.length);

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] != arr[i-1] + step) {
			return arr[i-1] + step;
		}
	}
}

// Solution: Find the step between each element by subtracting the first element from
// the last element and dividing by the length of the array. Then iterate through the
// array and check if the current element is equal to the previous element plus the
// step. If not, you've found the missing term.

