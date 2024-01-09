import turtle as t

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
t.onscreenclick(leftClick, 1)
t.onscreenclick(rightClick, 3)

t.done()