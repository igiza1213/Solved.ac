from collections import deque

N, H, D = map(int, input().split())

matrix = [list(input().strip()) for _ in range(N)]

direction = [(0, 1), (0, -1), (1, 0), (-1, 0)]
res = -1


def bfs(x, y):
    queue = deque([[x, y, 0, 0, H]])
    visited = [[0] * N for _ in range(N)]
    visited[y][x] = 1

    while queue:
        x, y, cnt, u, h = queue.popleft()

        if matrix[y][x] == "E":
            return res

        for dx, dy in direction:
            nx, ny = x + dx, y + dy

            if 0 <= nx < N and 0 <= ny < N and visited[ny][nx] == 0:

                if matrix[ny][nx] == "U":
                    u = D

                if u > 0:
                    u -= 1
                else:
                    h -= 1

                if h == 0:
                    continue

                queue.append([nx, ny, cnt + 1, u, h])
                visited[ny][nx] = 1


for y in range(N):
    for x in range(N):
        if matrix[y][x] == "S":
            res = bfs(x, y)

print(res)
