#인풋으로 전달받은 값을 s에 저장함
s = input()

#s에 저장된 값의 데이터 형식을 출력함
print(type(s))

#인풋된 문자열을 정수로 변환하여 x에 저장
x = int(s)

if x == 10:
    print('10임다')
    
if x == 20:
    print('20임다')
    
else:
    print('몰라')