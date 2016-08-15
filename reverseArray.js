// Reverse an array without using .reverse(), both in place and not.

function reverseArray(arr) {
	var newArr = [];
	while (arr.length > 0) {
		newArr.push(arr.pop());
	}
  return newArr;
}

function reverseArrayInPlace(arr) {
	var right = arr.length - 1;
	var left = 0;
	var temp;

	while (right > left) {
		temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
		left++;
		right--;
	}
  return arr;
}