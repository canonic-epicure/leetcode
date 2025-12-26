function exist(board: string[][], word: string): boolean {
    const m = board.length
    const n = board[ 0 ].length

    const backtrack = (r: number, c: number, start: number) : boolean => {
        if (r < 0 || r >= m || c < 0 || c >= n) return false

        const char_board = board[ r ][ c ]
        const char_word = word[ start ]

        if (char_board === '#') return false

        if (char_board === char_word) {
            if (start === word.length - 1) return true

            board[ r ][ c ] = '#'

            if (backtrack(r + 1, c, start + 1)) return true
            if (backtrack(r - 1, c, start + 1)) return true
            if (backtrack(r, c + 1, start + 1)) return true
            if (backtrack(r, c - 1, start + 1)) return true

            board[ r ][ c ] = char_board
        }

        return false
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (backtrack(r, c, 0)) return true
        }
    }

    return false
};