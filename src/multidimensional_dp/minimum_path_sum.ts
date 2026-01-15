function minPathSum(grid: number[][]): number {
    const m = grid.length
    const n = grid[ 0 ].length

    const do_min_path_sum = (row: number, col: number): number => {
        const el = grid[ row ][ col ]

        if (row === m - 1 && col === n - 1) return el

        if (el < 0) return -el

        const res = el + Math.min(
            row < m - 1 ? do_min_path_sum(row + 1, col) : Infinity,
            col < n - 1 ? do_min_path_sum(row, col + 1) : Infinity
        )

        grid[ row ][ col ] = -res

        return res
    }

    return do_min_path_sum(0, 0)
};

console.log(
    minPathSum([[1,3,1],[1,5,1],[4,2,1]])
)