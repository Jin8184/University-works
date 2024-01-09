def addMatrix(a,b):
    hap = [[0,0,0],[0,0,0],[0,0,0]]

    for i in range(3):
        for j in range(3):
            hap[i][j] = hap[i][j] + a[i][j] + b[i][j]
    return hap

mat1 = [[1,1,1],[2,2,2],[3,3,3]]
mat2 = [[2,2,2],[0,0,0],[3,3,3]]
m = addMatrix(mat1,mat2)
print(m)