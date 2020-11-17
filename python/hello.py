# number = 8
# print("请输入数字：")
# temp = int(input("数字："))
# while (number != temp):
#     if (temp < number):
#         print("小了")
#     else:
#         print("大了")
#     print("请输入数字：")
#     temp = int(input("数字："))

# print("恭喜猜对了")

# str = 'hia'
# print(str * 3)  # *可以复制
# print('h' in str)  # in可以判断是否在字符串里面，结果是boolean类型的值

# arr = ['1q','2c','3d','4f']
# print('3c' in arr)

#函数：
'''
def 函数名():
    代码块...

函数的调用：

函数名()
'''


def info(height, weight):
    print('小张的身高是%f' % height)
    print('小张的体重是%f' % weight)
    pass


info(1.68, 120)
# *args 表示可变长度的参数，接受的是元祖类型


def getSum(*args):
    sum = 0
    for item in args:
        sum += item
        pass
    return sum
    pass


print(getSum(1, 2, 3))


# 关键字可变参数：接受的是一个字典类型
def keyFunc(**kwArgs):
    print(kwArgs)
    pass


keyFunc(**{'name': 'Eva', 'age': 18})
