function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s1 === '' && s2 === '' && s3 === '') return true
    if (s1.length + s2.length !== s3.length) return false

    const memo = new Map<string, boolean>

    const do_is_interleaving = (s1_offset: number, s2_offset: number, s3_offset: number): boolean => {
        const key = s1_offset + '/' + s2_offset + '/' + s3_offset
        let res = memo.get(key)

        if (res !== undefined) return res

        res = false

        if (s1_offset < s1.length || s2_offset < s2.length) {
            const s3_char = s3[ s3_offset ]

            if (s3_char === s1[ s1_offset ] && do_is_interleaving(s1_offset + 1, s2_offset, s3_offset + 1)) {
                res = true
            }
            else if (s3_char === s2[ s2_offset ] && do_is_interleaving(s1_offset, s2_offset + 1, s3_offset + 1)) {
                res = true
            }
        }
        else if (s3_offset === s3.length) {
            res = true
        }

        memo.set(key, res)

        return res
    }

    return do_is_interleaving(0, 0, 0)
};


console.log(
    isInterleave("aabcc", "dbbca", "aadbbcbcac")
)