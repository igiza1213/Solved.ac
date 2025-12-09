N = int(input())
matrix = [list(map(int, input().split())) for _ in range(N)]

white = []
black = []

for y in range(N):
    for x in range(N):
        if matrix[y][x] == 1:
            if (x + y) % 2 == 0:
                white.append((x, y))
            else:
                black.append((x, y))

di1 = [0] * (2 * N)
di2 = [0] * (2 * N)


def isAble(x, y):
    if not di1[x + y] and not di2[y - x + N]:
        return True
    return False


def dfs(i, arr, cnt):
    if i == len(arr):
        global res
        res = max(res, cnt)
        return

    x, y = arr[i]
    if isAble(x, y):
        di1[x + y] = di2[y - x + N] = 1
        dfs(i + 1, arr, cnt + 1)
        di1[x + y] = di2[y - x + N] = 0
    dfs(i + 1, arr, cnt)


ans = 0
res = 0
dfs(0, black, 0)
ans += res

res = 0
dfs(0, white, 0)
ans += res

print(ans)
