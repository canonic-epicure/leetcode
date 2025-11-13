// correct, but times out on one of the last tests

function trap(heights: number[]): number {
    let count = 0

    let repeat = true

    let first_non_zero = 0

    let min = 1e10

    for (let i = 0; i < heights.length; i++) {
        const height = heights[ i ]

        if (height > 0 && height < min) min = height
    }

    for (let i = 0; i < heights.length; i++) {
        heights[ i ] -= min - 1
    }

    let is_first = true

    do {
        repeat = false

        let started = false
        let potential_count = 0

        for (let i = first_non_zero; i < heights.length; i++) {
            const height = heights[ i ]

            if (height > 0) {
                if (started) {
                    started = false
                    count += potential_count
                    potential_count = 0
                }

                if (!started) {
                    started = true
                }
            } else {
                if (started) potential_count++
            }

            heights[ i ]--

            if (!repeat && heights[ i ] > 0) {
                repeat = true
                first_non_zero = i
            }
        }

        if (is_first) {
            is_first = false

            if (min > 1) count *= min
        }

    } while (repeat)

    return count
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))
console.log(trap([6,8,5,0,0,6,5]))

export {}