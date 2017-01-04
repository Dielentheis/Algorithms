// Given an arrayOfInts, find the highestProduct you can get from three of the integers.

function highestProduct(ints) {
	if (ints.length < 3) {
		return false;
	}

	// either want 2 negatives and a positive or 3 positives
	var highest = ints[0];
	var secondHighest = ints[1];
	var thirdHighest = ints[2];
	var lowestNeg = ints[1];
	var secondLowestNeg = ints[2];

	for (var i = 1; i < ints.length; i++) {
		if (ints[i] < 0) {
			if (ints[i] < lowestNeg) {
				secondLowestNeg = lowestNeg;
				lowestNeg = ints[i];
			}
			else if (ints[i] < secondLowestNeg) {
				secondLowestNeg = ints[i];
			}
		}
		else { // if element > 0
			if (ints[i] > highest) {
				thirdHighest = secondHighest;
				secondHighest = highest;
				highest = ints[i];
			}
			else if (ints[i] > secondHighest) {
				thirdHighest = secondHighest;
				secondHighest = ints[i];
			}
			else if (ints[i] > thirdHighest) {
				thirdHighest = ints[i];
			}
		}
	}

	return Math.max((highest * secondHighest * thirdHighest), (highest * lowestNeg * secondLowestNeg));
}
