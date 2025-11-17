function isSubsequence(s: string, t: string): boolean {
    let s_i = 0

    for (let i = 0; i < t.length; i++) {
        if (t[ i ] === s[ s_i ]) s_i++

        if (s_i === s.length) return true
    }

    return false
};

console.log(isSubsequence("abc", "ahbgdc"))

