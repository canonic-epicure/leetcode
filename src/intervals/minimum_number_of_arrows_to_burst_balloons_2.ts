function findMinArrowShots(pts: [number, number][]): number {
    pts.sort((p1, p2) => p1[0] - p2[0])

    let count = 0

    let intersection_start: number = -Infinity
    let intersection_end: number = Infinity

    for (let i = 0; i < pts.length; i++) {
        const point = pts[ i ]

        if (point[0] > intersection_end) {
            count++
            intersection_start = point[0]
            intersection_end = point[1]
        }
        else {
            intersection_start = Math.max(intersection_start, point[ 0 ])
            intersection_end = Math.min(intersection_end, point[ 1 ])
        }
    }
    count++

    return count
};



console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))