function lengthOfLongestSubstring(s: string): number {
    let len = 0

    let l = 0
    let r = 0

    const seen = new Set<string>()

    while (r < s.length) {
        r++
        const r_char = s[ r - 1 ]

        if (seen.has(r_char)) {
            let l_char

            do {
                l_char = s[ l ]
                l++
                if (l_char !== r_char)
                    seen.delete(l_char)
                else
                    break
            } while (true)

        } else {
            seen.add(r_char)

            if (len < seen.size) len = seen.size
        }
    }

    return len
};


console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("aabaab!bb"))