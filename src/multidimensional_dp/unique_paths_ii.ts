function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length
    const n = obstacleGrid[ 0 ].length

    const do_unque_paths = (row: number, col: number): number => {
        const el = obstacleGrid[ row ][ col ]

        if (row === m - 1 && col === n - 1) return el === 1 ? 0 : 1

        if (el < 0) return -el
        if (el === 1) return 0

        const can_move_right = col < n - 1 && obstacleGrid[ row ][ col + 1 ] !== 1
        const can_move_down = row < m - 1 && obstacleGrid[ row + 1 ][ col ] !== 1

        const res = (can_move_down ? do_unque_paths(row + 1, col) : 0) + (can_move_right ? do_unque_paths(row, col + 1) : 0)

        obstacleGrid[ row ][ col ] = -res

        return res
    }

    return do_unque_paths(0, 0)
}