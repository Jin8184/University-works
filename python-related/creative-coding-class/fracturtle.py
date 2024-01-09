# from turtle import *

# import turtle
  

# tur = turtle.Turtle()
  

# tur.speed(30000)
  
# tur.getscreen().bgcolor("black")
# tur.color("cyan")

# tur.penup()
  
# tur.goto((-200, 50))
  

# tur.pendown()
  

# def star(turtle, size):
#     if size <= 10:
#         return
#     else:
#         for i in range(5):
            

#             turtle.forward(size)
#             star(turtle, size/3)
  

#             turtle.left(216)
  
 
# star(tur, 360)
# turtle.done()






# from turtle import *
# import turtle
  
  
# speed('fastest')
  

# right(-90)
  

# angle = 30
  

# def yaxis(size, lvl):   
  
#     if lvl > 0:
#         colormode(255)
          
       
#         pencolor(0, 255//lvl, 0)
          
#         forward(size)
  
#         right(angle)
 
#         yaxis(0.8 * size, lvl-1)
          
#         pencolor(0, 255//lvl, 0)
          
#         lt( 2 * angle )
  
#         yaxis(0.8 * size, lvl-1)
          
#         pencolor(0, 255//lvl, 0)
          
#         right(angle)
#         forward(-size)
           
# yaxis(80, 7)
# turtle.done()






# from turtle import *
# import turtle

# speed = 5
# bg_color = "black"
# pen_color = "red"
# screen_width = 800
# screen_height = 800
# drawing_width= 700
# drawing_height = 700
# pen_width = 5
# title = "Python Guides"
# fractal_depth = 3


# def drawline(tur, pos1, pos2):
#     # tracing the algorithm.
#     tur.penup()
#     tur.goto(pos1[0], pos1[1])
#     tur.pendown()
#     tur.goto(pos2[0], pos2[1])


# def recursivedraw(tur, x, y, width, height, count):
#     drawline(
#         tur,
#         [x + width * 0.25, height // 2 + y],
#         [x + width * 0.75, height // 2 + y],
#     )
#     drawline(
#         tur,
#         [x + width * 0.25, (height * 0.5) // 2 + y],
#         [x + width * 0.25, (height * 1.5) // 2 + y],
#     )
#     drawline(
#         tur,
#         [x + width * 0.75, (height * 0.5) // 2 + y],
#         [x + width * 0.75, (height * 1.5) // 2 + y],
#     )

#     if count <= 0:  # The base case
#         return
#     else:  # The recursive step
#         count -= 1
        
#         recursivedraw(tur, x, y, width // 2, height // 2, count)
     
#         recursivedraw(tur, x + width // 2, y, width // 2, height // 2, count)
       
#         recursivedraw(tur, x, y + width // 2, width // 2, height // 2, count)
        
#         recursivedraw(tur, x + width // 2, y + width // 2, width // 2, height // 2, count)


# if __name__ == "__main__":
    
#     screenset = turtle.Screen()
#     screenset.setup(screen_width, screen_height)
#     screenset.title(title)
#     screenset.bgcolor(bg_color)

  
#     artistpen = turtle.Turtle()
#     artistpen.hideturtle()
#     artistpen.pensize(pen_width)
#     artistpen.color(pen_color)
#     artistpen.speed(speed)

   
#     recursivedraw(artistpen, - drawing_width / 2, - drawing_height / 2, drawing_width, drawing_height, fractal_depth)


#     turtle.done()






from turtle import *
import turtle

def fractdraw(stp, rule, ang, dept, t):
   if dept > 0:
      x = lambda: fractdraw(stp, "a", ang, dept - 1, t)
      y = lambda: fractdraw(stp, "b", ang, dept - 1, t)
      left = lambda: t.left(ang)
      right = lambda: t.right(ang)
      forward = lambda: t.forward(stp)
      if rule == "a":
        left(); y(); forward(); right(); x(); forward(); x(); right(); forward(); y(); left();
      if rule == "b":
        right(); x(); forward(); left(); y(); forward(); y(); left(); forward(); x(); right();
        
turtle = turtle.Turtle()
turtle.speed(0)
fractdraw(5, "b", 90, 5, turtle)