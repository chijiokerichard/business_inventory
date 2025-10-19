# def mor_Duties():
#     print("i brush teeth")
#     print("i bath")
#     print("i eat")

# mor_Duties()
# def left():
#     print("moving left")

# def right():
#     print("moving right")

# def carDirection():
#     print("car moving...")
#     direction=input("enter direction: ")
#     if direction =="left":
#         left()
#         carDirection()
#     elif direction == "right":
#         right()
#         carDirection()

    

# carDirection()



# def uche(receive_money):
#     print("game started")
#     bal = receive_money
#     print(f"your bal is ${bal}")





# def bank_pay_person():
#     people_money = 2000
#     # start=int(input("enter 1 to start game... "))
#     # pause=int(input("enter 2 to pause game... "))
#     # fire=int(input("enter 3 to fire"))
#     # dodge=int(input("enter 4 to start game... "))
#     pay = 200
#     uche(pay)

# bank_pay_person()


# def collectInfo(o):
#     print(o)


# collectInfo("are we in good term bro")
# collectInfo("if we are good say hi bro")




class Schooll:
    def __init__(self):
        self.name = input("enter name? ")
        self.logUser()

    def logUser(self):
        if self.name == "chijioke":
            print(f"welcome {self.name}")
        else:
            print(f"user {self.name} not recognized")
            self.__init__()

Schooll()