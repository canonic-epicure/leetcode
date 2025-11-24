function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const get_frequencies = (str : string) : Map<string, number> => {
        const freq: Map<string, number> = new Map()

        for (let i = 0; i < str.length; i++) {
            const char = str[i]
            freq.set(char, (freq.get(char) ?? 0) + 1)
        }

        return freq
    }

    const freq_s = get_frequencies(s)
    const freq_t = get_frequencies(t)

    for (const [ char, count ] of freq_s.entries()) {
        if (freq_t.get(char) !== count) return false
    }

    return true
};