from copy import deepcopy

N, M = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(N)]

direction = [(0, 1), (1, 0), (0, -1), (-1, 0)]

cctv_dir = {
    1: [[0], [1], [2], [3]],
    2: [[0, 2], [1, 3]],
    3: [[0, 3], [3, 2], [2, 1], [1, 0]],
    4: [[0, 3, 2], [3, 2, 1], [2, 1, 0], [1, 0, 3]],
    5: [[0, 1, 2, 3]],
}

cctv = []
for y in range(N):
    for x in range(M):
        if 1 <= matrix[y][x] <= 5:
            cctv.append((x, y, matrix[y][x]))

ans = 1e9


def watch(x, y, d, board):
    dx, dy = direction[d]
    nx, ny = x + dx, y + dy

    while 0 <= nx < M and 0 <= ny < N:
        if board[ny][nx] == 6:
            break
        if board[ny][nx] == 0:
            board[ny][nx] = -1
        nx, ny = nx + dx, ny + dy


def dfs(i, board):
    global ans

    if i == len(cctv):
        res = sum(row.count(0) for row in board)
        ans = min(ans, res)
        return

    x, y, v = cctv[i]

    for dirs in cctv_dir[v]:
        b = deepcopy(board)
        for d in dirs:
            watch(x, y, d, b)
        dfs(i + 1, b)


dfs(0, matrix)
print(ans)
