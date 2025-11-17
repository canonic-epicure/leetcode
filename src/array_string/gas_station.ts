function canCompleteCircuit(gas: number[], cost: number[]): number {
    const len = gas.length

    let total = 0
    let sum = 0
    let start_at = 0

    for (let i = 0; i < len; i++) {
        const delta = gas[ i ] - cost[ i ]

        total += delta
        sum += delta

        if (sum < 0) {
            start_at = i + 1
            sum = 0
        }
    }

    return total >= 0 ? start_at : -1
};