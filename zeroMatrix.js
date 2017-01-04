// Zero Matrix: Write an algorithm such that if an element in an MxN
// matrix is 0, its entire row and column are set to 0.

// Ex - this: 
// [[1,   2,  3,  4,  5,  6],
//  [6,   7,  0,  8,  9, 10], 
//  [11, 12, 13, 14, 15, 16]]
//
// should become this: 
// [[1,   2,  0,  4,  5,  6],
//  [0,   0,  0,  0,  0,  0], 
//  [11, 12,  0, 14, 15, 16]]

function zeroMatrix(matrix) {
	var rowsToChange = [];
	var columnsToChange = [];

	// iterates through matrix and when it finds a 0 it stores the row and column
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] == 0) {
				rowsToChange.push(i);
				columnToChange.push(j);
			}
		}
	}
	// change rows
	for (var i = 0; i < rowsToChange.length; i++) {
		for (var c = 0; c < matrix[0].length; c++) {
			matrix[rowsToChange[i]][c] = 0;
		}
	}
	// change columns
	for (var i = 0; i < columnsToChange.length; i++) {
		for (var r = 0; r < matrix.length; r++) {
			matrix[r][columnsToChange[i]] = 0;
		}
	}
	return matrix;
}
