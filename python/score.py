# score = int(input("输入的分数是："))
# if score >= 90:
#     print("A")
# elif score >= 80:
#     print("B")
# elif score >= 60:
#     print("C")
# elif score >= 0:
#     print("D")
# else:
#     print("Error")

# test = lambda x, y, z: x + y + z

# print(test(1, 2, 3))

# age = 19
# print("可以工作了" if age > 19 else "继续读书")

# def recursion(n):
#     if (n == 1):
#         return 1

#     return n * recursion(n - 1)

# def loop(n):
#     sum = 1
#     for i in range(1,n+1):
#         sum *= i
#     return sum

# print(recursion(5))
# print(loop(6))

import os


def findDir(filepath):
    listDir = os.listdir(filepath)
    for item in listDir:
        if os.path.isdir(item):
            findDir(item)
            pass
        else:
            print(os.path.join(filepath, item))
            pass
    else:
        return


findDir('C:\Software\wamp64\www\Projects\Web')