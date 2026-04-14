/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let idx_to_insert = 0

    for (let i = 0; i < nums.length; i++) {
        const el = nums[ i ]

        if (el !== 0) {
            if (i !== idx_to_insert) {
                nums[ idx_to_insert ] = el
            }

            idx_to_insert++
        }
    }

    for (let i = idx_to_insert; i < nums.length; i++) {
        nums[ i ] = 0
    }
};

console.log(moveZeroes([1, 2, 0, 1]))