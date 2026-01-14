function search(nums: number[], target: number): number {
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        const m = Math.floor((l + r) / 2)
        const num_m = nums[ m ]

        if (num_m === target) {
            return m
        }

        const num_l = nums[ l ]
        const num_r = nums[ r ]

        // left sub-array is sorted
        if (num_l < num_m) {
            // target is in left sub-array
            if (num_l <= target && target < num_m) {
                r = m - 1
            }
            else {
                l = m + 1
            }
        }
        // right sub-array is sorted
        else if (num_m < num_r) {
            if (num_m < target && target <= num_r) {
                l = m + 1
            }
            else {
                r = m - 1
            }
        }
    }

    return -1
};


console.log(search([ 1, 2, 3, 4, 5, 6 ], 0))
console.log(search([ 2, 3, 4, 5, 6, 1 ], 0))
console.log(search([ 3, 4, 5, 6, 1, 2 ], 0))
console.log(search([ 4, 5, 6, 1, 2, 3 ], 0))
console.log(search([ 5, 6, 1, 2, 3, 4 ], 0))
console.log(search([ 6, 1, 2, 3, 4, 5 ], 0))