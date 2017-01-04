// find the longest path between two nodes in a binary tree

function longestPath(root) {
	if (!root) {
		return 0;
	}

	// 3 cases: either the longest path is height of the right subtree + height of the left subtree,
	// or the longest path exists in either the right subtree or left subtree
	return Math.max((findHeight(root.right) + findHeight(root.left) + 2),
					longestPath(root.right), longestPath(root.left));
}

function findHeight(node) {
	// base case
	if (!node) {
		return 0;
	}

	// recursive case
	return 1 + Math.max(findHeight(node.right), findHeight(node.left));
}
