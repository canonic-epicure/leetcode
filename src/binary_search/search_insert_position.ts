function searchInsert(nums: number[], target: number): number {
    let l = 0
    let r = nums.length

    while (l < r) {
        const m = Math.floor((l + r) / 2)
        const el = nums[ m ]

        if (target < el) {
            r = m
        }
        else if (target > el) {
            l = m + 1
        }
        else {
            return m
        }
    }

    return l
};

console.log(
    searchInsert([1,3,5,6], 2)
)