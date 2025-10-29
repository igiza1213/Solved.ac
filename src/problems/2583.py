from collections import deque

M, N, K = map(int, input().split())

matrix = [[0] * N for _ in range(M)]
res = []

dx, dy = [1, 0, -1, 0], [0, 1, 0, -1]

for _ in range(K):
    sx, sy, ex, ey = map(int, input().split())
    for y in range(sy, ey):
        for x in range(sx, ex):
            matrix[y][x] = 1


def bfs(y, x):
    queue = deque([(y, x)])
    matrix[y][x] = 1
    c = 1
    while queue:
        y, x = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if nx < 0 or nx >= N or ny < 0 or ny >= M or matrix[ny][nx]:
                continue
            queue.append([ny, nx])
            matrix[ny][nx] = 1
            c += 1
    res.append(c)


for y in range(M):
    for x in range(N):
        if matrix[y][x] == 0:
            bfs(y, x)

print(len(res))
print(*sorted(res))
