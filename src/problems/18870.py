N = int(input())
arr = list(map(int, input().split()))

unique = sorted(set(arr))
compressed = {value: index for index, value in enumerate(unique)}
result = [compressed[value] for value in arr]

print(*result)
