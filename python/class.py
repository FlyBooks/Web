class Person:
    def __init__(self, name, age):
        self.name = name 
        self.age = age

    def getAge(self):
        return id(self)

    def __str__(self):
        return ('hiahia, %s'%(self.name))


person = Person('Eva', 17)
print(person)


