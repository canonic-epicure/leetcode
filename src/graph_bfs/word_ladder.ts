function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (beginWord === endWord) return 0

    const words_set: Set<string> = new Set(wordList)
    if (!words_set.has(endWord)) return 0

    const words: Set<string> = new Set([ beginWord, endWord ])
    wordList.forEach(word => {
        if (word.length === beginWord.length) words.add(word)
    })

    const words_arr : string[] = Array.from(words)

    const to_genes: number[][] = []

    for (let i = 0; i < words_arr.length - 1; i++) {
        const from_gene = words_arr[ i ]

        let to_gen: number[] = to_genes[ i ]
        if (!to_gen) {
            to_genes[ i ] = to_gen = []
        }

        for (let j = i + 1; j < words_arr.length; j++) {
            const to_gene = words_arr[ j ]
            let count = 0

            for (let l = 0; l < to_gene.length; l++) {
                if (from_gene[ l ] !== to_gene[ l ]) {
                    count++

                    if (count > 1) break
                }
            }

            if (count === 1) {
                to_gen.push(j)

                if (!to_genes[ j ]) to_genes[ j ] = []
                to_genes[ j ].push(i)
            }
        }
    }

    const to = 1
    let from = [ 0 ]

    const visited = new Array(words_arr.length).fill(Infinity)
    visited[ 0 ] = 0

    while (from.length) {
        let from2: number[] = []

        for (let i = 0; i < from.length; i++) {
            const tos = to_genes[ from[ i ] ]

            if (tos) {
                for (const t of tos) {
                    if (visited[ t ] === Infinity) {
                        visited[ t ] = visited[ from[ i ] ] + 1

                        if (t === to) {
                            from2 = []
                            break
                        }

                        from2.push(t)
                    }
                }
            }
        }

        from = from2
    }

    return visited[ 1 ] === Infinity ? 0 : visited[ 1 ] + 1
};
