function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0
    const set = new Set(nums)
    let maxSeq = 0

    for (const num of set) {
        if (!set.has(num - 1)) {
            let current = num
            let partial = 1
            while (set.has(current + 1)) {
                current++
                partial++
            }
            maxSeq = Math.max(maxSeq, partial)
        }
    }
    return maxSeq

};