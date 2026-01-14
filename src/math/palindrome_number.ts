function isPalindrome(x: number): boolean {
    if (x < 0) return false
    if (x < 10) return true

    const pow = Math.floor(Math.log10(x))

    const half = Math.floor(pow / 2)

    for (let i = 0; i <= half; i++) {
        const pow_left = Math.pow(10, pow - i)
        const pow_right = Math.pow(10, i)

        if (Math.floor(x / pow_left) % 10 !== Math.floor(x / pow_right) % 10) return false
    }

    return true
};