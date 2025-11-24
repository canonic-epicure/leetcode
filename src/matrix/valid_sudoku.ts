function isValidSudoku(board: (string | '.')[][]): boolean {
    const validator = () : (n : string | '.') => boolean => {
        const seen = [0,0,0,0,0,0,0,0,0]

        return (n : string | '.') : boolean => {
            if (n === '.') return true

            return seen[ Number(n) - 1 ]++ === 0
        }
    }

    for (let i = 0; i < 9; i++) {
        const horizontal = validator()
        const vertical = validator()
        const inner = validator()

        const inner_l = (i % 3) * 3
        const inner_t = Math.floor(i / 3) * 3

        for (let j = 0; j < 9; j++) {
            if (!horizontal(board[i][j])) return false
            if (!vertical(board[j][i])) return false

            const inner_x = j % 3
            const inner_y = Math.floor(j / 3)

            if (!inner(board[inner_t + inner_y][inner_l + inner_x])) return false
        }
    }

    return true
};

console.log(isValidSudoku(
    [
        [".",".",".","9",".",".",".",".","."],
        [".",".",".",".",".",".",".",".","."],
        [".",".","3",".",".",".",".",".","1"],
        [".",".",".",".",".",".",".",".","."],
        ["1",".",".",".",".",".","3",".","."],
        [".",".",".",".","2",".","6",".","."],
        [".","9",".",".",".",".",".","7","."],
        [".",".",".",".",".",".",".",".","."],
        ["8",".",".","8",".",".",".",".","."]
    ]
))