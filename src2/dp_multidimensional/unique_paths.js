function uniquePaths(m, n) {
    if (m === 1 || n === 1)
        return 1;
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));
    dp[0][0] = 1;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (row === 0 || col === 0) {
                dp[row][col] = 1;
            }
            else {
                dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
}
;
export {};
