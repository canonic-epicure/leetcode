/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: ('X' | 'O')[][]): void {
    const m = board.length
    const n = board[0].length

    const visited = new Array(m)
    for (let i = 0; i < m; i++) visited[ i ] = new Array(n).fill(false)

    const search = (y: number, x: number, region: [number, number][]) => {
        let on_edge = false

        visited[y][x] = true
        region.push([y, x])

        if (x > 0) {
            if (board[ y ][ x - 1] === 'O' && !visited[ y ][ x - 1 ]) on_edge = search(y, x - 1, region) || on_edge
        } else {
            on_edge = true
        }

        if (x < n - 1) {
            if (board[ y ][ x + 1] === 'O' && !visited[ y ][ x + 1 ]) on_edge = search(y, x + 1, region) || on_edge
        } else {
            on_edge = true
        }

        if (y > 0) {
            if (board[ y - 1 ][ x ] === 'O' && !visited[ y - 1 ][ x ]) on_edge = search(y - 1, x, region) || on_edge
        } else {
            on_edge = true
        }

        if (y < m - 1) {
            if (board[ y + 1 ][ x ] === 'O' && !visited[ y + 1 ][ x ]) on_edge = search(y + 1, x, region) || on_edge
        } else {
            on_edge = true
        }

        return on_edge
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const vertex = board[i][j]

            if (visited[i][j] || vertex === 'X') continue

            const region: [number, number][] = []

            if (!search(i, j, region)) {
                region.forEach(([y, x]) => board[y][x] = 'X')
            }
        }
    }
};