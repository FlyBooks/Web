# arr = ['w', 'x', 'y']

# for value in arr:
#     print(value)

# for i in range(2, 9):
#     print(i)

# for i in range(3, 10, 3):
#     if (i == 6):
#         print("哈哈，步长是3耶")

#     print(i)

# name = "Eva"
# school = "实验小学"
# print("%s在 %s读书" % (name, school))
# print('{}在{}上学'.format(name, school))

# score = 90

# if score > 80:
#     print("A")
#     pass
# elif score > 60:
#     print("B")
#     pass
# else:
#     print("C")
#     pass

# print("if condition finished")

# import random
# num = random.randint(0, 2)

# yourNum = int(input('请输入0-2的数字, 0代表剪刀，1代表石头，2代表布:'))

# if (yourNum == 0 and num == 2):
#     print('Congratulations, you win')
#     pass
# elif (yourNum == 1 and num == 0):
#     print("Congratulations, you win!")
#     pass
# elif (yourNum == 2 and num == 1):
#     print('Congratulations, you win!')
#     pass
# elif (yourNum == num):
#     print('Not too bad')
#     pass
# else:
#     print('Sorry, you lost')

# for i in range(1, 10):
#     for j in range(1, i + 1):
#         print("%d*%d=%d" % (j, i, i * j), end=" ")
#         pass
#     print()
#     pass

# print(all([0,1,2,3,4]))
# print(all([1,2,3]))
# print(all([]))

# print(sorted([1, 0, 23, 11, 7, 9], reverse=True))

series = '1 2 3'
books = 'java c js'
places = 'b1 b2 b3'

series = series.split(" ")
books = books.split(" ")
places = places.split(" ")

infos = zip(series, books, places)

booksDict = []
for item in list(infos):
    booksDict.append({'id': item[0], 'name': item[1], 'place': item[2]})

print(booksDict)