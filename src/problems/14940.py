from collections import deque

N, M = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]

direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]


def bfs(y, x):
    queue = deque([(y, x, 0)])
    visited[y][x] = 1
    matrix[y][x] = 0
    while queue:
        y, x, v = queue.popleft()
        for dx, dy in direction:
            nx, ny = x + dx, y + dy
            if nx < 0 or nx >= M or ny < 0 or ny >= N:
                continue
            if matrix[ny][nx] == 0:
                continue
            if visited[ny][nx] == 1:
                continue
            queue.append([ny, nx, v + 1])
            visited[ny][nx] = 1
            matrix[ny][nx] = v + 1

def solve():
    for y in range(N):
        for x in range(M):
            if matrix[y][x] == 2:
                bfs(y, x)
                return
solve()

for y in range(N):
    for x in range(M):
        if matrix[y][x] == 1 and visited[y][x] == 0:
            matrix[y][x] = -1

for row in matrix:
    print(*row)
