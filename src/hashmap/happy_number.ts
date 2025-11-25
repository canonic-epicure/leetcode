function isHappy(n: number): boolean {
    const memo : Map<number, number> = new Map()

    const digits_sum = (n : number) : number => {
        let sum = 0

        while (n > 0) {
            const digit = n % 10

            sum += digit * digit

            n -= digit

            n /= 10
        }

        return sum
    }


    while (true) {
        if (memo.has(n)) return false

        const sum = digits_sum(n)

        if (sum === 1) return true

        memo.set(n, sum)

        n = sum
    }

};