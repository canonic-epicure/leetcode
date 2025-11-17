function twoSum(numbers: number[], target: number): number[] {
    const num_to_pos = new Map<number, number>

    for (let i = 0; i < numbers.length; i++) {
        const num1 = numbers[ i ]

        num_to_pos.set(num1, i)
    }

    for (let i = 0; i < numbers.length - 1; i++) {
        const num1 = numbers[ i ]

        const remainder = target - num1
        const pos = num_to_pos.get(remainder)

        if (pos !== undefined && pos !== i) {
            return [ i + 1, pos + 1 ]
        }
    }
};


console.log(twoSum([2,7,11,15], 9))

