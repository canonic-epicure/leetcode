function maxProfit(prices: number[]): number {
    let total_profit = 0

    let start_price = prices[0]
    let profit = 0
    let max_profit = 0

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i]
        const delta = price - prices[i - 1]

        if (profit + delta < max_profit) {
            total_profit += max_profit
            max_profit = 0
            profit = 0
            start_price = price
            continue
        }

        profit += delta

        if (profit > max_profit) {
            max_profit = profit
        }
    }

    total_profit += max_profit

    return total_profit
};

export {}