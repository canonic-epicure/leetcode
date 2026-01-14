function findMin(nums: number[]): number {
    // no rotation
    if (nums[ nums.length - 1 ] > nums[ 0 ]) return nums[ 0 ]
    if (nums.length === 1) return nums[0]

    let l = 0
    let r = nums.length

    while (l < r) {
        const m = Math.floor((l + r) / 2)

        // no rotation point in the left part
        if (nums[ l ] < nums[ m ]) {
            l = m
        }
        else {
            r = m
        }
    }

    return nums[ l + 1 ]
};

console.log(
    findMin([1]),
    // findMin([1,2,3,4,5]),
    // findMin([3,4,5,1,2]),
    // findMin([4,5,6,7,0,1,2])
)

