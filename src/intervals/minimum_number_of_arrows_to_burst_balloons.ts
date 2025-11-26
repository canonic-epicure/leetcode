type Point = { point : number, kind: 'start' | 'end', idx : number }

function findMinArrowShots(pts: [number, number][]): number {
    const points: Point[] = []

    pts.forEach((point, idx) => {
        points.push({ point: point[0], kind: 'start', idx })
        points.push({ point: point[1], kind: 'end', idx })
    })

    points.sort((p1, p2) => {
        const diff = p1.point - p2.point

        if (diff === 0) {
            if (p1.kind === 'start' && p2.kind === 'end') return -1
            if (p1.kind === 'end' && p2.kind === 'start') return 1

            return 0
        } else
            return diff
    })

    let count = 0

    const bursted: Set<number> = new Set()
    const inside: Set<number> = new Set()

    const include = (point : Point) => {
        if (point.kind === 'start') {
            inside.add(point.idx)
        }
        else if (inside.size > 0) {
            for (const inside_idx of inside) {
                bursted.add(inside_idx)
            }
            inside.clear()
            count++
        }
    }

    for (let i = 0; i < points.length; i++) {
        let combining = true

        do {
            const point = points[i]

            if (!bursted.has(point.idx)) include(point)
            combining = i < points.length - 1 && point.point === points[ i + 1 ].point
            if (combining) i++
        } while (combining)
    }

    return count
};

export {}

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))