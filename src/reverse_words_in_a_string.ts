function reverseWords(s: string): string {
    const words = s.trim().split(/\s+/)

    words.reverse()

    return words.join(' ')
};

console.log(reverseWords("the sky is blue"))