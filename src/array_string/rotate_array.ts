/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length

    const res = [ ...nums.slice(-k), ...nums.slice(0, nums.length - k + 1) ]

    nums.forEach((el, i) => {
        nums[ i ] = res[ i ]
    })
};