function minSubArrayLen(target: number, nums: number[]): number {
    let res = Infinity

    let l = 0
    let r = -1

    let sum = 0

    while (sum < target && r < nums.length - 1) {
        r++
        sum += nums[ r ]

        while (sum >= target) {
            const length = r - l + 1

            if (length < res) {
                res = length

                if (res === 1) return 1
            }

            sum -= nums[l]
            l++
        }
    }

    return res === Infinity ? 0 : res
};


console.log(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]))
console.log(minSubArrayLen(7, [5]))
console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))