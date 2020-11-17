class fruit:
    def __init__(self,  fruit):
        self.fruit = fruit
        pass

    def __str__(self):
        return '%s的颜色是%s'%(self.fruit, self.color)

    def paitColor(self, color):
        self.color = color
        pass

    def returnSelf(self):
        return id(self)

watermelon = fruit('西瓜')
apple = fruit('苹果')

watermelon.paitColor('green')
apple.paitColor('red')
print(watermelon)
print(apple)
print('*'*50)
print(id(apple) == apple.returnSelf())