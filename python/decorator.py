class Animal:
    def __init__(self, name, age, hobby):
        self.name = name
        self.age = age
        self.__hobby = hobby

    @property
    def hobby(self):
        return self.__hobby

    @hobby.setter
    def set_hobby(self, value):
        self.__hobby = value


dog = Animal('dog', 18, 'swimming')

print(dog.hobby)
