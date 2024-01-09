def common(a,b):
    for i in range(len(list1)):
        if list2.count(list1[i]) != 0:
            return True
        else:
            return False

list1 = [3,7,9,11,15]
list2 = [2,3,5]
print(common(list1,list2))