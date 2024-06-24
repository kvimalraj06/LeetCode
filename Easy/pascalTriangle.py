""" 118. Pascal's Triangle """

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        initialList = [[1]]
        for i in range(1,numRows):
            temp = [0] +initialList[-1] + [0]
            triangleRow = []
            for j in range(len(initialList[-1]) + 1):
                triangleRow.append(temp[j] + temp[j+1])
            initialList.append(triangleRow)
        return initialList
        