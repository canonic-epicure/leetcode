function maximizeExpressionOfThree(nums: number[]): number {
    const nums_sorted = nums.sort((a, b) => a - b)

    const len = nums.length

    return nums_sorted[ len - 1 ] + nums[ len - 2 ] - nums[ 0 ]
};


console.log(maximizeExpressionOfThree([-2,0,5,-2,4]))