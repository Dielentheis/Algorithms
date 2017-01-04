// reverse a linked list in place

function reverseLL(head) {
	var iter = head;
	var prev = null;

	if (!iter || !iter.next) {
		return iter;
	}

	while (iter) {
		var next = iter.next;
		iter.next = prev;
		prev = iter;
		iter = next;
	}

	return prev;
}

var test = {data: 1, next: {data: 2, next: {data: 3, next: null}}}
