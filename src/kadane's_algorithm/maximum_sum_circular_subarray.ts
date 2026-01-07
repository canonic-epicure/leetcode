// function maxSubArray(nums: number[]): { best: number, l: number, r: number } {
//     let current = nums[0]
//     let cur_l = 0
//     let best = current
//     let l = 0
//     let r = 0
//
//     for (let i = 1; i < nums.length; i++) {
//         const el = nums[ i ]
//
//         if (el >= current + el) {
//             cur_l = i
//         }
//
//         current = Math.max(el, current + el)
//         best = Math.max(best, current)
//
//         if (best > current) {
//             l = cur_l
//             r = i
//         }
//     }
//
//     return { best, l, r }
// };

function maxSubarraySumCircular(nums: number[]): number {
    if (nums.length === 1) return nums[0]

    let current = nums[0]
    let l = 0
    let best = current
    let best_l = 0
    let best_r = 1

    const n = nums.length
    const len = n * 2

    for (let i = 1; i < len; i++) {
        const el = nums[ i % n ]

        if (i - l + 1 > n) {
            l++
            let current_2 = nums[ l % n ]

            for (let k = l + 1; k < i; k++) {
                const el_2 = nums[ k % n ]

                if (el_2 >= current_2 + el_2) {
                    l = k
                }

                current_2 = Math.max(el_2, current_2 + el_2)
                best = Math.max(best, current_2)
            }
            current = current_2
        }

        if (el >= current + el) {
            l = i
        }

        current = Math.max(el, current + el)
        best = Math.max(best, current)

        if (best > current) {
            best_l = l
            best_r = i + 1
        }
    }

    return best
};

console.log(
    maxSubarraySumCircular(
        // [5,-3,5]
        [6,9,-3]
        // [0,5,8,-9,9,-7,3,-2]
        // [-5,-2,5,6,-2,-7,0,2,8]
        // [1,-2,3,-2]
        // [-92,78,-45,-63,1,34,81,50,14,91,-77,-54,13,-88,24,37,-12,59,-48,-62,57,-22,-8,85,48,71,12,1,-20,36,-32,-14,39,46,-41,75,13,-23,98,10,-88,64,50,37,-95,-32,46,-91,10,79,-11,43,-94,98,79,42,51,71,4,-30,2,74,4,10,61,98,57,98,46,43,-16,72,53,-69,54,-96,22,0,-7,92,-69,80,68,-73,-24,-92,-21,82,32,-1,-6,16,15,-29,70,-66,-85,80,50,-3] // 1437
    )
)