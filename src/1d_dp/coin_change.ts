function coinChange(coins: number[], amount: number): number {
    coins.sort((a, b) => a - b)

    const memo = new Map<number, number>()

    const do_coin_change = (amount: number) : number => {
        if (amount === 0) return 0
        if (amount < coins[ 0 ]) return -1

        let res = memo.get(amount)
        if (res !== undefined) return res

        res = Infinity

        for (let i = coins.length - 1; i >= 0; i--) {
            const coin = coins[ i ]

            if (amount < coin) continue

            const sub = do_coin_change(amount - coin)

            if (sub === -1)
                continue
            else {
                res = Math.min(sub + 1, res)
            }
        }

        if (res === Infinity) res = -1

        memo.set(amount, res)

        return res
    }

    return do_coin_change(amount)
};

console.log(
    // coinChange([1,2,5], 11)
    coinChange([186,419,83,408], 6249) // 20
)