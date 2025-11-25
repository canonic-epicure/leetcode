type Seq = { start : number, end : number }

function longestConsecutive(nums: number[]): number {
    const map: Map<number, Seq> = new Map()

    for (const num of nums) {
        const seq_num = map.get(num)
        const seq_prev = map.get(num - 1)
        const seq_next = map.get(num + 1)

        if (seq_num) {

        } else if (seq_prev && seq_next) {
            seq_next.start = seq_prev.start
            seq_prev.end = seq_next.end
            for (let i = seq_prev.start; i <= num; i++)
                map.set(i, seq_next)
        } else if (seq_prev) {
            seq_prev.end = Math.max(seq_prev.end, num)
            map.set(num, seq_prev)
        } else if (seq_next) {
            seq_next.start = Math.min(seq_next.start, num)
            map.set(num, seq_next)
        } else {
            map.set(num, { start: num, end: num })
        }
    }

    let max = 0

    for (const num of nums) {
        const seq = map.get(num)

        const length = seq.end - seq.start + 1

        if (length > max) max = length
    }

    return max
};


// console.log(longestConsecutive([100,4,200,1,3,2]))

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
