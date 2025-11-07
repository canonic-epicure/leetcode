function maxProfit(prices: number[]): number {
    let max_profit_global = 0

    let start_at = 0
    let start_price = prices[0]
    let profit = 0
    let max_profit = 0

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i]
        const delta = price - prices[i - 1]
        profit += delta

        if (profit > max_profit) {
            max_profit = profit

            if (max_profit > max_profit_global) {
                max_profit_global = max_profit
            }
        }

        if (profit < 0) {
            profit = 0
            start_at = i
            start_price = price
        }
    }

    return max_profit_global
};