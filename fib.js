// fibonacci, iteratively and recursively

function FibCalc() {
	this.memo = {};
}

FibCalc.prototype.fib = function(n) {
	if (n < 0) {
		throw new Error("No! Please!");
	}

	if (n === 1 || n === 0) {
		return n;
	}

	// if it's already been calculated, take from memoized calculations
	if (this.memo.hasOwnProperty(n)) {
		return this.memo[n];
	}

	var result = this.fib(n - 1) + this.fib(n - 2);

	// store result so we don't have to calculate it again
	this.memo[n] = result;

	return result;
}
