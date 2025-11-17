function removeElement(nums: number[], val: number): number {
    if (nums.length === 0) return 0

    let copy_to = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[ i ] !== val) {
            if (i !== copy_to) {
                nums[ copy_to++ ] = nums[ i ]
            }
            else {
                copy_to++
            }
        }
    }

    return copy_to
};