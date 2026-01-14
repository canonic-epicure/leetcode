function plusOne(digits: number[]): number[] {
    let carry = 1

    const res: number[] = []

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[ i ] + carry

        carry = 0

        if (digit === 10) {
            digit = 0
            carry = 1
        }

        res.push(digit)
    }

    if (carry) res.push(carry)

    return res.reverse()
};