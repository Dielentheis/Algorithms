// Problem: "My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each
// month a list with the weights of members is published and each month he is the last on the list
// which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry anymore, I will modify the
// order of the list". It was decided to attribute a "weight" to numbers. The weight of a number
// will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come
// before 99. Given a string with the weights of FFC members in normal order, can you give this string
// ordered by "weights" of these numbers?"

function orderByWeight(str) {
    var arr = str.split(' ');
    var tupleArr = arr.map(function(weight) {
        var weightArr = weight.split('');
        var weightSum = 0;
        for (var i = 0; i < weightArr.length; i++) {
          weightSum += parseInt(weightArr[i]);
        }
        return [weightSum, weight];
     });

    tupleArr.sort(function(a, b) { 
        if (a[0] === b[0]) {
            if (a[1] > b[1]) {
                return 1;
            }
            else {
                return -1;
            }
        } else {
            return a[0] - b[0];
        }
    });

    var sorted = [];
    for (var i = 0; i < tupleArr.length; i++) {
        sorted.push(tupleArr[i][1]);
    }
    return sorted.join(" ");
}

// Solution: Create an array where each element is an array which has the new weighted number in index 0
// and the original weight number in index 1. Then sort this array of tuples by the weighted number in 
// index 0, and if there are duplicates, order them by string order. Then collect all of the 1st indexes
// into a new array and join them with a space, creating a list of weights.
