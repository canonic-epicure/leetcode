function twoSum(nums: number[], target: number): [number, number] {
    const positions: Map<number, number[]> = new Map()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const indicies = positions.get(num)

        if (indicies !== undefined) {
            indicies.push(i)
        } else {
            positions.set(num, [i])
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i]
        const num2 = target - num1

        const num2_pos = positions.get(num2)

        if (num1 === num2) {
            if (num2_pos.length >= 2) return [num2_pos[0], num2_pos[1]]
        }
        else {
            if (num2_pos !== undefined) return [ i, num2_pos[0]]
        }
    }
}