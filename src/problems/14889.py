from itertools import combinations

N = int(input())
matrix = [list(map(int, input().split())) for _ in range(N)]
member = [i for i in range(N)]

ans = 1e9

team = combinations(member, N // 2)

arr = []
for t in team:
    comb = combinations(t, 2)
    res = 0
    for c in comb:
        res += matrix[c[0]][c[1]] + matrix[c[1]][c[0]]
    arr.append(res)

for i in range(len(arr) // 2):
    ans = min(ans, abs(arr[i] - arr[len(arr) - i - 1]))

print(ans)
