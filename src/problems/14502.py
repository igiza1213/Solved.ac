from collections import deque
import copy

N, M = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(N)]
dx, dy = [1, 0, -1, 0], [0, 1, 0, -1]
res = 0


def bfs(arr, iy, ix):
    queue = deque([(iy, ix)])

    while queue:
        y, x = queue.popleft()
        for i in range(4):
            ny, nx = y + dy[i], x + dx[i]
            if 0 <= ny < N and 0 <= nx < M and arr[ny][nx] == 0:
                arr[ny][nx] = 2
                queue.append([ny, nx])


def diff():
    global res
    cnt = 0
    arr = copy.deepcopy(matrix)

    for y in range(N):
        for x in range(M):
            if arr[y][x] == 2:
                bfs(arr, y, x)

    for y in range(N):
        for x in range(M):
            if arr[y][x] == 0:
                cnt += 1
    res = max(res, cnt)


def dfs(cnt):
    global res
    if cnt == 3:
        diff()
        return

    for y in range(N):
        for x in range(M):
            if matrix[y][x] == 0:
                matrix[y][x] = 1
                dfs(cnt + 1)
                matrix[y][x] = 0

dfs(0)

print(res)
