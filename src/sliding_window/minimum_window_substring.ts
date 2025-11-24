function minWindow(s: string, t: string): string {
    const freq_original = new Map<string, number>()

    for (let i = 0; i < t.length; i++) {
        const char = t[ i ]

        freq_original.set(char, (freq_original.get(char) ?? 0) + 1)
    }

    let l = 0
    let r = 0

    let min_win_l = 0
    let min_win_r = 0

    let len = 0

    const freq : Map<string, number> = new Map()

    while (l < s.length && r < s.length) {
        const char = s[ r ]
        r++

        const original = freq_original.get(char)

        if (original !== undefined) {
            const prev = freq.get(char) ?? 0

            if (prev < original) len++

            freq.set(char, prev + 1)
        }

        while (len === t.length && l < r) {
            if (min_win_r === 0 || (r - l) < (min_win_r - min_win_l)) {
                min_win_l = l
                min_win_r = r
            }

            const char = s[ l ]
            const original = freq_original.get(char)

            if (original !== undefined) {
                const prev = freq.get(char) ?? 0

                if (prev === original) len--

                freq.set(char, prev - 1)
            }

            l++
        }
    }

    return s.slice(min_win_l, min_win_r)
};

console.log(minWindow("ADOBECODEBANC", "ABC"))