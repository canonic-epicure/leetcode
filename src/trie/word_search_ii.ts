export {}

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


    get_prefix_node(prefix: string): TrieNode | null {
        let node = this.root

        for (const letter of prefix) {
            node = node.get(letter) as TrieNode

            if (!node) return null
        }

        return node
    }
}

type TraceNode = {
    parent : TrieNode,
    row : number,
    column : number,
    idx : number
    prev : TraceNode
}

function findWords(board: string[][], words: string[]): string[] {
    const trie = new Trie()
    words.forEach(word => trie.insert(word))

    const M = board.length
    const N = board[0].length

    const res: Set<string> = new Set()

    const to_idx = (r: number, c: number) => r * N + c

    const add_next = (row: number, column: number, prev: TraceNode, trace_nodes_new: TraceNode[], parent: TrieNode) => {
        if (row < 0 || column < 0 || row >= M || column >= N) return

        const idx = to_idx(row, column)

        let node = prev

        while (node) {
            if (idx === node.idx) return

            node = node.prev
        }

        trace_nodes_new.push({
            parent,
            row,
            column,
            idx,
            prev
        })
    }

    const collect_from_start = (row: number, column: number) => {
        let trace_nodes: TraceNode[] = [
            {
                parent : trie.root,
                row,
                column,
                idx : to_idx(row, column),
                prev: null
            }
        ]

        while (trace_nodes.length) {
            let trace_nodes_new: TraceNode[] = []

            for (const trace_node of trace_nodes) {
                const char = board[ trace_node.row ][ trace_node.column ]
                const child = trace_node.parent.get(char) as TrieNode

                if (child) {
                    const word = child.get('#') as string
                    if (word) res.add(word)

                    add_next(trace_node.row + 1, trace_node.column, trace_node, trace_nodes_new, child)
                    add_next(trace_node.row - 1, trace_node.column, trace_node, trace_nodes_new, child)
                    add_next(trace_node.row, trace_node.column + 1, trace_node, trace_nodes_new, child)
                    add_next(trace_node.row, trace_node.column - 1, trace_node, trace_nodes_new, child)
                }
            }

            trace_nodes = trace_nodes_new
        }
    }

    for (let r = 0; r < M; r++) {
        for (let c = 0; c < N; c++) {
            collect_from_start(r, c)
        }
    }

    return Array.from(res)
};


console.log(
    findWords(
        [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
        ["oath","pea","eat","rain"]
    )
)