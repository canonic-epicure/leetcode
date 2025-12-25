export {}


class TrieNode {
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
                node.children.set(letter, child)
            }

            node = child
        }

        node.is_terminal = true
    }


    get_prefix_node(prefix: string): TrieNode | null {
        let node = this.root

        for (const letter of prefix) {
            const child = node.children.get(letter)

            if (!child) return null

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

class WordDictionary {
    trie : Trie = new Trie()

    addWord(word: string): void {
        this.trie.insert(word)
    }

    search(word: string): boolean {
        let nodes = [ this.trie.root ]

        for (const letter of word) {
            let new_nodes: TrieNode[] = []

            for (const node of nodes) {
                if (letter === '.') {
                    new_nodes.push(...node.children.values())
                }
                else {
                    const child = node.children.get(letter)

                    if (child) new_nodes.push(child)
                }
            }

            nodes = new_nodes
        }

        return nodes.some(node => node.is_terminal)
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */