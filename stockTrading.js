// Write an efficient function that takes stockPricesYesterday and returns the
// best profit I could have made from 1 purchase and 1 sale of 1 stock yesterday.

function stockTrading(prices) {
	var min = prices[0];
	var maxProfit = prices[1] - prices[0];

	for (var i = 1; i < prices.length; i++) {
		if (prices[i] - min > maxProfit) {
			maxProfit = prices[i] - min;
		}
		if (prices[i] < min) {
			min = prices[i];
		}
	}
	return maxProfit;
}
