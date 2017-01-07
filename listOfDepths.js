// given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth

function listOfDepths(root, linkedListArr, level) {
	var list;

	if (root === null) {
		return;
	}

	if (!linkedListArr[level]) {
		list = new LLNode(root.data);
	}
	else {
		list = linkedListArr[level];
		addToTail(linkedListArr[level], root.data);
	}

	listOfDepths(root.left, linkedListArr, level + 1);
	listOfDepths(root.right, linkedListArr, level + 1);
}

function LLNode(data) {
	this.data = data;
	this.next = null;
}

function addToTail(head, data) {
	var iter = head;

	while (iter.next !== null) {
		iter = iter.next;
	}

	iter.next = new LLNode(data);
}
