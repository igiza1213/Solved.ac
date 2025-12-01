from collections import deque

N, H, D = map(int, input().split())

matrix = [list(input().strip()) for _ in range(N)]

direction = [(0, 1), (0, -1), (1, 0), (-1, 0)]
res = -1


def bfs(x, y):
    queue = deque([[x, y, H, 0, 0]])
    visited = [[0] * N for _ in range(N)]
    visited[y][x] = H

    while queue:
        x, y, h, u, cnt = queue.popleft()

        for dx, dy in direction:
            nx, ny = x + dx, y + dy

            if 0 <= nx < N and 0 <= ny < N:

                if matrix[ny][nx] == "E":
                    return cnt + 1

                nu, nh = u, h

                if matrix[ny][nx] == "U":
                    nu = D

                if nu == 0:
                    nh -= 1
                else:
                    nu -= 1

                if nh == 0:
                    continue

                if visited[ny][nx] < nh:
                    visited[ny][nx] = nh
                    queue.append((nx, ny, nh, nu, cnt + 1))

    return -1


for y in range(N):
    for x in range(N):
        if matrix[y][x] == "S":
            res = bfs(x, y)

print(res)
