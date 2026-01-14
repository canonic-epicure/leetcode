function mySqrt(x: number): number {
    if (x === 0) return 0
    if (x === 1) return 1

    let left = 1
    let right = x

    while (left < right) {
        const middle = Math.floor((left + right) / 2)
        const delta = x - middle * middle

        if (delta < 0) {
            right = middle
        }
        else if (delta > 0) {
            left = middle + 1
        }
        else {
            return middle
        }
    }

    return left - 1
};

console.log(
    mySqrt(2),
    mySqrt(3),
    mySqrt(4),
    mySqrt(5),
    mySqrt(8)
)