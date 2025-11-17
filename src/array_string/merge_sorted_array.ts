/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (nums1.length !== m + n) throw new Error("Size of array 1 does too small")

    if (m === 0) {
        nums2.forEach((el, i) => {
            nums1[ i ] = el
        })

        return
    }

    if (n === 0) {
        return
    }

    const res = []

    let k = 0
    let i = 0

    while (true) {
        if (k === m) {
            res.push(...nums2.slice(i))

            break
        }

        if (i === n) {
            res.push(...nums1.slice(k, m))

            break
        }

        if (nums1[ k ] <= nums2[ i ]) {
            res.push(nums1[k])
            k++
        } else {
            res.push(nums2[ i ])
            i++
        }
    }

    res.forEach((e, i) => {
        nums1[i] = e
    })
};

