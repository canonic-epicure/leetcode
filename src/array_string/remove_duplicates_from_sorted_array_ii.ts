function removeDuplicates(nums: number[]): number {
    const seen: Map<number, number> = new Map()

    let copy_to = 0

    for (let i = 0; i < nums.length; i++) {
        const el = nums[ i ]

        if (!seen.has(el) || seen.get(el) === 1) {
            if (copy_to !== i) {
                nums[ copy_to++ ] = el
            } else {
                copy_to++
            }

            seen.set(el, seen.has(el) ? 2 : 1)
        }
    }

    return copy_to
};