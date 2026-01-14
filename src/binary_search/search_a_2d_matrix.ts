function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length
    const n = matrix[ 0 ].length

    const size = m * n

    let left = 0
    let right = size

    while (left < right) {
        const middle = Math.floor((left + right) / 2)
        const row = Math.floor(middle / n)
        const col = middle % n

        const el = matrix[ row ][ col ]

        if (target < el) {
            right = middle
        }
        else if (target > el) {
            left = middle + 1
        }
        else {
            return true
        }
    }

    return false
};
