function majorityElement(nums: number[]): number {
    const counts: Map<number, number> = new Map()

    nums.forEach(el => {
        if (!counts.has(el)) counts.set(el, 0)

        counts.set(el, counts.get(el) + 1)
    })

    const half = nums.length / 2

    for (let i = 0; i < nums.length; i++) {
        const el = nums[ i ]

        if (counts.get(el) > half) {
            return el
        }
    }
};