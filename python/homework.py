def sum(*args):
    result = 0
    for item in args:
        result += item
        pass
    return result
    pass


print(sum(1, 2, 3, 4))
print(sum(1, 2, 3, 4, 5))


def findOdd(args):
    newOddArr = []
    i = 0
    for index in args:
        print(index, 'index')
        if (i % 2):
            newOddArr.append(args[index])
            pass
        i += 1
    return newOddArr
    pass


print(findOdd([19, 0, 1, 2, 3, 4, 5]))


def findOddUpgrade(container):
    return container[0::2]  #通过切片直接获取奇数位的数值
    pass


print(findOddUpgrade([11, 22, 33, 44, 55, 66, 77]), '2.0 version')


def onlyTwo(args):
    newDict = {}

    for key, value in args.items():
        if (len(value) > 2):
            newDict[key] = value[0:2]
        else:
            newDict[key] = value
    return newDict
    pass


print(onlyTwo({'name': 'Eva', 'major': 'computer science'}))
