function totalNQueens(n: number): number {
    let count = 0

    const columns_used: boolean[] = new Array(n).fill(false)

    const diag_1 = new Set<number>
    const diag_2 = new Set<number>

    const backtrack = (n_queens: number) => {
        if (n_queens === 0) {
            count++
            return
        }

        const row = n - n_queens

        for (let col = 0; col < n; col++) {
            const b1 = col - row
            const b2 = col + row

            if (columns_used[col] || diag_1.has(b1) || diag_2.has(b2)) continue

            columns_used[ col ] = true
            diag_1.add(b1)
            diag_2.add(b2)

            backtrack(n_queens - 1)

            diag_2.delete(b2)
            diag_1.delete(b1)
            columns_used[ col ] = false
        }
    }

    backtrack(n)

    return count
};

console.log(
    totalNQueens(4)
)