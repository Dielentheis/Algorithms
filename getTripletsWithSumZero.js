// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array who give the sum of zero.
// Notes:
//   Elements in a triplet (a,b,c) must be in non-descending order. (ie, a leq b leq c)
//   The solution set must not contain duplicate triplets.
// 
// [-3, -2, -1, 1, 2, 3] should yield [[-3, 1, 2], [-2, -1, 3]]


function getTripletsWithSumZero(arr) {
    if (arr.length < 3) {
        return;
    }
    arr.sort();
  
    var triplets = [];
    for (var left = 0; left < arr.length - 3; left++) {
        var mid = left + 1;
        var right = arr.length - 1;
        
        while (mid < right) {
            var sum = arr[left] + arr[mid] + arr[right];
            if (sum == 0) {
                var nums = [arr[left], arr[mid], arr[right]];
                triplets.push(nums);
                mid++;
                right--;
            }
            else if (sum > 0) {
                mid++;
            }
            else if (sum < 0) {
                right--;
            }
        }
    }
    return triplets;
}

// Solution: First, sort the array. From there, use three iterators (left, middle, and right).
// Initialize the left iterator to first element in the array, the middle iterator to the element after
// the left iterator, and the right iterator to the last element in the array. Then, while the left
// iterator is more than 2 elements from the end of the array (because we need three elements to make
// a triplet). If sum is less than 0, decrement the right iterator, and if it's greater, increment
// the middle iterator. If the sum of the three elements indicated by the iterators is equal to zero,
// put them in an array and then push that array into the solution array.