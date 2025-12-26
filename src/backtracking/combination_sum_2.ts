function combinationSum(candidates: number[], target: number): number[][] {
    candidates = candidates.filter(a => a <= target)

    const res: number[][] = []

    const path: number[] = []

    const backtrack = (start: number, sum: number) => {
        if (sum === target) {
            res.push(path.slice())
            return
        }

        for (let i = start; i < candidates.length; i++) {
            const next = candidates[ i ]
            const sum_next = sum + next

            if (sum_next <= target) {
                path.push(next)
                backtrack(i, sum_next)
                path.pop()
            }
        }
    }

    backtrack(0, 0)

    return res
};

console.log(
    combinationSum([2,3,6,7], 7)
)