from collections import deque

N, M = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(N)]

sy, sx, sa = map(lambda x: int(x) - 1, input().split())
ey, ex, ea = map(lambda x: int(x) - 1, input().split())

dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]
visited = [[[0] * 4 for _ in range(M)] for _ in range(N)]


def bfs():
    queue = deque([(sy, sx, sa, 0)])
    visited[sy][sx][sa] = 1
    while queue:
        y, x, a, v = queue.popleft()
        if (x, y, a) == (ex, ey, ea):
            return v

        for i in range(1, 4):
            nx, ny = x + dx[a] * i, y + dy[a] * i
            if nx < 0 or nx >= M or ny < 0 or ny >= N:
                break
            if matrix[ny][nx]:
                break
            if visited[ny][nx][a]:
                continue
            queue.append([ny, nx, a, v + 1])
            visited[ny][nx][a] = 1

        nas = [0, 1] if a >= 2 else [2, 3]
        for na in nas:
            if visited[y][x][na]:
                continue
            queue.append([y, x, na, v + 1])
            visited[y][x][na] = 1


print(bfs())
