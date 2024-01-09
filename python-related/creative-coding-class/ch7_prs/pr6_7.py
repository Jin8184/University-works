def sumMat(a):
    hap = 0
    for i in range(3):
        for j in range(2):
            hap = hap + mat[i][j]
    return hap

mat = [[1,1],[2,2],[1,1]]
hap = sumMat(mat)
print(hap)