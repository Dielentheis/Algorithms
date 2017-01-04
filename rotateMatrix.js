// Given an image represented by an NxN matrix, where each pixel in the
// image is 4 bytes, write a method to rotate the image by 90 degrees.
// Can you do this in place?
//
// Example - this: 
// [ [ 1,   2,   3,   4 ],
//  [ 5,   6,   7,   8 ],
//  [ 9,  10,  11,  12 ],
//  [ 13, 14,  15,  16 ] ]
//
// should become this: 
// [ [ 13,  9, 5, 1 ],
//   [ 14, 10, 6, 2 ],
//   [ 15, 11, 7, 3 ],
//   [ 16, 12, 8, 4 ] ]

function rotateMatrix(matrix) {
	// n is the length of each array in matrix
	var n = matrix[0].length;
	
	var newMatrix = new Array(n);
	for (var i = 0; i < n; i++) {
		newMatrix[i] = new Array(n);
	}

	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			newMatrix[j][i] = matrix[i][j];
		}
	}
	
	for (var i = 0; i < n; i++) {
		newMatrix[i].reverse();
	}
}

// Solution: Transpose the matrix and then reverse each row.

// In-place solution
function rotateMatrixInPlace(matrix) {
	var n = matrix[0].length;
	var top = 0;
	var left = 0;
	var right = n - 1;
	var bottom = n - 1;
	
	while (top < bottom) {
		var LtoRCol = left;
		var LtoRRow = top;
		var TtoBRow = top;
		var TtoBCol = right;
		var RtoLCol = right;
		var RtoLRow = bottom;
		var BtoTCol = left;
		var BtoTRow = bottom;
	
		for (var i = 0; i < (bottom - top); i++) {
			// on first pass, these temps select the corner elements
			var tempA = matrix[LtoRRow][LtoRCol];
			var tempB = matrix[TtoBRow][TtoBCol];
			var tempC = matrix[RtoLRow][RtoLCol];
			var tempD = matrix[BtoTRow][BtoTCol];

			matrix[TtoBRow][TtoBCol] = tempA;
			matrix[RtoLRow][RtoLCol] = tempB;
			matrix[BtoTRow][BtoTCol] = tempC;
			matrix[LtoRRow][LtoRCol] = tempD;

			LtoRCol++;
			TtoBRow++;
			RtoLCol--;
			BtoTRow--;
		}
		top++;
		bottom--;
		left++;
		right--;
	}
	return matrix;
}

// Solution: Perform a 4-way swap with all corners, and then continue down
// their respective vertices with 4-way swaps.

