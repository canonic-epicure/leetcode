function findSubstring(s: string, words: string[]): number[] {
    const len = words[0].length
    const size = words.length

    const words_map : Map<string, number> = new Map()

    words.forEach(word => {
        const prev = words_map.get(word)

        if (prev === undefined)
            words_map.set(word, 1)
        else
            words_map.set(word, prev + 1)
    })

    const res: number[] = []

    for (let offset = 0; offset < len; offset++) {
        let left = offset
        let right = offset

        const seen = new Map<string, number>()
        let count = 0

        while (right + len <= s.length) {
            const word = s.slice(right, right + len)
            right += len

            if (words_map.has(word)) {
                seen.set(word, (seen.get(word) ?? 0) + 1)
                count++

                while (seen.get(word) > words_map.get(word)) {
                    const left_word = s.slice(left, left + len)

                    seen.set(left_word, seen.get(left_word) - 1)
                    count--

                    left += len
                }

                if (count === size) res.push(left)
            } else {
                left = right
                count = 0
                seen.clear()
            }
        }

    }

    return res
};


// console.log(findSubstring("lfooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"]))
// console.log(findSubstring("lingmindraboofooowingdingbarrwingmonkeypouwingfooobarrdingwing", ["fooo","barr","wing","ding","wing"]))

console.log(findSubstring("barfoothefoobarman", ["foo","bar"])) // [0,9]

export {}