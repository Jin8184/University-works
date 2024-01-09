import turtle as t



def leftClick(x,y):
    if x > 0 and y > 0:
        t.pencolor('red')
    elif x < 0 and y > 0:
        t.pencolor('blue')
    elif x < 0 and y < 0:
        t.pencolor('green')
    elif x > 0 and y < 0:
        t.pencolor('purple')
    else:
        t.pencolor('yellow')

    t.penup()
    t.goto(x,y)
    t.pendown()
    t.circle(30)

t.onscreenclick(leftClick, 1)
t.done()