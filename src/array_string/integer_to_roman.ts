const romans_symbol = [ 'I', 'V', 'X', 'L', 'C', 'D', 'M' ]
const romans_value  = [ 1,   5,   10,  50,  100, 500, 1000 ]

const romans = new Map<string, number>()

romans_symbol.forEach((sym, index) => {
    romans.set(sym, romans_value[ index ])
})

function get_one_of(pow : number) : string {
    switch (pow) {
        case 0: return 'I'
        case 1: return 'X'
        case 2: return 'C'
        case 3: return 'M'
    }
    throw new Error("Should not happen")
}
function get_five_of(pow : number) : string {
    switch (pow) {
        case 0: return 'V'
        case 1: return 'L'
        case 2: return 'D'
    }
    throw new Error("Should not happen")
}

function intToRoman(num: number): string {
    let val = num

    const str : number[] = []

    while (val > 0) {
        const remainder = val % 10

        str.push(remainder)

        val = (val - remainder) / 10
    }

    let res = ''

    for (let i = str.length - 1; i >= 0; i--) {
        const digit = str[ i ]

        if (digit < 4) {
            res += get_one_of(i).repeat(digit)
        } else if (digit === 4) {
            res += get_one_of(i) + get_five_of(i)
        } else if (digit >= 5 && digit < 9) {
            res += get_five_of(i) + get_one_of(i).repeat(digit - 5)
        } else {
            res += get_one_of(i) + get_one_of(i + 1)
        }
    }

    return res
};

console.log(intToRoman(3749))

// console.log(intToRoman(1994))