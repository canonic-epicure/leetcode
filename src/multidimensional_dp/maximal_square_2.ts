function maximalSquare(matrix: string[][]): number {
    const m = matrix.length
    const n = matrix[0].length
    const min_side = Math.min(m, n)

    let max = matrix.some(row => row.some(el => el === '1')) ? 1 : 0

    for (let size = 2; size <= min_side; size++) {
        const max_row = m - size
        const max_col = n - size

        const prev_max = max

        for (let row = 0; row <= max_row; row++) {
            for (let col = 0; col <= max_col; col++) {
                const is_square = matrix[ row ][ col ] === '1'
                    && matrix[ row ][ col + 1 ] === '1'
                    && matrix[ row + 1 ][ col + 1 ] === '1'
                    && matrix[ row + 1 ][ col ] === '1'

                matrix[ row ][ col ] = is_square ? '1' : '0'

                if (is_square && size > max) max = size
            }
        }

        if (max === prev_max) break
    }

    return max * max
};

console.log(
    maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])
)