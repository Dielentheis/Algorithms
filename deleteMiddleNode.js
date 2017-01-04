// Delete Middle Node: Implement an algorithm to delete a node in the middle
// (i.e. any node but the first or last node, not necessarily the exact middle) of a singly
// linked list, given only access to that node. Example: input is the node c in the list
// a → b → c → d → e →  f, nothing is returned but the linked list now looks like a → b → d → e → f.
// 

function deleteMiddleNode(node) {
	if (!node || !node.next) {
		return false;
	}
	nextNode = node.next;
	node.data = nextNode.data;
	node.next = nextNode.next;
	return true;
}
