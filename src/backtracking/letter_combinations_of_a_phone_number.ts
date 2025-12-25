function letterCombinations(digits: string): string[] {
    const mapping: string[][] = [
        [],
        [],
        'abc'.split(''),
        'def'.split(''),
        'ghi'.split(''),
        'jkl'.split(''),
        'mno'.split(''),
        'pqrs'.split(''),
        'tuv'.split(''),
        'wxyz'.split('')
    ]

    const res: string[] = []

    const dfs = (i: number, path: string) => {
        if (i === digits.length) {
            res.push(path)
            return
        }

        const chars = mapping[ Number(digits[ i ]) ]

        for (const char of chars) {
            dfs(i + 1, path + char)
        }
    }

    dfs(0, '')

    return res
};