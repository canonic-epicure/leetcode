function singleNumber(nums: number[]): number {
    return nums.reduce((acc, el) => acc ^ el, 0)
};