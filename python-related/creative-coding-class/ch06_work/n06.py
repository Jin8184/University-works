def find_list(nlist, n):
    for i in range(n,len(nlist)+1):
        if n == nlist[i]:
            return True
        return False

nlist = [2,5,8,3]
n = int(input("랜덤 숫자 입력:"))
res = find_list(nlist,n)
print(res)