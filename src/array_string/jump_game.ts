function canJump(nums: number[]): boolean {
    let max_reach = 0

    for (let i = 0; i < nums.length; i++) {
        const can_jump_to = i + nums[i]

        if (can_jump_to > max_reach) {
            max_reach = can_jump_to
        }

        if (max_reach >= nums.length - 1) {
            return true
        }

        if (max_reach <= i) {
            return false
        }
    }

    return false
};