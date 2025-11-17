function convert(s: string, num_rows: number): string {
    if (num_rows === 1) return s

    const len = num_rows * 2 - 2

    let res = ''

    for (let row = 0; row < num_rows; row++) {
        for (let i = row; i < s.length; i += len) {
            res += s[ i ]

            if (row > 0 && row < num_rows - 1) {
                const idx = Math.floor(i / len) * len + len - row

                if (idx < s.length) res += s[ idx ]
            }
        }
    }

    return res
};

console.log(convert("A", 1))