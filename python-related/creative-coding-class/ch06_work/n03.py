def area_circle(rad, pii=3.14):
    global area
    area = pii * rad * rad
    return area

area_circle(2, 3.14159)
print("원의 면적은", area)

area_circle(3)
print("원의 면적은", area)



# def area_circle(rad, pii=3.14):
#     area = pii * rad * rad
#     return area


# r = float(input("원의 반지름을 입력하시오.:"))
# pi = float(input("원의 원주율을 입력하시오.(원주율 기본값 = 3.14):"))

# area = area_circle(rad = r, pii = pi)
# print("원의 면적은", area)
# if area is not None:
    # print("원의 면적은!", area)
# else:
    # area = area_circle(r)
    # print("원의 면적은", area)

