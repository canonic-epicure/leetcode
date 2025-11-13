// correct, but times out on one of the last tests

function trap(heights: number[]): number {

    const depth_map = new Map<number, number[]>()

    const add = (height : number, i: number) => {
        if (!depth_map.has(height)) {
            depth_map.set(height, [])
        }
        depth_map.get(height).push(i)
    }

    for (let i = 0; i < heights.length; i++) {
        const height = heights[ i ]

        for (let j = 1; j <= height; j++)
            add(j, i)
    }

    const distrib = Array.from(depth_map.entries())

    distrib.sort((a, b) => a[0] - b[0])

    let count = 0

    for (let i = distrib.length - 1; i >= 0; i--) {
        const height = distrib[i][0]
        const indices = distrib[i][1]

        indices.sort((a, b) => a - b)

        for (let j = 0; j < indices.length - 1; j++) {
            const left_index = indices[j]
            const right_index = indices[j + 1]

            const width = right_index - left_index - 1
            const depth = i > 0 ? height - distrib[i - 1][0] : height

            count += width * depth
        }
    }

    return count
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))
console.log(trap([6,8,5,0,0,6,5]))

export {}