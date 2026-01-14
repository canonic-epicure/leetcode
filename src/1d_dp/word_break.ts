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


function wordBreak(s: string, wordDict: string[]): boolean {
    const trie = new Trie()

    // wordDict.forEach(word => trie.insert(word))

    trie.insert('hit')

    const res = trie.find('hi')

    trie.

};

console.log(
    wordBreak('applepenapple', ["apple","pen"])
)