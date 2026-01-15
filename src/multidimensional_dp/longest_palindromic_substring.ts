function longestPalindrome(s: string): string {
    const max_palindrom = (center: number): number => {
        let left = Math.floor(center)
        let right = Math.ceil(center)
        const delta = left === right ? -1 : 0

        let count = 0

        while (left >= 0 && right < s.length && s[ left ] === s[ right ]) {
            count++
            left--
            right++
        }

        return count * 2 + delta
    }

    const mid_length_to_string = (center: number, len: number): string => {
        const left = Math.floor(center)
        const right = Math.ceil(center)

        const half = Math.floor(len / 2)

        return left === right ? s.slice(left - half, left + half + 1) : s.slice(left - half + 1, right + half)
    }

    const mid = (s.length - 1) / 2

    let max_center = 0
    let max_len = 1

    for (let r = mid, potentially = s.length; r <= s.length - 1.5 && potentially > max_len; r += 0.5, potentially--) {
        const len = max_palindrom(r)

        if (len > max_len) {
            max_len = len
            max_center = r
        }
    }
    for (let l = mid - 0.5, potentially = s.length - 1; l >= 0.5 && potentially > max_len; l -= 0.5, potentially--) {
        const len = max_palindrom(l)

        if (len > max_len) {
            max_len = len
            max_center = l
        }
    }

    return mid_length_to_string(max_center, max_len)
};

console.log(
    // longestPalindrome('babad'),
    // longestPalindrome('cbbd'),
    // longestPalindrome('bb'),
    // longestPalindrome('abb')
    longestPalindrome('bacabab')
)