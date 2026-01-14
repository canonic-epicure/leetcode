function findPeakElement(nums: number[]): number {
    let l = 0
    let r = nums.length

    while (l < r) {
        const m = Math.floor((l + r) / 2)
        const el = nums[ m ]
        const el_m_1 = m > 0 ? nums[ m - 1 ] : -Infinity
        const el_p_1 = m < nums.length - 1 ? nums[ m + 1 ] : -Infinity

        if (el_m_1 < el && el > el_p_1) {
            return m
        }
        else if (el_m_1 < el && el < el_p_1) {
            l = m + 1
        }
        else if (el_m_1 > el && el > el_p_1) {
            r = m
        }
        else {
            r = m
        }
    }

    return l

};