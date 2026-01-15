function lengthOfLIS(nums: number[]): number {
    const memo = new Array(nums.length).fill(undefined)

    const do_length_of_lis = (start: number): number => {
        let res = memo[ start ]
        if (res !== undefined) return res

        res = 1

        if (start < nums.length - 1) {
            let number = nums[ start ]

            for (let i = start + 1; i < nums.length; i++) {
                if (nums[ i ] > number) {
                    // we can either include or ignore this position

                    // 1. we include:
                    const include_lis = do_length_of_lis(i)

                    res = Math.max(res, include_lis + 1)

                    // 2. we ignore it - continue further
                }
            }
        }

        memo[ start ] = res

        return res
    }

    memo.forEach((el, idx) => {
        do_length_of_lis(idx)
    })

    return Math.max(...memo)
};

console.log(
    lengthOfLIS([10,9,2,5,3,7,101,18])
)