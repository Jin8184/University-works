def diffMaxMin(a):
    max = nlist[0]
    min = nlist[0]
    for xnum in nlist:
        if xnum > max:
            max = xnum
    for nnum in nlist:
        if nnum < min:
            min = nnum
    res = max - min
    return res

nlist = [7,2,3,1,5,4,9]
d = diffMaxMin(nlist)
print(d)