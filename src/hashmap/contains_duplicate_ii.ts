function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const positions: Map<number, number[]> = new Map()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[ i ]

        let pos = positions.get(num)

        if (pos === undefined) {
            pos = [ i ]
            positions.set(num, pos)
        } else {
            pos.push(i)
        }

        if (pos.length > 1 && pos[ pos.length - 1 ] - pos[ pos.length - 2 ] <= k) return true
    }

    return false
};