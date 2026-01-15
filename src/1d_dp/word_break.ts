type TrieNode = Map<string, TrieNode>

class Trie {
    root: TrieNode = new Map()

    insert(word: string): void {
        let node = this.root

        for (const letter of word) {
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


function wordBreak(s: string, wordDict: string[]): boolean {
    const trie = new Trie()

    wordDict.forEach(word => trie.insert(word))

    const paths: number[] = [ 0 ]
    const seen: Set<number> = new Set()

    while (paths.length > 0) {
        const path = paths.pop()

        let node = trie.root

        let i = path

        for (; i < s.length; i++) {
            const char = s[ i ]

            const child = node.get(char)

            if (child) {
                node = child

                if (node.has('#') && !seen.has(i + 1)) {
                    paths.push(i + 1)
                    seen.add(i + 1)
                }
            }
            else {
                break
            }
        }

        if (i === s.length && node.has('#')) return true
    }

    return false
};

console.log(
    // wordBreak('applepenapple', ["apple","pen"])
    wordBreak(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
        ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
    )
    // wordBreak("abcd", ["a","abc","b","cd"])
)