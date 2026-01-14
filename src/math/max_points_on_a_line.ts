function maxPoints(points: [ number, number ][]): number {
    let max = 0

    const counts : Map<string, number> = new Map()

    for (let i = 0; i < points.length - 1; i++) {
        for (let k = i + 1; k < points.length; k++) {
            const x1 = points[ i ][ 0 ]
            const y1 = points[ i ][ 1 ]
            const x2 = points[ k ][ 0 ]
            const y2 = points[ k ][ 1 ]

            const koef = x1 === x2
                ? Infinity
                : (y2 - y1) / (x2 - x1)

            const bias = x1 === x2
                ? x1
                : y1 - koef * x1

            const hash = `${ koef.toPrecision(15) }/${ String(bias.toPrecision(15)) }`

            const count = (counts.get(hash) ?? 0) + 1
            if (count > max) max = count

            counts.set(hash, count)
        }
    }

    return (1 + Math.sqrt(1 + 8 * max)) / 2
};

console.log(
    // maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]),
    maxPoints([[-6,-1],[3,1],[12,3]])
)