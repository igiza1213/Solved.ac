string = input().strip()

s = 0
for i, value in enumerate(string):
    if value == "*":
        a = 7 if i % 2 else 1
    else:
        s += int(value) * 3 if i % 2 else int(value)


print(a * (-s) % 10)
