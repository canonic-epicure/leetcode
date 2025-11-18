function threeSum(nums: number[]): [number, number, number][] {
    const len = nums.length

    const sorted = nums.sort((a, b) => a - b)

    const positives = new Map<number, number>()
    const negatives = new Map<number, number>()
    const zeros = []

    let pos_arr = []
    let neg_arr = []
    let pos_max = 0
    let neg_min = 0

    for (let i = 0; i < len; i++) {
        const num = sorted[ i ]

        if (num < 0) {
            if (num < neg_min) neg_min = num

            const prev = negatives.get(num)

            if (prev === undefined) {
                negatives.set(num, 1)
            } else {
                negatives.set(num, prev + 1)
            }

            if (prev === undefined || prev === 1) neg_arr.push(num)
        }
        if (num >= 0) {
            if (num > pos_max) pos_max = num

            const prev = positives.get(num)

            if (prev === undefined) {
                positives.set(num, 1)
            } else {
                positives.set(num, prev + 1)
            }

            if (num === 0) {
                if (prev === undefined) pos_arr.push(num)
            } else {
                if (prev === undefined || prev === 1) pos_arr.push(num)
            }
        }
        if (num === 0) zeros.push(num)
    }

    const res : [number, number, number][] = []

    if (zeros.length >= 3) {
        res.push([0, 0, 0])
    }

    if (negatives.size === 0 || positives.size === 0) return res

    pos_arr.sort((a, b) => a - b)

    let prev_pos_i_1 = undefined

    for (let i = 0; i < pos_arr.length - 1; i++) {
        const pos_i = pos_arr[ i ]

        if (pos_i === prev_pos_i_1) continue
        prev_pos_i_1 = pos_i

        if (pos_i > -neg_min) break

        let prev_pos_j = undefined

        for (let j = i + 1; j < pos_arr.length; j++) {
            const pos_j = pos_arr[ j ]

            if (pos_j === prev_pos_j) continue
            prev_pos_j = pos_j

            const sum_pos_2 = pos_i + pos_j

            if (sum_pos_2 > -neg_min)
                break
            else if (negatives.has(-sum_pos_2)) {
                res.push([-sum_pos_2, pos_i, pos_j])
            }
        }
    }

    neg_arr.sort((a, b) => a - b)

    let prev_neg_i_1 = undefined

    for (let i = neg_arr.length - 1; i >= 1; i--) {
        const neg_i = neg_arr[ i ]

        if (neg_i === prev_neg_i_1) continue
        prev_neg_i_1 = neg_i

        if (-neg_i >= pos_max) break

        let prev_neg_j = undefined

        for (let j = i - 1; j >= 0; j--) {
            const neg_j = neg_arr[ j ]
            if (neg_j === prev_neg_j) continue
            prev_neg_j = neg_j

            const sum_neg_2 = neg_i + neg_j

            if (-sum_neg_2 > pos_max)
                break
            else if (positives.has(-sum_neg_2)) {
                res.push([neg_i, neg_j, -sum_neg_2])
            }
        }
    }

    return res
};

// console.log(threeSum([1,0,1])) // [ ]

// console.log(threeSum([-1,0,1,0]))

console.log(threeSum([ -10, -5, -5, -4, -4, -3, -2, -2, 0, 0, 1, 2, 2, 2, 2, 5, 5 ]))

// console.log(threeSum([0,0,0])) // [ [ 0, 0, 0 ] ]

// console.log(threeSum([-1,0,1,2,-1,-4])) // [ [ -1, 0, 1 ], [ -1, -1, 2 ] ]

// console.log(threeSum([-100,-70,-60,110,120,130,160])) // [[-100,-60,160],[-70,-60,130]]