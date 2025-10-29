from collections import deque

N, M = map(int, input().split())

matrix = [list(input().strip()) for _ in range(N)]

dx, dy = [1, 0, -1, 0], [0, 1, 0, -1]


def fire(y, x, v, f):
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if 0 <= nx < M and 0 <= ny < N and matrix[ny][nx] == ".":
            queue.append([ny, nx, v + 1, f])
            matrix[ny][nx] = "*"


def man(y, x, v, f):
    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if 0 <= nx < M and 0 <= ny < N and matrix[ny][nx] == ".":
            queue.append([ny, nx, v + 1, f])
            matrix[ny][nx] = str(v + 1)
        elif 0 <= nx < M and 0 <= ny < N and matrix[ny][nx] == "D":
            return 1
    return 0


def bfs():
    v = 0
    while queue:
        y, x, v, f = queue.popleft()
        if f == "s":
            if man(y, x, v, f):
                return v + 1
        else:
            fire(y, x, v, f)

    return "KAKTUS"


arr = {"s": [], "f": []}
res = 0
for y in range(N):
    for x in range(M):
        if matrix[y][x] == "S":
            arr["s"].append([y, x, 0, "s"])
        if matrix[y][x] == "*":
            arr["f"].append([y, x, 0, "*"])

queue = deque([*arr["f"], *arr["s"]])
print(bfs())
