// Given an n x m matrix, print the diagonals of the matrix.
//
// For example, for the matrix
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
//
// you should print:
// 3
// 2 6
// 1 5 9
// 4 8
// 7

// [[1, 2, 3, 4],
//  [6, 7, 8, 9]]

function printDiag(matrix) {
    // error testing
    if (matrix.length == 0) {
        return;
    }
    // start along first row
    for (var i = matrix[0].length - 1; i >= 0; i--) {
        // starting points
        var row = 0;
        var column = i;
        
        // print remaining diagonals
        while ((row < matrix.length) && (column < matrix[row].length)) {
            console.log(matrix[row][column]);
            row++;
            column++;
        }
    }
    // start along first column
    for (var i = 1; i < matrix.length; i++) {
        var row = i;
        var column = 0;
        // print remaining diagonals
        while ((row < matrix.length) && (column < matrix[row].length)) {
            console.log(matrix[row][column]);
            row++;
            column++;
        }
    }
}

// Solution: Start at the last index of the first row. From there, iterate backwards
// and for each number, print the diagonals by going down one row and to the right one
// column, keeping within the bounds of the matrix. This doesn't account for any
// diagonals that start below the first row, so then iterate down the first column
// (skipping the first row) and print the diagonals in the same way as before.