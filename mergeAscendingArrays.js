// a = [1,3,4,7] and  b = [2,5,6] should return [1, 2, 3, 4, 5, 6, 7]
//
// Write a function that merges 2 lists in ascending order.
// 
// Arrays might be empty but will be sorted. Return an array.
// 

function mergeAscendingArrays(a, b) {
    var aIndex = 0;
    var bIndex = 0;
    var sortedArr = [];

    // error testing 
    if (a.length == 0) {
        return b;
    }
    else if (b.length == 0) {
        return a;
    }
    // both have elements
    while ((aIndex < a.length) && (bIndex < b.length)) {
        if (a[aIndex] <= b[bIndex]) {
            sortedArr.push(a[aIndex]);
            aIndex++;
        }
        else {
            sortedArr.push(b[bIndex]);
            bIndex++;
        }
    }
    // a has elements
    while (aIndex < a.length) {
        sortedArr.push(a[aIndex]);
        aIndex++;
    }  
    // b has elements
    while (bIndex < b.length) {
        sortedArr.push(b[bIndex]);
        bIndex++;
    } 
    return sortedArr;
}

// Solution: Assuming both arrays have elements, start by comparing the first element
// of array A to the first element of array B. Add whichever element is lower to the result
// array and increment the iterator of the array from which you took the element. Continue 
// until one of the arrays runs out of elements to compare. Then take the remainder of the 
// array that still has elements and add it to the end of the result array.