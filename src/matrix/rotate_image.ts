/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const len = matrix.length
    const half = Math.floor(len / 2)

    for (let i = 0; i < len; i++) {
        for (let k = i + 1; k < len; k++) {
            const t = matrix[i][k]
            matrix[i][k] = matrix[k][i]
            matrix[k][i] = t
        }
    }
    for (let i = 0; i < len; i++) {
        for (let k = 0; k < half; k++) {
            const t = matrix[i][k]
            matrix[i][k] = matrix[i][len - k - 1]
            matrix[i][len - k - 1] = t
        }
    }
};