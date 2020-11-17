class Nothing:
    def __init__(self, name):
        self.name = name
        pass

    def eat(self, food):
        print('%s正在吃%s' % (self.name, food))
        pass

    def __del__(self):
        print('hiahia, see you next time~~')

    pass


dog = Nothing('Tom')
dog.eat('狗粮')