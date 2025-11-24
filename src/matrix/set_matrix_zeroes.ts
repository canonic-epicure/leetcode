/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length
    const n = matrix[0].length

    let zero_row = -1
    let zero_col = -1

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (zero_col === -1) {
                if (matrix[row][col] === 0) {
                    zero_row = row
                    zero_col = col

                    for (let i = 0; i < m; i++) matrix[i][col] = matrix[i][col] === 0 ? 1 : 0
                    for (let i = 0; i < n; i++) matrix[row][i] = matrix[row][i] === 0 ? 1 : 0

                    break
                }
            }
            else {
                if (row !== zero_row && col !== zero_col) {
                    if (matrix[row][col] === 0) {
                        matrix[zero_row][col] = 1
                        matrix[row][zero_col] = 1
                    }
                }
            }
        }
    }

    if (zero_col !== -1) {
        for (let row = 0; row < m; row++) {
            for (let col = 0; col < n; col++) {
                if (row !== zero_row && col !== zero_col) {
                    if (matrix[ row ][ zero_col ] === 1 || matrix[ zero_row ][ col ] === 1) matrix[ row ][ col ] = 0
                }
            }
        }

        for (let i = 0; i < m; i++) matrix[ i ][ zero_col ] = 0
        for (let i = 0; i < n; i++) matrix[ zero_row ][ i ] = 0
    }
};

const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

setZeroes(matrix)

console.log(matrix)