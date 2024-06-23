""" 66. Plus One """

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        resultArr = []
        concatNum = ''
        for digit in digits:
            concatNum += str(digit)
        concatNum = str(int(concatNum) + 1)
        for digit in concatNum:
            resultArr.append(int(digit))
        return resultArr

        