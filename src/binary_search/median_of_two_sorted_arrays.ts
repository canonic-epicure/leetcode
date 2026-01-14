function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const l1 = 0
    const r1 = nums1.length

    const l2 = 0
    const r2 = nums2.length

    while (l1 < r1 || l2 < r2) {
        const m1 = Math.floor((l1 + r1) / 2)
        const m2 = Math.floor((l2 + r2) / 2)


    }

    return 0
};

console.log(
    // [1, 2, 3, 4, 5, 6, 7, 8], (4 + 5) / 2 = 4.5
    findMedianSortedArrays(
        [1, 3, 5, 7], // (3 + 5) / 2 = 4
        [2, 4, 6, 8], // (4 + 6) / 2 = 5
    ),

    // [1, 3, 4, 5, 6, 7], (4 + 5) / 2 = 4.5
    findMedianSortedArrays(
        [1, 3, 5, 7], // (3 + 5) / 2 = 4
        [4, 6], // (4 + 6) / 2 = 5
    ),

    // [1, 2, 3, 7, 8, 11, 15, 18, 21, 26 ], (8 + 11) / 2 = 9.5
    findMedianSortedArrays(
        [1, 2, 7, 11, 18, 21], // (7 + 11) / 2 = 9
        [3, 8, 15, 26], // (8 + 15) / 2 = 11.5
    ),

    // [1, 2, 3, 7, 8, 11, 15, 18, 21, 26 ], (8 + 11) / 2 = 9.5
    findMedianSortedArrays(
        [2, 3, 8, 11, 15, 18],
        [1, 7, 21, 26],
    )

)