class Father:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        pass

    def hobby(self, hobby):
        self.hobby = hobby
        print(type(hobby))
        print('father %s likes %s' % (self.name, self.hobby))


class Son(Father):
    def __init__(self,name,age):
      super().__init__(name,age)
    def job(self):
        return 'study'


child = Son('Tom',19)

child.hobby('exercising')
print(child.hobby)
