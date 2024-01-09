def diff2(n1, n2):
    res = n1 - n2 if n1 > n2 else n2 - n1
    return res

n1,n2 = eval(input("두 수를 입력하시오 (예; 2, 5):"))
res = diff2(n1,n2)
print(res)