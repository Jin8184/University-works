# def add2(n1,n2):
#     res = n1 + n2
#     return res

# def rectarea(w,h):
#     area = w*h
#     return area  ##함수 안에서는 지역변수! 아래 변수는 다름. 리턴하면 사라짐

# def calcCir(rad):
#     c = 3.14 * 2 * rad
#     return c

# def calcSum(nlist):
#     hap = 0
#     for num in nlist:
#         hap += num
#     return hap

# def calcAvg(nlist):
#     avg = 0
#     hap = calcSum(nlist)
#     avg = hap / len(nlist)
#     return avg

# val = add2(3,5)
# print("3+5=", val)

# val = add2(4,6)
# print("4+6=", val)

# area = rectarea(2, 8)
# print("area=",area)


# rad = int(input("반지름을 입력하세요:"))
# cir = calcCir(rad)
# print("원주=",cir)

# nlist = [1,3,5,8,9]
# avg = calcAvg(nlist)
# print("평균=",avg)

################################################################

# def prtMultiTable(dan):
#     for i in range(1,10,1):
#         print(dan,"*",i,"=",dan*i)

# dan = int(input("단 입력:"))
# prtMultiTable(dan)

##디폴트 인수. 인수에 =로 미리 지정해주면 값이 없어도 기본 값으로 대체되어서 에러 X

# def sub2(x,y):
#     res = x-y
#     return res

# res1 = sub2(5,3)
# print(res1)
# res1 = sub2(3,5)
# print(res1)
# res1 = sub2(y=3,x=5)
# print(res1)

## 지역변수를 전역으로 설정하는건 함수 내에서 global 해주면 됨. 

def get_hap_diff(a,b):
    hap = a+b
    diff = a - b if a > b else b - a ## 삼항연산자?
    return hap, diff 

a = 3
b = 5
hap, diff = get_hap_diff(a,b)
print("합=",hap,"차=",diff)