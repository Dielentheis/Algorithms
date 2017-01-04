// find the second largest value in a binary search tree

function findSecondLargest(root) {
	var current = root;

	while (current) {
		if (current.left && !current.right) {
			// current node would be the biggest node, so we can send left to findLargest
			return findLargest(current.left);
		}

		// checks if current is parent of largest
		if (current.right && !current.right.right && !current.right.left) {
			return current.value;
		}

		current = current.right;
	}
}

function findLargest(root) {
	var current = root;
	if (!current.right) {
		return current.value;
	}

	while (current.right) {
		current = current.right;
	}

	return current.value;
}
