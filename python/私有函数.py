class Animal:
    def __init__(self, name, age,  hobby):
        self.name = name
        self.age = age
        self.__hobby = hobby

    def __run(self):
        print(self.__hobby)
        print("we are running so fast")

    def eat(self):
        self.__run()
        print("we are eating now")

    def set_hobby(self, value):
        self.__hobby = value

    def get_hobby(self):
        return self.__hobby

    hobby = property(get_hobby, set_hobby)


dog = Animal('dog', 2, 'running')
# dog.__run()  # 私有函数，外部不能调用
dog.eat()
dog.hobby = 'swimming'
print(dog.hobby)
# print(dog.__hobby)
