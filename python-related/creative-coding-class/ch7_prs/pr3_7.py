def word3(a) :
    b = 0
    for i in range(len(wlist)):
        if len(wlist[i]) == 3:
            b = b+1
    return b

wlist = ["bag", "computer", "pen", "happy", "book"]
cnt = word3(wlist)
print(cnt)