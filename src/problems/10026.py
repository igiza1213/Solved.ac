from collections import deque

N = int(input())

matrix = [list(input().strip()) for _ in range(N)]
direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]


def bfs1(y, x, v):
    queue = deque([(y, x)])
    visited[y][x] = 1
    while queue:
        y, x = queue.popleft()
        for dx, dy in direction:
            nx, ny = x + dx, y + dy
            if nx < 0 or nx >= N or ny < 0 or ny >= N:
                continue
            if visited[ny][nx] == 1:
                continue
            if matrix[ny][nx] != v:
                continue
            queue.append([ny, nx])
            visited[ny][nx] = 1


visited = [[0] * N for _ in range(N)]

cnt1 = 0
for y in range(N):
    for x in range(N):
        if visited[y][x] == 0:
            bfs1(y, x, matrix[y][x])
            cnt1 += 1

for y in range(N):
    for x in range(N):
        if matrix[y][x] == "G":
            matrix[y][x] = "R"


visited = [[0] * N for _ in range(N)]

cnt2 = 0
for y in range(N):
    for x in range(N):
        if visited[y][x] == 0:
            bfs1(y, x, matrix[y][x])
            cnt2 += 1

print(cnt1, cnt2)
