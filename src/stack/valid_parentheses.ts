function isValid(s: string): boolean {
    const parens: string[] = []

    for (const c of s) {
        if (c === '(' || c === '[' || c === '{')
            parens.push(c)
        else {
            const opening = parens.pop()

            if (c === ')' && opening !== '(')
                return false
            else if (c === ']' && opening !== '[')
                return false
            else if (c === '}' && opening !== '{')
                return false
        }
    }

    return parens.length === 0
};