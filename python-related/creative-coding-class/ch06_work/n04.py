def calc_num2(n1, n2, op):
    if op == "+":
        res = n1 + n2
        return res
    elif op == "-":
        res = n1 - n2
        return res
    elif op == "/":
        res = n1 / n2
        return res
    else:
        res = "write somthing else"

n1, n2, op = eval(input("두 수와 연산자 입력:"))

res = calc_num2(n1, n2, op)
print(res)