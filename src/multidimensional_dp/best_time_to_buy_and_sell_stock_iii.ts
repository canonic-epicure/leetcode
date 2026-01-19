function maxProfit(prices: number[]): number {
    if (prices.length <= 1) return 0

    const deltas = Array.from({ length : prices.length - 1 }, (_, i) => prices[ i + 1 ] - prices[ i ])
    const len = deltas.length

    if (len === 1) return Math.max(0, deltas[ 0 ])

    const current_left = new Array(len).fill(0)
    const current_right = new Array(len).fill(0)

    current_left[0] = deltas[0]
    current_right[ len - 1 ] = deltas[ len - 1 ]

    for (let i = 1; i < len; i++) {
        current_left[ i ] = Math.max(deltas[ i ], current_left[ i - 1 ] + deltas[ i ])
        current_right[ len - 1 - i ] = Math.max(deltas[ len - 1 - i ], current_right[ len - i ] + deltas[ len - 1 - i ])
    }

    let max = 0

    for (let i = 1; i < len; i++) {
        current_left[ i ] = Math.max(current_left[ i - 1 ], current_left[ i ])
        current_right[ len - 1 - i ] = Math.max(current_right[ len - i ], current_right[ len - 1 - i ])
    }

    for (let i = 0; i < len - 1; i++) {
        const total = Math.max(current_left[i], 0) + Math.max(current_right[ i + 1 ], 0)

        if (total > max) max = total
    }

    return Math.max(max, ...current_left)
};

console.log(
    // maxProfit([3,3,5,0,0,3,1,4]),
    // maxProfit([1,2,3,4,5]),
    // maxProfit([7,6,4,3,1]),
    maxProfit([6,1,3,2,4,7])
    // -5, 2, -1, 2, 3
)