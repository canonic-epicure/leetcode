from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)

        prods_left_to_right = [0] * length
        prods_right_to_left = [0] * length
        res = [0] * length

        for i, value in enumerate(nums):
            if i == 0:
                prods_left_to_right[i] = nums[i]
                prods_right_to_left[length - i - 1] = nums[-1]
            else:
                prods_left_to_right[i] = prods_left_to_right[ i - 1 ] * nums[i]
                prods_right_to_left[length - i - 1] = prods_right_to_left[length - i] * nums[length - i - 1]

        for i in range(length):
            if i == 0:
                res[i] = prods_right_to_left[i + 1]
            elif i == length - 1:
                res[ i ] = prods_left_to_right[ i - 1 ]
            else:
                res[ i ] = prods_left_to_right[ i - 1 ] * prods_right_to_left[i + 1]

        return res

s = Solution()

print(s.productExceptSelf([1,2,3,4]))