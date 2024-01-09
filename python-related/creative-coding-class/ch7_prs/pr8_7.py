def maxRow(a):
    # max = [[0,0,0],[0,0,0],[0,0,0]]
    # max = mat[0][0]

    # for i in range(3):
    #     for j in range(3):
    #         if mat[i][j] > max[i][j]:
    #             max[i][j] = mat[i][j]
    # return max
    ############ TOO LONG!!!!
    
    mx = [0,0,0]
    for i in range(3):
        mx[i] = max(mat[i])   ######## I used max() insted.
    return mx

mat = [[1,3,1],[7,2,1],[0,3,5]]
mlist = maxRow(mat)
print(mlist)