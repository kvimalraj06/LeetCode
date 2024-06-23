""" 35. Search Insert Position """

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        indexToInsert = 0
        for i in range(len(nums)):
            if nums[i] == target:
                return i
            elif nums[i] < target:
                indexToInsert += 1
            else:
                pass
        return indexToInsert