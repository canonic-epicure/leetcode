const romans_symbol = [ 'I', 'V', 'X', 'L', 'C', 'D', 'M' ]
const romans_value  = [ 1,   5,   10,  50,  100, 500, 1000 ]

const romans = new Map<string, number>()

romans_symbol.forEach((sym, index) => {
    romans.set(sym, romans_value[ index ])
})

function romanToInt(s : string) : number {
    let res = 0

    for (let i = 0; i < s.length; i++) {
        const sym = s[ i ]

        if (i < s.length - 1) {
            const sym_next = s[ i + 1 ]

            const str = sym + sym_next

            let single = false

            switch (str) {
                case 'CD' : res += 400; break
                case 'CM' : res += 900; break
                case 'XL' : res += 40; break
                case 'XC' : res += 90; break
                case 'IV' : res += 4; break
                case 'IX' : res += 9; break
                default:
                    single = true
                    res += romans.get(sym)
            }

            if (!single) i++
        }
        else {
            res += romans.get(sym)
        }
    }

    return res
}

console.log(romanToInt('MCMXCIV'))

export {}