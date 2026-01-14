function myPow(x: number, n: number): number {
    if (n === 0) return 1

    const pow = (x: number, n: number): number => {
        if (x === 0) return 0
        if (x === 1) return 1
        if (n === 1) return x

        if (n % 2 === 0) {
            const half = pow(x, n / 2)

            return half * half
        }
        else {
            const half = pow(x, (n - 1)/ 2)

            return half * half * x
        }
    }

    if (n > 0) {
        return pow(x, n)
    }
    else {
        return 1 / pow(x, -n)
    }
};