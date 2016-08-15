// Implement both the iterative and recursive functions that output
// the nth value of the fibonacci sequence .
// 
// Example: 
// 1 1 2 3 5 8 13 
// fib(1) -> 1
// fib(2) -> 1
// fib(3) -> 2
// fib(4) -> 3
// if n < 1, return -1

function fib(n) {
    // base case(s) / error checking
    if (n < 0)  {
        return -1;
    }
    else if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    // recursive
    return fib(n - 1) + fib(n - 2);
}

// iterative version
function fib(n) {
    if (n <= 0) {
        return 0;
    }
    var a = 0;
    var b = 1;
    for (var i = 2; i < n + 1; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}