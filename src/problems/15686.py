from itertools import combinations

N, M = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(N)]

chickens = []
houses = []

for i in range(N):
    for j in range(N):
        if matrix[i][j] == 1:
            houses.append((i, j))
        elif matrix[i][j] == 2:
            chickens.append((i, j))

ans = 1e9

for com in combinations(chickens, M):
    res = 0
    for hx, hy in houses:
        res += min(abs(hx - cx) + abs(hy - cy) for cx, cy in com)
    ans = min(ans, res)

print(ans)
