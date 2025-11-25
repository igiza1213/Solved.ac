N = int(input())
A = list(map(int, input().split()))
B, C = map(int, input().split())

result = 0

for students in A:
    result += 1
    students -= B

    if students > 0:
        result += (students + C - 1) // C

print(result)
