class TrieNode {
    letter : string = ''

    is_terminal : boolean = false

    children : Map<string, TrieNode> = new Map()
}

class Trie {
    root: TrieNode = new TrieNode()

    insert(word: string): void {
        let node = this.root

        for (let i = 0; i < word.length; i++) {
            const letter = word[ i ]

            let child = node.children.get(letter)

            if (!child) {
                child = new TrieNode()
                child.letter = letter
                node.children.set(letter, child)
            }

            node = child
        }

        node.is_terminal = true
    }


    get_prefix_node(prefix: string): TrieNode | null {
        let node = this.root

        for (let i = 0; i < prefix.length; i++) {
            const letter = prefix[ i ]

            let child = node.children.get(letter)

            if (!child) {
                return null
            }

            node = child
        }

        return node
    }


    search(word: string): boolean {
        return this.get_prefix_node(word)?.is_terminal ?? false
    }

    startsWith(prefix: string): boolean {
        return Boolean(this.get_prefix_node(prefix))
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */