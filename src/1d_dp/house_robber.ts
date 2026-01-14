function rob(nums: number[]): number {
    const memo = new Map<number, number>()

    const do_rob = (start: number) : number => {
        let res = memo.get(start)

        if (res !== undefined) return res

        if (start >= nums.length) return 0
        if (start === nums.length - 1) return nums[ nums.length - 1 ]

        res =  Math.max(
            do_rob(start + 1),
            nums[ start ] + do_rob(start + 2),
        )

        memo.set(start, res)

        return res
    }

    return do_rob(0)
};