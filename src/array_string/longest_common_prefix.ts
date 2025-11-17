function longestCommonPrefix(strs: string[]): string {
    let prefix = ''

    for (let i = 0; true; i++) {
        if (strs[ 0 ].length <= i) break

        const char = strs[ 0 ][ i ]

        if (strs.every(str => str[ i ] === char)) {
            prefix += char
        } else {
            break
        }
    }

    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))

