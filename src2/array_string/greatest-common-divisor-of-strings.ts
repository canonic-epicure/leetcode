function gcdOfStrings(str1: string, str2: string): string {
    const min = str1.length < str2.length ? str1 : str2
    const max = str1.length < str2.length ? str2 : str1

    const gcds: number[] = []

    const min_len = min.length
    const max_len = max.length

    for (let i = min.length; i >= 1; i--) {
        if (min_len % i === 0 && max_len % i === 0) gcds.push(i)
    }

    let res : string = ''

    for (const gcd of gcds) {
        let match = true

        for (let offset = 0; offset < gcd; offset++) {
            if (min[ offset ] !== min[ offset ]) {
                match = false
                break
            }

            const letter = min[ offset ]

            let pos = offset

            while (pos < max_len) {
                if (max[ pos ] !== letter) {
                    match = false
                    break
                }

                if (pos < min_len) {
                    if (min[ pos ] !== letter) {
                        match = false
                        break
                    }
                }
                pos += gcd
            }
        }

        if (match) {
            res = min.slice(0, gcd)
            break
        }
    }

    return res
};