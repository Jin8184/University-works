import turtle as t

ang = int(input("n각형의 n을 입력하시오: "))

def deg(ang):
	for i in range(ang):
		t.forward(50)
		t.right(360//ang)

if ((ang >= 3)and(ang <= 20)):
    deg(ang)
else:
    print("범위가 너무 큽니다.")