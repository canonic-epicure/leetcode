

type TrieNode = Map<string, TrieNode | '#'>

class Trie {
    root: TrieNode = new Map()

    insert(word: string): void {
        let node = this.root

        for (let i = 0; i < word.length; i++) {
            const letter = word[ i ]

            let child = node.get(letter) as TrieNode

            if (!child) {
                child = new Map()
                node.set(letter, child)
            }

            node = child
        }

        // @ts-ignore
        node.set('#', word)
    }
}

function findWords(board: string[][], words: string[]): string[] {
    const trie = new Trie()
    words.forEach(word => trie.insert(word))

    const M = board.length
    const N = board[0].length

    const res: string[] = []

    const collect = (row: number, column: number, parent: TrieNode) => {
        if (row < 0 || column < 0 || row >= M || column >= N) return

        const char = board[ row ][ column ]

        if (char === '.') return

        const child = parent.get(char) as TrieNode

        if (child) {
            const word = child.get('#') as string
            if (word) {
                res.push(word)
                child.delete('#')
            }

            board[ row ][ column ] = '.'

            collect(row + 1, column, child)
            collect(row - 1, column, child)
            collect(row, column + 1, child)
            collect(row, column - 1, child)

            board[ row ][ column ] = char

            if (child.size === 0) parent.delete(char)
        }
    }

    for (let r = 0; r < M; r++) {
        for (let c = 0; c < N; c++) {
            collect(r, c, trie.root)
        }
    }

    return res
};


console.log(
    findWords(
        [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
        ["oath","pea","eat","rain"]
    )
)