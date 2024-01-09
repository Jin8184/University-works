# n1, n2 = eval(input("두 정수를 입력하시오: "))

# if (n1+n2) % 2 == 0:
#     print("두 수의 합은 짝수입니다.")
# else:
#     print("두 수의 합은 홀수입니다.")



# result = int(input("점수를 입력하시오: "))

# if result >= 80:
#     print('합격')
# elif result >=60 and result < 80:
#     print("재시험")
# else:
#     print("불합격")



# n1, n2 = eval(input("두 정수 입력"))

# if n1 >= 0 and n1 >= 0:
#     print("1")
# elif n1 < 0 and n2 < 0:
#     print("2")
# else:
#     print("3")




# t1 = str(input("문자를 입력: "))

# if t1 == ("a") or t1 == ("e") or t1 == ("i") or t1 == ("o") or t1 == ("u"):
#     print("모음 입력")
# else:
#     print("자음 입력")



# n1, n2, n3 = eval(input("세 정수 입력: "))

# if n1 <= n2:
#     if n1 <= n3:
#         min = n1
#     else:
#         min = n3
# else:
#     if n2 <= n3:
#         min = n2
#     else:
#         min = n3

# print(min)

## min = n1
## if min >= n2:
##     min = n2
## if min >= n3:
##     min = n3
## print(min)



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

    #숙제라네...