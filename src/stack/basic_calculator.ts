type Token = '(' | ')' | number | '-' | '+'

function calculate(s: string): number {
    const is_op = (t: Token) : boolean => t === '-' || t === '+'
    const is_number = (t: Token) : boolean => Number(t) === t

    const fetch_token = (s : string, start : number) : [ Token | null, number ] => {
        let idx = start

        while (idx < s.length && s[ idx ] === ' ') idx++

        if (idx === s.length) return [ null, idx ]

        const char = s[ idx ]

        if (char === '(' || char === ')' || char === '+' || char === '-') {
            return [ char, idx + 1 ]
        }

        let num = ''

        while (idx < s.length && s[ idx ] >= '0' && s[ idx ] <= '9') num += s[ idx++ ]

        return [ Number(num), idx ]
    }

    const evaluate = (s : string, start: number = 0, greedy : boolean = true) : [ number, number ] => {
        let i = start

        let result: number = null

        while (i < s.length) {
            const [ token, end ] = fetch_token(s, i)

            if (is_number(token)) {
                if (result === null) {
                    result = Number(token)

                    if (!greedy) return [ result, end ]
                }
                else
                    throw new Error("Should not happen")

                i = end
            }
            else if (is_op(token)) {
                const [ res2, end2 ] = evaluate(s, end, false)

                if (token === '+') {
                    result += res2
                    i = end2
                }
                else if (token === '-') {
                    result -= res2
                    i = end2
                }
            }
            else if (token === '(') {
                if (result === null) {
                    const [ res2, end2 ] = evaluate(s, end)
                    result = res2
                    i = end2

                    if (!greedy) return [ result, end2 ]
                }
                else
                    throw new Error("Should not happen")
            }
            else if (token === ')') {
                return [ result, end ]
            }
            else if (token === null) {
                i = end
            }
        }

        return [ result, s.length ]
    }

    return evaluate(s, 0)[0]
};

// console.log(calculate("1 + 1"))
// console.log(calculate(" 2-1 + 2 "))
// console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
console.log(calculate("(7)-(0)+(4)"))
