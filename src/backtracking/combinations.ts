function combine(n: number, k: number): number[][] {
    const res: number[][] = []

    const combination: number[] = []

    const backtrack = (idx: number) => {
        combination.push(idx)

        if (combination.length === k) {
            res.push(combination.slice())
            combination.pop()
            return
        }

        for (let i = idx + 1; i <= n; i++) {
            backtrack(i)
        }

        combination.pop()
    }

    for (let i = 1; i <= n - k + 1; i++)
        backtrack(i)

    return res
};

console.log(
    combine(4, 2)
)