// Return Nth to Last: Implement an algorithm to find the nth to last element of a singly linked list.
// Node has properties 'data' and 'next'

function nthToLast(head, n) {
	var left = head;
	var right = head;
	
	if (n < 1) {
		return false;
	}

	for (var i = 0; i < n - 1; i++) {
		right = right.next;
	}

	while (right.next !== null) {
		left = left.next;
		right = right.next;
	}
	return left.data;
}

// test case:
// console.log(nthToLast({data: 1, next: {data: 2, next: {data: 3, next: {data: 4, next: {data: 5, next: null}}}}}, 0));