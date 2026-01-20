function maximalSquare(matrix: string[][]): number {
    const m = matrix.length
    const n = matrix[0].length
    const min_side = Math.min(m, n)

    const dp = Array.from(
        { length : min_side },
        (_, i) => {
            if (i === 0) {
                return Array.from(
                    { length: m },
                    (_, i) => matrix[ i ].map(el => el === '1')
                )
            }
            else {
                return Array.from(
                    { length: m },
                    () => new Array<boolean>(n).fill(false)
                )
            }
        }
    )

    let max = matrix.some(el => el.some(el => el === '1')) ? 1 : 0

    for (let size = 2; size <= min_side; size++) {
        const max_row = m - size
        const max_col = n - size

        for (let row = 0; row <= max_row; row++) {
            for (let col = 0; col <= max_col; col++) {
                const is_square = dp[ size - 2 ][ row ][ col ]
                    && dp[ size - 2 ][ row ][ col + 1 ]
                    && dp[ size - 2 ][ row + 1 ][ col + 1 ]
                    && dp[ size - 2 ][ row + 1 ][ col ]

                dp[ size - 1 ][ row ][ col ] = is_square

                if (is_square && size > max) max = size
            }
        }
    }

    return max * max
};

console.log(
    maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])
)