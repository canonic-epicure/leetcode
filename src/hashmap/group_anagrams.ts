function groupAnagrams(strings: string[]): string[][] {
    const canonics = strings.map((str, i) : [ string, number ] => {
        return [ str.split('').sort().join(''), i ]
    }).sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0)

    let prev: string = null

    let curr : string[] = []

    const res: string[][] = []

    for (let i = 0; i < canonics.length; i++) {
        const str = canonics[ i ][ 0 ]
        const idx = canonics[ i ][ 1 ]

        if (str === prev) {
            curr.push(strings[idx])
        }
        else {
            if (prev !== null) {
                res.push(curr)

                curr = []
            }
            curr.push(strings[idx])
        }

        prev = str
    }

    res.push(curr)

    return res
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))