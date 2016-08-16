// Write a ShuffleMerge() function that takes two lists and merges their nodes together
// to make one list, taking nodes alternately between the two lists. So ShuffleMerge()
// with 1 -> 2 -> 3 -> null and 7 -> 13 -> 1 -> null should yield 1 -> 7 -> 2 -> 13 -> 3 -> 1 -> null. 

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function shuffleMerge(first, second) {

  if (first != null) { // as long as there's something in first list,
      var head = new Node(first.data); // make head of list with data property of 1st item in 1st list
      var newList = head; //set newList to head
  }
  else { // if there's nothing in the first list, you can just return the second
      return second; // if both lists are null, null will be returned
  }
  
  first = first.next;
  while ((first != null) || (second != null)) { // as long as one list is still valid
      if (second != null) { // if second list isn't null (because already took first element from first list),
          newList.next = new Node(second.data); // make newList's current node point to a new node with second list's data
          second = second.next; // go to next item in second list
          newList = newList.next; // move to next node in the list (the one that was just made)
      }
      if (first != null) {
          newList.next = new Node(first.data);
          first = first.next;
          newList = newList.next;
      }
  }
  return head;
}

// Solution: Assuming both lists have elements, add the first element from the first list to the result
// list and iterate to the next Node of the list from which you took the element. Then take the first
// Node of the second list. Continue until one of the lists runs out of elements. Then take the remainder of the 
// list that still has elements and add it to the end of the result list.