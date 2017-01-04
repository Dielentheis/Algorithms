// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I
// didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the
// beginning and did the same thing until I reached the page I started at.
// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end,
// and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated."
// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary.
// This array is huge (there are lots of words I don't know) so we want to be efficient here.


// binary search!
function findRotation(arr) {
	var leftIndex = 0;
	var rightIndex = arr.length - 1;

	while (rightIndex > leftIndex) {
		var guessIndex = Math.floor(leftIndex + ((rightIndex - leftIndex) / 2)); // midpoint between left and right
		if (arr[guessIndex] < arr[0]) { // if guess is less than the first word we know that everything to the right of the guess is also less than the first word, hence the rotation is to the left
			leftIndex = guessIndex;
		}
		else {
			rightIndex = guessIndex;
		}

		if (leftIndex + 1 === rightIndex) {
			break;
		}
	}

	return rightIndex;
}
