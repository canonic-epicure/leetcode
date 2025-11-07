function removeDuplicates(nums: number[]): number {
    const seen: Set<number> = new Set()

    let copy_to = 0

    for (let i = 0; i < nums.length; i++) {
        const el = nums[ i ]

        if (!seen.has(el)) {
            if (copy_to !== i) {
                nums[ copy_to++ ] = el
            } else {
                copy_to++
            }

            seen.add(el)
        }
    }

    return seen.size
};