# tupleA = ('A', 'B', 'C', 'D')

# for index, value in enumerate(tupleA):
#     print(index, value)  # 0 A...

# for item in enumerate(tupleA):
#     print(item)  # (0, 'A')...

# set1 = {1, 2, 3, 4, 5}
# set2 = {2, 3, 4, 5}

# print(set1.difference(set2))
# print(set1.discard(3))
# print(set1)


def sumNum(start, end):
    result = 0
    for num in range(start, end + 1):
        result += num
        pass
    return result


def sumNum2(start, end):
    return sum(range(start, end + 1))


print(sumNum2(1, 10))
print(sumNum2(20, 30))
print(sumNum2(35, 45))


def monkNum():
    for num in range(1, 100):
        if num * 3 + (100 - num) / 3 == 100:
            print('大和尚%d人， 小和尚%d人' % (num, 100 - num))
            break


monkNum()


def getOnlyOneNum(array):
    dictA = {}
    for item in array:
        dictA[item] = 0

    for item in array:
        # print(dictA[item])
        # dictA[item] = 1
        dictA[item] += 1
        pass

    newArr = []
    for key, value in dictA.items():
        # if value >1:
        if value == 1:
            newArr.append(key)
    # for item, index in dictA.items():
    # print(item, index, 'hiahia')
    print(newArr)


getOnlyOneNum([1, 2, 3, 4, 4, 5, 6, 5, 6])


def getOnlyOneNumUpgrade(array):
    set1 = set(array)  #去重

    for item in set1:
        array.remove(item)

    singleNum = set1 - set(array)
    print(singleNum)

getOnlyOneNumUpgrade([11,33,11,22,66,77,888,888])