function minimumTotal(triangle: number[][]): number {
    const paths: number[] = triangle[ triangle.length - 1 ].slice()

    for (let len = triangle.length; len > 1; len--) {
        const prev_row = triangle[ len - 2 ]

        for (let i = 0; i < paths.length - 1; i++) {
            paths[ i ] = Math.min(
                prev_row[ i ] + paths[ i ],
                prev_row[ i ] + paths[ i + 1 ],
            )
        }
    }

    return paths[ 0 ]
};