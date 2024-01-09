import turtle as t

def moveUp():
    t.setheading(90)
    t.forward(20)

t.onkey(moveUp, 'Up')
t.listen()
t.done()