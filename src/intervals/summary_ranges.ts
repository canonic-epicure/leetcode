function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) return []

    const res: string[] = []

    let range_start: number = 0
    let range_end: number = 0

    let prev: number = null

    for (const num of nums) {
        if (prev === null) {
            prev = num
            range_start = num
            range_end = num
        }
        else {
            if (prev + 1 === num) {
                range_end = num
            } else {
                res.push(range_start === range_end ? String(range_start) : `${range_start}->${range_end}`)
                prev = num
                range_start = num
                range_end = num
            }
            prev = num
        }
    }
    res.push(range_start === range_end ? String(range_start) : `${range_start}->${range_end}`)

    return res
};