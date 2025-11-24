function wordPattern(pattern: string, s: string): boolean {
    const letters = pattern.split('')
    const words = s.split(' ')

    if (letters.length !== words.length) return false

    const map_letter_to_word: Map<string, string> = new Map()
    const map_word_to_letter: Map<string, string> = new Map()

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[ i ]
        const word = words[ i ]

        const mapped_word = map_letter_to_word.get(letter)

        if (mapped_word === undefined) {
            map_letter_to_word.set(letter, word)
        }
        else {
            if (mapped_word !== word) return false
        }

        const mapped_letter = map_word_to_letter.get(word)

        if (mapped_letter === undefined) {
            map_word_to_letter.set(word, letter)
        }
        else {
            if (mapped_letter !== letter) return false
        }
    }

    return true
};