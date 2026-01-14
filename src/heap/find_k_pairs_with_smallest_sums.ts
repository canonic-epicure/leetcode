// nums1 = [1,7,11], nums2 = [2,4,6]
// [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

import { MinHeap } from "@datastructures-js/heap"

type Direction = { fixed: number, variable : number }

function kSmallestPairs(nums1: number[], nums2: number[], k: number): [ number, number ][] {
    const res: [ number, number ][] = []

    const min = Math.min(nums1.length, nums2.length)

    const heap: MinHeap<[ number, number ]> = new MinHeap(el => el[0] + el[1])
    heap.push([ nums1[ 0 ], nums2[ 0 ] ])

    const directions_num1: Direction[] = [ { fixed: 0, variable: 1 } ]
    const directions_num2: Direction[] = [ { fixed: 0, variable: 1 } ]

    let dir_num1 = 0
    let dir_num2 = 0

    let rad = 1

    while (dir_num1 < directions_num1.length || dir_num2 < directions_num2.length) {
        const next_limit = rad < min
            ? nums1[ Math.min(rad, nums1.length - 1) ] + nums2[ Math.min(rad, nums2.length - 1) ]
            : Infinity

        for (let i = dir_num1; i < directions_num1.length; i++) {
            const direction1 = directions_num1[ i ]

            const n2 = nums2[ direction1.fixed ]

            for (let k = direction1.variable; k < nums1.length; k++) {
                direction1.variable = k
                const n1 = nums1[ k ]

                if (n1 + n2 <= next_limit)
                    heap.push([n1, n2])
                else
                    break

                if (k === nums1.length - 1) dir_num1++
            }
        }

        for (let i = dir_num2; i < directions_num2.length; i++) {
            const direction2 = directions_num2[ i ]

            const n1 = nums1[ direction2.fixed ]

            for (let k = direction2.variable; k < nums2.length; k++) {
                direction2.variable = k
                const n2 = nums2[ k ]

                if (n1 + n2 <= next_limit)
                    heap.push([n1, n2])
                else
                    break

                if (k === nums2.length - 1) dir_num2++
            }
        }

        // drain
        while (res.length < k && heap.size() > 0) res.push(heap.pop())

        if (res.length === k) break

        if (rad < min) {
            heap.push([ nums1[ rad ], nums2[ rad ]])
            directions_num1.push({ fixed: directions_num1[ directions_num1.length - 1 ].fixed + 1, variable: rad + 1 })
            directions_num2.push({ fixed: directions_num2[ directions_num2.length - 1 ].fixed + 1, variable: rad + 1 })
            rad++
        }
    }

    return res
};


console.log(
    // kSmallestPairs([1,7,11], [2,4,6], 3)
    kSmallestPairs([1,2,4,5,6], [3,5,7,9], 20)
)