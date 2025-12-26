function combinationSum(candidates: number[], target: number): number[][] {
    candidates = candidates.filter(a => a <= target)

    const len = candidates.length

    // for (let i = 0; i < len; i++) {
    //     const candidate = candidates[ i ]
    //
    //     const num = Math.floor(target / candidate) - 1
    //
    //     for (let k = 0; k < num; k++) candidates.push(candidate)
    // }

    const freqs = new Map<number, number>()
    candidates.forEach(el => freqs.set(el, Math.floor(target / el)))

    // candidates.sort((a, b) => a - b)

    const res_index = new Map<string, boolean>()
    const res: number[][] = []

    const path: number[] = []

    const backtrack = (candidates: Map<number, number>, sum: number) => {
        if (sum === target) {
            const copy = path.slice()
            copy.sort((a, b) => a - b)

            const frequences = new Map<number, number>()
            copy.forEach(el => frequences.set(el, (frequences.get(el) ?? 0) + 1))

            const idx = copy.map(el => `${ el }*${ frequences.get(el) }`).join('/')

            if (!res_index.has(idx)) {
                res_index.set(idx, true)
                res.push(copy)
            }

            return
        }

        for (const [candidate, freq] of candidates) {
            const sum_next = candidate + sum

            if (freq === 0 || sum_next <= target) {
                path.push(candidate)
                candidates.set(candidate, freq - 1)

                backtrack(candidates, sum_next)

                candidates.set(candidate, freq + 1)
                path.pop()
            }
        }
    }

    backtrack(freqs, 0)

    return res
};

console.log(
    combinationSum([2,3,6,7], 7)
)