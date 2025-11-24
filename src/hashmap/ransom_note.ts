function canConstruct(ransomNote: string, magazine: string): boolean {
    const freq_mag: Map<string, number> = new Map()

    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i]
        freq_mag.set(char, (freq_mag.get(char) ?? 0) + 1)
    }

    const freq_note: Map<string, number> = new Map()

    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i]
        freq_note.set(char, (freq_note.get(char) ?? 0) + 1)
    }

    return Array.from(freq_note.entries()).every(([char, count]) => (freq_mag.get(char) ?? 0) >= count)
};