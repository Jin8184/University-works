n1, n2, n3 = eval(input("세 정수 입력: "))

if n1 <= n2:
    if n1 <= n3:
        min = n1
    else:
        min = n3
else:
    if n2 <= n3:
        min = n2
    else:
        min = n3

print(min)