type Path = { count: number, ends_on_one: number }

function climbStairs(n: number): number {
    const mem = new Map<number, Path>()

    const do_climb = (n: number): Path => {
        let res = mem.get(n)
        if (res !== undefined) return res

        if (n === 1) {
            res = { count: 1, ends_on_one: 1 }
        }
        else if (n === 2) {
            res = { count: 2, ends_on_one: 1 }
        }
        else {
            const climb_minus_one = do_climb(n - 1)

            res = { count: climb_minus_one.count + climb_minus_one.ends_on_one, ends_on_one: climb_minus_one.count }
        }

        mem.set(n, res)

        return res
    }

    return do_climb(n).count
};