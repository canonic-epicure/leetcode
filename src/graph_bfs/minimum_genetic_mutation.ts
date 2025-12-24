type GeneLetter = 'A' | 'C' | 'G' | 'T'
// type Gene = [ GeneLetter, GeneLetter, GeneLetter, GeneLetter, GeneLetter, GeneLetter, GeneLetter, GeneLetter ]
type Gene = string

function minMutation(startGene: Gene, endGene: Gene, bank: Gene[]): number {
    if (startGene === endGene) return 0

    const bank_genes: Set<Gene> = new Set(bank)

    if (!bank_genes.has(endGene)) return -1

    const genes: Set<Gene> = new Set([ startGene, endGene ])
    bank.forEach(gene => genes.add(gene))

    const genes_arr : Gene[] = Array.from(genes)

    const to_genes: number[][] = []

    for (let i = 0; i < genes_arr.length - 1; i++) {
        const from_gene = genes_arr[ i ]

        let to_gen: number[] = to_genes[ i ]
        if (!to_gen) {
            to_genes[ i ] = to_gen = []
        }

        for (let j = i + 1; j < genes_arr.length; j++) {
            const to_gene = genes_arr[ j ]
            let count = 0

            for (let l = 0; l < 8; l++) {
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

    const visited = new Array(genes_arr.length).fill(Infinity)
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

    return visited[ 1 ] === Infinity ? -1 : visited[ 1 ]
};

console.log(
    minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA","AACCGCTA","AAACGGTA"])
)