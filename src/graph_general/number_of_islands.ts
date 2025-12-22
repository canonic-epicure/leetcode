function numIslands(grid: ('0' | '1')[][]): number {
    const m = grid.length
    const n = grid[0].length

    let count = 0

    const visited = new Array(m)
    for (let i = 0; i < m; i++) visited[ i ] = new Array(n).fill(false)

    const search = (y: number, x: number) => {
        visited[y][x] = true

        if (x > 0) {
            if (grid[ y ][ x - 1] === '1' && !visited[ y ][ x - 1 ]) search(y, x - 1)
        }
        if (x < n - 1) {
            if (grid[ y ][ x + 1] === '1' && !visited[ y ][ x + 1 ]) search(y, x + 1)
        }

        if (y > 0) {
            if (grid[ y - 1 ][ x ] === '1' && !visited[ y - 1 ][ x ]) search(y - 1, x)
        }
        if (y < m - 1) {
            if (grid[ y + 1 ][ x ] === '1' && !visited[ y + 1 ][ x ]) search(y + 1, x)
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const vertex = grid[i][j]

            if (visited[i][j] || vertex === '0') continue

            count++

            search(i, j)
        }
    }

    return count
};