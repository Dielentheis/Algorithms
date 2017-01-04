// Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).
// A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.

function isSuperbalanced(root) {
	var maxAndMinDepth = findMinAndMaxDepth(root);

	return maxAndMinDepth[0] - maxAndMinDepth[1] < 2;
}

// note: could be slightly improved by using DFS (a stack) instead of BFS/queue.
function findMinAndMaxDepth(root) {
	var queue = [];
	var minDepth = null;
	var maxDepth = 0;

	queue.push({node: root, depth: 0});

	while (queue.length > 0) {
		var nodeObj = queue.shift();
		var node = nodeObj.node;
		var depth = nodeObj.depth;

		if (!node.left && !node.right) {
			if (!minDepth) {
				minDepth = depth;
			}
			else if (depth > maxDepth) {
				maxDepth = depth;
			}
			else if (depth < minDepth) {
				minDepth = depth;
			}
		}
		else {
			if (node.left) {
				queue.push({node: node.left, depth: depth + 1});
			}
			if (node.right) {
				queue.push({node: node.right, depth: depth + 1});
			}
		}
	}

	return [maxDepth, minDepth];
}
