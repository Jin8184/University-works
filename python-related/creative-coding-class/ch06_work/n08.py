def root_det(a,b,c):
    val = (b*2)-(4*a*c)
    if val > 0:
        return 1
    elif val == 0:
        return 0
    elif val < 0:
        return -1

det = root_det(2,3,1)
print("value:",det)