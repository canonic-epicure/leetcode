/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const rows = board.length
    const cols = board[0].length

    const count = (r: number, c: number) : number => {
        let cnt = 0

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i !== 0 || j !== 0) {
                    const y = r + i
                    const x = c + j

                    if (y >= 0 && y < rows && x >= 0 && x < cols)
                        if (board[y][x] & 0b1) cnt++
                }
            }
        }

        return cnt
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const live_neighbors = count(r, c)

            board[r][c] = (board[r][c] & 0b1) | (live_neighbors << 1)
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const live_neighbors = (board[r][c] & 0b1110) >> 1
            const is_live = board[r][c] & 0b1

            if (is_live) {
                if (live_neighbors < 2 || live_neighbors > 3) board[r][c] &= 0b0
            } else {
                if (live_neighbors === 3) board[r][c] |= 0b1
            }

            board[r][c] &= 0b0001
        }
    }
};

const board = [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
]

gameOfLife(board)

board.forEach(row => console.log(row))