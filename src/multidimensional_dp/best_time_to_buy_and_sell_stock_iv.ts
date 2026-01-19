function maxProfit(k: number, prices: number[]): number {
    const profit = Array.from({ length : k + 1 }, () => new Array(prices.length).fill(0))

    for (let kk = 1; kk < k + 1; kk++) {
        let min = prices[0]

        for (let i = 1; i < prices.length; i++) {
            min = Math.min(min, prices[ i ] - profit[ kk - 1 ][ i ])

            profit[ kk ][ i ] = Math.max(prices[ i ] - min, profit[ kk ][ i - 1 ])
        }
    }

    return profit[ k ][ prices.length - 1 ]
};

console.log(
    // maxProfit([3,3,5,0,0,3,1,4]),
    // maxProfit([1,2,3,4,5]),
    // maxProfit([7,6,4,3,1]),
    maxProfit(2, [6,1,3,2,4,7])
    // -5, 2, -1, 2, 3
)