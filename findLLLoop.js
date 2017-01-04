// Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop

function findLoop(head) {
	var slow = head;
	var fast = head;

	// because fast will move 2 spots at a time, we have to check both
	// when the loop is exited (via break), fast and slow will be the same
	while (fast !== null && fast.next !== null) {
		if (fast == slow) {
			break;
		}
		else {
			fast = fast.next.next;
			slow = slow.next;
		}
	}
	
	slow = head;

	while (slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow.data;
}
