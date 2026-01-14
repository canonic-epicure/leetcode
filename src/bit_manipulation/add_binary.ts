function addBinary(a: string, b: string): string {
    const res: string[] = []

    const max = Math.max(a.length, b.length)

    let extra = 0

    for (let i = 0; i < max; i++) {
        const a_idx = a.length - 1 - i
        const a_char = a_idx >= 0
            ? a[ a_idx ] === '0' ? 0 : 1
            : 0

        const b_idx = b.length - 1 - i
        const b_char = b_idx >= 0
            ? b[ b_idx ] === '0' ? 0 : 1
            : 0

        let digit = a_char + b_char + extra
        extra = 0

        if (digit >= 2) {
            extra = 1
            digit -= 2
        }

        res.push(String(digit))
    }

    if (extra > 0) res.push('1')

    res.reverse()

    return res.join('')
};