Python 3.10.7 (tags/v3.10.7:6cc6b13, Sep  5 2022, 14:08:36) [MSC v.1933 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
grade = 5
print(grade)
5
type(grade)
<class 'int'>
grade = "Hello"
type(grade)
<class 'str'>
print(grade)
Hello
print("lol\nlol")
lol
lol
code = ord('A')
print(code)
65
age =input("나이를 입력: ")
나이를 입력: 20
age +5
Traceback (most recent call last):
  File "<pyshell#11>", line 1, in <module>
    age +5
TypeError: can only concatenate str (not "int") to str
>>> type(age)
<class 'str'>
>>> age = int(age)
>>> myage = age + 5
>>> print(myage)
25
>>> type(myage)
<class 'int'>
>>> age =int(input("나이를 입력: "))
나이를 입력: 20
>>> age + 5
25
>>> "tis"+"bok"
'tisbok'
>>> age = 20
>>> 
>>> print("%d"% age)
20
>>> num1 = 20
>>> num2 = 145
>>> num3 = 490835
>>> print(num1); print(num2); print(num3)
20
145
490835
>>> rnum = 13.1465
>>> print
<built-in function print>
>>> print("%5.2f" % num)
Traceback (most recent call last):
  File "<pyshell#29>", line 1, in <module>
    print("%5.2f" % num)
NameError: name 'num' is not defined. Did you mean: 'num1'?
>>> print("%5.2f" % rnum)
13.15
