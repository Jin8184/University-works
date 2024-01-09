import turtle as t
import random as ran
from urllib.request import HTTPPasswordMgrWithDefaultRealm

def crazy():
    t.speed(1000)
    for i in range(20):
        rn = ran.randint(1,360)
        t.forward(10)
        t.right(rn)

def house():
    t.penup()
    t.goto(0, 100)
    t.pendown()
    t.goto(-50, 50)
    t.goto(50, 50)
    t.goto(0, 100)

    t.goto(-50, 50)
    t.goto(-50, -50)
    t.goto(50, -50)
    t.goto(50, 50)
    t.goto(-50, 50)
    

def leftClick(x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    for i in range(5):
        t.forward(40)
        t.right(144)

def rightClick(x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    for i in range(5):
        t.forward(55)
        t.right(144)

def red():
    t.pencolor("red")
    
def green():
    t.pencolor("green")

def blue():
    t.pencolor("blue")

def yellow():
    t.pencolor("yellow")

t.listen()

t.onkey(red, '1')
t.onkey(green, '2')
t.onkey(blue, '3')
t.onkey(yellow, '4')

t.onkey(crazy, 'c')
t.onkey(house, 'h')

t.onscreenclick(leftClick, 1)
t.onscreenclick(rightClick, 3)

t.done()