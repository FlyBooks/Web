import time


class Person:
    country = 'China'

    def __init__(self, hour, minitus, second):
        self.hour = hour
        self.minitus = minitus
        self.second = second

    @classmethod
    def getCountry(cls):
        return cls.country

    @staticmethod
    def showTime():
        return time.strftime('%H:%M:%S', (time.localtime()))


print(Person.getCountry())
person = Person(23, 15, 23)
print(person.getCountry())
print(Person.showTime())