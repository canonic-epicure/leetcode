function reverseBits(n: number): number {
    let res: number = 0

    for (let b = 0; b < 32; b++) {
        const bit = 1 << b
        const res_bit = 1 << (31 - b)

        if (n & bit) res |= res_bit
    }

    return res
};