function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a)

    let count = 0

    for (let i = 0; i < citations.length; i++) {
        const citation = citations[i]

        if (citation > count) {
            count++
        } else {
            break
        }
    }

    return count
};
