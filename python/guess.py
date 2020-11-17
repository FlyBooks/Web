import random
answer = random.randint(0, 100)
print("the answer we set is %d" % answer)
guess = int(input('please input the guess number:'))

count = 0
while count < 3:
    if answer == guess:
        print('Congratulations, you guess correctly!')
        break
        pass
    elif answer != guess:
        carryon = input(
            'Unfortunatele, guess wrong! If you wanna guess again, please input Y, otherwise N:'
        )
        if carryon == 'N':
            break
        guess = int(input('please input the guess number:'))

    count += 1
