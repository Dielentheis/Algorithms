// Find the length of the longest palindrome in a string.
// Ex. "I love racecars and racecars love me" should yield 7.

longestPalindrome = function(s){
    var longest = 0;
    for (var i = 0; i < s.length; i++) {
        var temp = Math.max(checkLength(s, i, i), checkLength(s, i, i + 1));
        if (temp > longest) {
            longest = temp;
        }
    }
    return longest;
}

function checkLength(s, lower, upper) {
    var longest = 0;

    while ((upper < s.length) && (lower >= 0)) {
        if (s[upper] == s[lower]) {
            longest = upper - lower + 1;
            lower--;
            upper++;
        }
        else {
            return longest;
        }
    }
    return longest;
}

// Solution: Iterate through the string one letter at a time. For each letter,
// check if it's a palindrome by checking if the letters on either side of the 
// selected letter are the same and move outwards. In case the palindrome is an
// even number, compare the selected letter to the element to the right and move
// outwards from there. Find the maximum of these two cases, then store the max as
// the largest if it's larger than the current largest.
