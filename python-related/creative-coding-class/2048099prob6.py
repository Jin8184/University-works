n1, n2, n3 = eval(input("세 정수 입력: "))
yes = "삼각형을 만들 수 있습니다."
no = "삼각형을 만들 수 없습니다."

if (n1 + n2) <= n3:
    print(no)
elif (n1 + n3) <= n2:
    print(no)
elif (n2 + n3) <= n1:
    print(no)
else:
    print(yes)
