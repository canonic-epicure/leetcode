function trap(heights: number[]): number {
    const len = heights.length

    if (len < 3) return 0

    let left_max_max = len - 1
    let right_max_min = 0

    const left_max = new Array(len).fill(-1)
    const right_max = new Array(len).fill(-1)

    left_max[0] = 0
    right_max[len - 1] = 0

    const heights_with_index = heights.map((height, index) : [ number, number ] => {
        return [ height, index ]
    })

    heights_with_index.sort((h1, h2) => h1[ 0 ] - h2[ 0 ])

    for (let i = heights_with_index.length - 1; i >= 0; i--) {
        const height = heights_with_index[i][0]
        const index = heights_with_index[i][1]

        if (left_max[index] === -1) {
            left_max[index] = 0
        }
        if (right_max[index] === -1) {
            right_max[index] = 0
        }

        for (let k = Math.min(right_max_min, index); k < index; k++) {
            right_max[k] = height
        }

        right_max_min = Math.max(right_max_min, index)

        for (let k = Math.max(left_max_max, index); k > index; k--) {
            left_max[k] = height
        }

        left_max_max = Math.min(left_max_max, index)
    }

    return heights.map((height, index) => {
        return Math.max(0, Math.min(left_max[index], right_max[index]) - height)
    }).reduce((a, b) => a + b, 0)
}

console.log(trap([1,0,3,2,0,0,5,2,0,3]))
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))
console.log(trap([6,8,5,0,0,6,5]))

export {}