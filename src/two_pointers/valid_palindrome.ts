function isPalindrome(s: string): boolean {
    const str = s.toLowerCase().replace(/\W/g, '').replace(/_/g, '')

    const len = str.length

    const half = Math.floor(len / 2)

    for (let i = 0; i < half; i++) {
        if (str[ i ] !== str[ len - i - 1]) return false
    }

    return true
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))