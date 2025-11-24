function isIsomorphic(s_1: string, s_2: string): boolean {
    if (s_1.length !== s_2.length) return false

    const get_index = (s : string) : number[][] => {
        const char_to_positions: Map<string, number[]> = new Map()
        const positions: number[][] = []

        for (let i = 0; i < s.length; i++) {
            const char = s[ i ]

            let pos = char_to_positions.get(char)

            if (pos === undefined) {
                pos = []
                char_to_positions.set(char, pos)
                positions.push(pos)
            }

            pos.push(i)
        }

        return positions
    }

    const index_1 = get_index(s_1)
    const index_2 = get_index(s_2)

    if (index_1.length !== index_2.length) return false

    return index_1.every((pos_1, idx) => {
        const pos_2 = index_2[idx]

        if (pos_1.length !== pos_2.length) return false

        return pos_1.every((el, i) => el === pos_2[i])
    })
};