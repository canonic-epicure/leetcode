function permute(nums: number[]): number[][] {
    const res: number[][] = []

    const path: number[] = []

    const backtrack = (nums: number[]) => {
        if (nums.length === 0) {
            res.push(path.slice())
            return
        }

        for (let i = 0; i < nums.length; i++) {
            const el = nums[i]

            path.push(el)

            nums.splice(i, 1)

            backtrack(nums)

            nums.splice(i, 0, el)

            path.pop()
        }
    }

    backtrack(nums)

    return res
};

console.log(
    permute([1,2,3])
)