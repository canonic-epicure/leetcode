function insert(intervals: [number, number][], newInterval: [number, number]): [number, number][] {
    const is_in = (point: number, interval: [number, number]) : boolean => interval[0] <= point && point <= interval[1]

    const res: [number, number][] = []

    let intersection: [number, number] = newInterval

    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[ i ]

        if (intersection && (is_in(intersection[0], interval) || is_in(intersection[1], interval) || is_in(interval[0], intersection))) {
            intersection = [ Math.min(interval[0], intersection[0]), Math.max(interval[1], intersection[1]) ]
        }
        else if (intersection && intersection[1] < interval[0]) {
            res.push(intersection)
            intersection = null
            res.push(interval)
        }
        else {
            res.push(interval)
        }
    }

    if (intersection) res.push(intersection)

    return res
};

console.log(insert([[2,5],[6,7],[8,9]], [0, 1]))