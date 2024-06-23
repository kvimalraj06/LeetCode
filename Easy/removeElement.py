""" 27. Remove Element """

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        indexToReplace = 0
        for number in nums:
            if number != val:
                nums[indexToReplace] = number
                indexToReplace += 1
        return indexToReplace 
        