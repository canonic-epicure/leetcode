function trailingZeroes(n: number): number {
    let count = 0

    let prev = 1

    for (let i = 1; i <= n; i++) {
        prev *= i

        while (prev % 10 === 0) {
            count++

            prev /= 10
        }

        prev = prev % 10000
    }

    return count
};

console.log(trailingZeroes(625))