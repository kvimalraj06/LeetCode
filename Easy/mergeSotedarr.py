""" 88. Merge Sorted Array """

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        if n==0:
            return
        endIndexToInsert = (m+n)-1
        while m>0 and n>0:
            if nums2[n-1] > nums1[m-1]:
                nums1[endIndexToInsert] = nums2[n-1]
                n -= 1
            else:
                 nums1[endIndexToInsert] = nums1[m-1]
                 m -= 1
            endIndexToInsert -= 1
        while n > 0:
            nums1[endIndexToInsert] = nums2[n-1]
            n-=1
            endIndexToInsert-=1
        
        