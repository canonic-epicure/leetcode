function fullJustify(words: string[], maxWidth: number): string[] {
    words.reverse()

    const lines: string[] = []

    while (words.length > 0) {
        const line: string[] = []
        let line_length = 0

        while (words.length > 0 && line_length + line.length + words[ words.length - 1 ].length <= maxWidth) {
            line.push(words.pop())
            line_length += line[ line.length - 1 ].length
        }

        if (words.length === 0) {
            lines.push(line.join(' ').padEnd(maxWidth, ' '))
        } else if (line.length === 1) {
            lines.push(line.join(' ').padEnd(maxWidth, ' '))
        } else {
            const extra = maxWidth - (line_length + line.length - 1)

            const extra_each = Math.floor(extra / (line.length - 1))
            let remain = extra - extra_each * (line.length - 1)

            let res = ''

            for (let i = 0; i < line.length; i++) {
                const rem = remain > 0 ? ' ' : ''

                res += line[i]

                if (i < line.length - 1) res += ' '.repeat(extra_each + 1) + rem

                remain--
            }

            lines.push(res)
        }
    }

    return lines
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))