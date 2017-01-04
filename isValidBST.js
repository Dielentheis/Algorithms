// Write a function to check that a binary tree ↴ is a valid binary search tree.
// .left is lower, .right is higher
// each node must be greater than any node it is in the right subtree of, and less than any node it is in the left subtree of.

function isValidBST(root) {
	var stack = [];

	stack.push({node: root, upperBound: Infinity, lowerBound: -Infinity});

	while (stack.length) {
		var nodeInfo = stack.pop();
		var lowerBound = nodeInfo.lowerBound;
		var upperBound = nodeInfo.upperBound;
		var node = nodeInfo.node;

		if (node.data < lowerBound || node.data > upperBound) {
			return false;
		}
		else { // we now know it's a valid node
			if (node.right) { // for right we know that the node can still get higher, but shouldn't be any lower. so we leave upperBound as it is, but modify lowerBound.
				stack.push({node: node.right, upperBound: upperBound, lowerBound: node.data});
			}
			if (node.left) { // likewise we know the node can get lower but cannot be any higher than the current node.
				stack.push({node: node.left, upperBound: node.data, lowerBound: lowerBound});
			}
		}
	}

	return true;
}
