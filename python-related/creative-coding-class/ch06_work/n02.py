def quot_div(n1, n2):
    res = int(n1 / n2) if n1 > n2 else int(n2 / n1)
    leftover = n1 % n2 if n1 > n2 else n2 / n1

    return res, leftover

n1,n2 = eval(input("큰 정수와 작은 정수를 입력하시오 (예; 4, 3):"))
res, leftover = quot_div(n1,n2)
print("몫과 나머지는", res , leftover)