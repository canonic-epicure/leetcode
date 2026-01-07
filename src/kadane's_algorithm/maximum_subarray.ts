function maxSubArray(nums: number[]): number {
    let current = nums[0]
    let best = current

    for (let i = 1; i < nums.length; i++) {
        const el = nums[ i ]

        current = Math.max(el, current + el)
        best = Math.max(best, current)
    }

    return best
};