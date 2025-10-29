import math

n = int(input())

string = str(math.factorial(n))[::-1]

for i in string:
    if int(i):
        print(i)
        break
