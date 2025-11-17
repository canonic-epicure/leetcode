function jump(nums: number[]): number {
    const reach_steps: number[] = Array(nums.length).fill(1e10)
    reach_steps[0] = 0

    let can_reach = 0

    for (let i = 0; i < nums.length - 1; i++) {
        const jumps = nums[i]
        const can_jump_to = i + jumps

        if (can_jump_to > can_reach) {
            can_reach = can_jump_to
            for (let j = i + 1; j <= can_jump_to && j < nums.length; j++) {
                reach_steps[j] = Math.min(reach_steps[j], reach_steps[i] + 1)
            }
        }
    }

    return reach_steps[reach_steps.length - 1]
};