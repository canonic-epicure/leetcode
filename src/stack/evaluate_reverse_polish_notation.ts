function evalRPN(tokens: string[]): number {
    const operator = tokens.pop()

    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        const op1 = evalRPN(tokens)
        const op2 = evalRPN(tokens)

        if (operator === '+')
            return op1 + op2
        else if (operator === '*')
            return op1 * op2
        else if (operator === '/') {
            const res = op2 / op1
            return res >= 0 ? Math.floor(res) : Math.ceil(res)
        } else if (operator === '-')
            return op2 - op1
    } else
        return Number(operator)
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))