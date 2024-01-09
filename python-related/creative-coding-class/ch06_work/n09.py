# 심심해서 풀어봤습니다.

#n = 수열의 n번째 항
#a = 공차(찻집아님)
#b = 초기값

# 초기값이 1이고 공차가 3인 등차수열의 4번째 항 값은 13이 아니라 10인데...?
# 1, 4, 7, 10, 13인데 첫번째 항이 1인지 0인지 중학교때 그만 졸아서 헷갈리나 모르겠다!
# 이게 파이썬이야 넘파이야 판다스야

def seq(n,a,b):
    n=int(n)
    a=int(a)
    b=int(b)
    se = b
    for i in range(b,n):
        se += a
    return se

seqen = seq(4,3,1)
print(seqen)