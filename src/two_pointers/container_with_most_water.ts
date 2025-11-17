function maxArea(h: number[]): number {
    const len = h.length

    const heights = h.map((el, i) => {
        return [ el, i ]
    })

    const sorted = heights.sort((a, b) => a[0] - b[0])

    const min_to_max_idx = new Set<number>()
    const max_to_min_idx = new Set<number>()

    for (let i = 0; i < len; i++) {
        min_to_max_idx.add(i)
        max_to_min_idx.add(len - 1 - i)
    }

    const first_el = <A>(s : Set<A>) : A => {
        for (const a of s) return a

        return undefined
    }

    let water = 0

    for (let i = 0; i < len; i++) {
        const height_min = sorted[i][0]
        const index_min = sorted[i][1]

        const min_idx = first_el(min_to_max_idx)
        const max_idx = first_el(max_to_min_idx)

        const w = Math.max(Math.abs(index_min - min_idx), Math.abs(index_min - max_idx)) * height_min

        if (w > water) water = w

        min_to_max_idx.delete(index_min)
        max_to_min_idx.delete(index_min)
    }

    return water
};

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))

// console.log(maxArea([1,1]))
console.log(maxArea([1,0,0,0,0,0,0,2,2]))

