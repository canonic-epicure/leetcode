function mergeAlternately(word1: string, word2: string): string {
    let i1 = 0, i2 = 0
    let res = ''

    while (i1 < word1.length || i2 < word2.length) {
        res += word1[ i1 ] || ''
        res += word2[ i2 ] || ''

        i1++
        i2++
    }

    return res
};