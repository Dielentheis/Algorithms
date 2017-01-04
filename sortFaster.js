// Write a function that takes:
// - an array of unsortedScores
// - the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n log n) time.

function returnSortedScores(unsortedScores, highestPossibleScore) {
	var scoreMap = Array(highestPossibleScore).fill(0);
	var sortedScores = [];

	unsortedScores.forEach(function(score) {
		scoreMap[score]++;
	});

	for (var i = 0; i < scoreMap.length; i++) {
		if (scoreMap[i] > 0) {
			for (var j = 0; j < scoreMap[i]; j++) {
				sortedScores.push(i);
			}
		}
	}

	return sortedScores;
}
