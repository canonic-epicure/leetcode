function searchRange(nums: number[], target: number): [ number, number ] {
    let l_1 = 0
    let r_1 = nums.length

    let l_2 = 0
    let r_2 = nums.length

    while (l_1 < r_1 || l_2 < r_2) {
        const m_1 = Math.floor((l_1 + r_1) / 2)
        const m_2 = Math.floor((l_2 + r_2) / 2)

        if (target <= nums[ m_1 ]) {
            r_1 = m_1
        }
        else {
            l_1 = m_1 + 1
        }

        if (target >= nums[ m_2 ]) {
            l_2 = m_2 + 1
        }
        else {
            r_2 = m_2
        }
    }

    // console.log(l_1, r_1, l_2, r_2)

    if (r_1 === l_2) return [ -1, -1 ]

    return [ nums[ l_1 ] === target ? l_1 : r_1, l_2 - 1 ]
};

console.log(
    // searchRange([1, 4], 4),
    // searchRange([2, 2], 2)
    // searchRange([], 0)
    // searchRange([1, 2, 3], -10)
    // searchRange([5,7,7,8,8,10], 6)
    // searchRange([5,7,7,8,8,10], 7)
    searchRange([1,2,3,3,3,3,4,5,9], 3)
)