function lengthOfLastWord(s: string): number {
    const reg = /(\S+)\s*$/

    const match = reg.exec(s)

    return match ? match[1].length : 0
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))