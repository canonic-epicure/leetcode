function singleNumber(nums: number[]): number {
    const counts: Array<number> = new Array(32).fill(0)

    nums.forEach(num => {
        let bit = 1
        for (let i = 0; i < 32; i++) {
            if (num & bit) counts[ i ]++

            bit <<= 1
        }
    })

    let res = 0
    let bit = 1

    for (let i = 0; i < 32; i++) {
        if (counts[ i ] % 3 === 1) res |= bit

        bit <<= 1
    }

    return res
};