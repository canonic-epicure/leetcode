function generateParenthesis(n: number): string[] {
    const res: string[] = []

    const backtrack = (opening: number, closing: number, opened: number, path: string) => {
        if (closing === 0) {
            res.push(path)
            return
        }

        if (opening > 0) {
            backtrack(opening - 1, closing, opened + 1, path + '(')
            if (opened > 0) backtrack(opening, closing - 1, opened - 1, path + ')')
        }
        else if (closing > 0) {
            backtrack(opening, closing - 1, opened - 1, path + ')')
        }
    }

    backtrack(n, n, 0, '')

    return res
};

console.log(
    generateParenthesis(3)
)