function candy(ratings: number[]): number {
    const candies = new Array(ratings.length).fill(1)

    for (let i = 0; i < ratings.length - 1; i++) {
        const rating1 = ratings[ i ]
        const rating2 = ratings[ i + 1 ]

        if (rating1 > rating2) {
            if (candies[ i ] <= candies[ i + 1 ])
                candies[ i ] = candies[ i + 1 ] + 1
        }
        else if (rating1 < rating2) {
            if (candies[ i ] >= candies[ i + 1 ])
                candies[ i + 1 ] = candies[ i ] + 1
        }
    }

    for (let i = ratings.length - 1; i >= 1; i--) {
        const rating1 = ratings[ i - 1 ]
        const rating2 = ratings[ i ]

        if (rating1 > rating2) {
            if (candies[ i - 1 ] <= candies[ i ])
                candies[ i - 1 ] = candies[ i ] + 1
        }
        else if (rating1 < rating2) {
            if (candies[ i - 1 ] >= candies[ i ])
                candies[ i ] = candies[ i - 1 ] + 1
        }
    }

    return candies.reduce((acc, el) => acc + el, 0)
};
