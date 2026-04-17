function largestAltitude(gain: number[]): number {
    return gain.reduce((acc, val) => {
        acc[0] += val

        if (acc[0] > acc[1]) acc[1] = acc[0]

        return acc
    }, [ 0, 0 ])[1]
};