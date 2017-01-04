// Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.
// Assume ranges are sorted in increasing order by their startTime value.
// {startTime: x, endTime: y}

function mergeRanges(arr) {
	var result = [];
	var currentRange = arr[0];

	for (var i = 0; i < arr.length; i++) {
		var comparing = arr[i];
		if (currentRange.endTime >= comparing.startTime) { // if overlap
			if (currentRange.endTime < comparing.endTime) { // partial overlap
				currentRange.endTime = comparing.endTime;
			}
		}
		else { // if no overlap
			result.push(currentRange);
			currentRange = comparing;
		}
	}

	result.push(currentRange);
	return result;
}

// cases:
// no overlap
// some overlap
// complete overlap/containment
// {1, 3} {2, 3} {5, 8}
