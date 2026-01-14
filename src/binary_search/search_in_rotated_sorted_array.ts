function search(nums: number[], target: number): number {
    const len = nums.length

    let l = 0
    let r = nums.length - 1

    while (l < r) {
        const m = Math.floor((l + r) / 2)
        const el = nums[ m ]

        if (l < m && nums[ l ] > el) {
            r = m
        }
        else if (m < r && el > nums[ r ]) {
            l = m + 1
        }
        else {
            break
        }
    }

    let k = l

    let l_search = 0
    let r_serach = nums.length

    while (l_search < r_serach) {
        const m = Math.floor((l_search + r_serach) / 2)
        const el = nums[ (m + k) % len]

        if (target < el) {
            r_serach = m
        }
        else if (target > el) {
            l_search = m + 1
        }
        else {
            return (m + k) % len
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