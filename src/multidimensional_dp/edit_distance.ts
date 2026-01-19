function minDistance(word1: string, word2: string): number {
    const distances = Array.from({ length : word1.length + 1 }, _ => new Array(word2.length + 1).fill(-1))

    for (let i1 = 0; i1 <= word1.length; i1++) {
        for (let i2 = 0; i2 <= word2.length; i2++) {
            if (i1 === 0) {
                distances[ i1 ][ i2 ] = i2
            }
            else if (i2 === 0) {
                distances[ i1 ][ i2 ] = i1
            }
            else {
                distances[ i1 ][ i2 ] = Math.min(
                    distances[ i1 - 1 ][ i2 - 1 ] + (word1[ i1 - 1 ] === word2[ i2 - 1 ] ? 0 : 1),
                    distances[ i1 ][ i2 - 1 ] + 1,
                    distances[ i1 - 1 ][ i2 ] + 1
                )
            }
        }
    }

    return distances[ word1.length ][ word2.length ]
};

console.log(
    minDistance("horse", "ros")
)