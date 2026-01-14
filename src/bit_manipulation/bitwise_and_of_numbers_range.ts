function rangeBitwiseAnd(left: number, right: number): number {
    if (left === right) return left

    let is_in = false

    let res = 0

    for (let i = 31; i >= 0; i--) {
        const bit = 1 << i

        const right_bit = right & bit
        if (right_bit) is_in = true

        if (is_in) {
            const left_bit = left & bit

            if (right_bit !== left_bit)
                break
            else if (right_bit)
                res |= bit
        }
    }

    return res
};


console.log(
    rangeBitwiseAnd(416, 436)
)