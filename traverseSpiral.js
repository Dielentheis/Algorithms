// objective: given a 2D array nxn, print the numbers in a spiral order.
// ex:  1  2  3
//		4  5  6
//		7  8  9   should become [1, 2, 3, 6, 9, 8, 7, 4, 5]
//
function traverseSpiral(arr) {
var resultArr = [];
	var leftBoundary = 0;
	var rightBoundary = arr.length;
	var bottomBoundary = arr.length;
	var topBoundary = 0;
	var currRow = 0;
	var currColumn = -1;
	
	if (arr.length == 1 && typeof arr[0][0] == 'number') {
		  return [arr[0][0]];
	}
	while ((rightBoundary > leftBoundary) && (topBoundary < bottomBoundary)) {
		// left to right
		for (var i = leftBoundary; i < rightBoundary; i++) {
			if (arr[currRow][i]) {
				resultArr.push(arr[currRow][i]);
			}
			currColumn++;
		}
		++topBoundary;
		// top to bottom
		for (var i = topBoundary; i < bottomBoundary; i++) {
			if (arr[i][currColumn]) {
				resultArr.push(arr[i][currColumn]);
			}
			currRow++;
		}
		--rightBoundary;
		// right to left
		for (var i = rightBoundary - 1; i >= leftBoundary; i--) {
			if (arr[currRow][i]) {
				resultArr.push(arr[currRow][i]);
			}
			currColumn--;
		}
		--bottomBoundary;
		// bottom to top
		for (var i = bottomBoundary - 1; i >= topBoundary; i--) {
			if (arr[i][currColumn]) {
				resultArr.push(arr[i][currColumn]);
			}
			currRow--;
		}
		++leftBoundary;
	}
	return resultArr;
}

// Solution: As the algorithm travels through the 2D array, it adjusts the boundaries that indicate
// which cells should be printed.
