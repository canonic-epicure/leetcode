type Point = { point : number, kind: 'start' | 'end', same : boolean }

function merge(intervals: [number, number][]): [number, number][] {
    const points: Point[] = []

    intervals.forEach(interval => {
        const start = interval[0]
        const end = interval[1]

        points.push({ point: start, kind: 'start', same : start === end})
        points.push({ point: end, kind: 'end', same : start === end })
    })

    points.sort((p1, p2) => p1.point - p2.point)

    let inside_counter = 0
    let start: number = 0

    const res: [ number, number ][] = []

    for (let i = 0; i < points.length; i++) {
        const prev_inside_counter = inside_counter
        let combining = true
        let has_same = false

        do {
            if (points[i].same) has_same = true

            inside_counter += points[ i ].kind === 'start' ? 1 : -1
            combining = i < points.length - 1 && points[ i ].point === points[ i + 1 ].point
            if (combining) i++
        } while (combining)

        if (prev_inside_counter === 0 && inside_counter > 0) {
            start = points[i].point
        }
        else if (prev_inside_counter > 0 && inside_counter === 0) {
            res.push([start, points[i].point])
        }
        else if (prev_inside_counter === 0 && inside_counter === 0 && has_same) {
            res.push([points[i].point, points[i].point])
        }
    }

    return res
};