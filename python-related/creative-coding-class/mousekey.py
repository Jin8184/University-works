import turtle as t

def leftClick(x, y):
    t.pencolor('red')
    t.penup()
    t.goto(x, y)
    t.pendown()
    for i in range(5):
        t.forward(25)
        t.right(144)

def rightClick(x, y):
    t.pencolor('blue')
    t.penup()
    t.goto(x, y)
    t.pendown()
    for i in range(5):
        t.forward(20)
        t.right(144)

t.onscreenclick(leftClick, 1)
t.onscreenclick( rightClick, 3)

t.done()