// Problem: 2d array, filled with "land" and "water". Find biggest island.

function biggestIsland(arr) {
	var biggest = 0;

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i][j] == "L") {
				var islandSize = findIslandSize(arr, i, j);
				if (islandSize > biggest) {
					biggest = islandSize;
				}
			}

		}
	}
	console.log("The biggest island's size is " + biggest + ".");
}


function findIslandSize(arr, i, j) {
	// keeping within bounds of 2D array
	if((i < 0) || (j < 0) || (i >= arr.length) || (j >= arr[i].length)) {
		return 0;
	}
	else if (arr[i][j] == "L") {	
		arr[i][j] = "C";
		return 1 + findIslandSize(arr, i + 1, j) + findIslandSize(arr, i, j + 1) +
					findIslandSize(arr, i - 1, j) + findIslandSize(arr, i, j - 1);
	}
	return 0;
}


// Test Case
var map = [['L', 'L', 'L', 'W', 'W', 'W', 'W', 'W', 'W', 'L', 'L'],
		   ['L', 'L', 'W', 'W', 'W', 'W', 'W', 'W', 'L', 'L', 'L'],
		   ['L', 'W', 'W', 'W', 'W', 'L', 'W', 'W', 'L', 'L', 'L']];
biggestIsland(map);
// result should be 8